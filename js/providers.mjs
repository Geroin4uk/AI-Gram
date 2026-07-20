// @ts-check
/**
 * AI-Gram · Слой провайдеров ИИ (ES-модуль, строгая типизация через JSDoc + tsc).
 *
 * Архитектура: каждый провайдер — самодостаточный адаптер с единым контрактом
 * `complete(ctx)`. Модуль не знает ничего про DOM, хранилище и состояние
 * приложения — всё приходит через ctx (dependency injection).
 *
 * Все четыре сетевых провайдера (OpenAI-совместимые, Anthropic, Gemini, Yandex)
 * живут здесь и поддерживают потоковую генерацию: если задан ctx.onChunk, он
 * вызывается с НАКОПЛЕННЫМ текстом по мере прихода данных (контракт тот же,
 * что исторически был у Gemini в app.js).
 */

/**
 * @typedef {Object} ChatMLMessage
 * @property {'system'|'user'|'assistant'} role
 * @property {string} content
 */

/**
 * @typedef {Object} ProviderContext
 * @property {ChatMLMessage[]} messages   История в формате ChatML (system первым).
 * @property {string} apiKey              Ключ провайдера (может быть пустым для локальных серверов).
 * @property {string} model               Идентификатор модели.
 * @property {string} [baseUrl]           Базовый URL (OpenAI-совместимые / Gemini API root).
 * @property {string} [folderId]          Yandex Cloud folder_id.
 * @property {unknown[]} [geminiContents] Сырой формат истории Gemini (с изображениями) — готовится приложением.
 * @property {string} [systemPrompt]      Системный промпт (для Gemini systemInstruction).
 * @property {number} [maxTokens]
 * @property {number} [temperature]
 * @property {AbortSignal|null} [signal]
 * @property {(fullTextSoFar: string) => void} [onChunk]  Стриминг: накопленный текст.
 * @property {typeof fetch} [fetchFn]     Инъекция fetch для тестов.
 */

/**
 * @typedef {Object} Provider
 * @property {string} id
 * @property {string} label
 * @property {(ctx: ProviderContext) => Promise<string>} complete  Возвращает полный текст ответа.
 */

/** Ошибка HTTP с сохранением статуса и тела — приложение оборачивает её в свои тексты. */
export class ProviderHttpError extends Error {
  /** @param {string} label @param {number} status @param {unknown} data */
  constructor(label, status, data) {
    const detail = /** @type {any} */ (data)?.error?.message || /** @type {any} */ (data)?.message || '';
    super(`${label}: HTTP ${status}${detail ? ` — ${String(detail).slice(0, 140)}` : ''}`);
    this.status = status;
    this.data = data;
  }
}

/** Обрезает и нормализует базовый URL OpenAI-совместимого сервера. */
export function normalizeBaseUrl(/** @type {string} */ url) {
  const trimmed = String(url || '').trim().replace(/\/+$/, '');
  if (!trimmed) return 'https://api.openai.com/v1';
  return /\/v\d+$/.test(trimmed) ? trimmed : `${trimmed}/v1`;
}

/**
 * Anthropic требует строгого чередования user/assistant — склеиваем подряд
 * идущие сообщения одной роли (частый случай в групповых чатах).
 * @param {ChatMLMessage[]} messages
 * @returns {{system: string, turns: {role: 'user'|'assistant', content: string}[]}}
 */
export function toAnthropicShape(messages) {
  let system = '';
  /** @type {{role: 'user'|'assistant', content: string}[]} */
  const turns = [];
  for (const message of messages) {
    if (message.role === 'system') { system += (system ? '\n' : '') + message.content; continue; }
    const role = message.role === 'assistant' ? 'assistant' : 'user';
    const prev = turns[turns.length - 1];
    if (prev && prev.role === role) prev.content += '\n' + message.content;
    else turns.push({ role, content: message.content });
  }
  if (turns.length && turns[0].role === 'assistant') turns.unshift({ role: 'user', content: '(начало диалога)' });
  return { system, turns };
}

/** @param {Response} res @param {string} label @returns {Promise<never>} */
async function raiseHttp(res, label) {
  /** @type {unknown} */
  let data = null;
  try { data = await res.json(); } catch { /* тело может быть пустым */ }
  throw new ProviderHttpError(label, res.status, data);
}

/**
 * Универсальный ридер потока: делит входящие байты по разделителю,
 * каждую часть отдаёт в handle().
 * @param {Response} res
 * @param {RegExp} splitter
 * @param {(part: string) => void} handle
 */
async function readStreamParts(res, splitter, handle) {
  const reader = res.body?.getReader?.();
  if (!reader) {
    const text = await res.text();
    text.split(splitter).forEach(part => handle(part));
    return;
  }
  const decoder = new TextDecoder();
  let buffer = '';
  for (;;) {
    const { value, done } = await reader.read();
    buffer += decoder.decode(value || new Uint8Array(), { stream: !done });
    const parts = buffer.split(splitter);
    buffer = done ? '' : (parts.pop() || '');
    for (const part of parts) handle(part);
    if (done) break;
  }
  if (buffer.trim()) handle(buffer);
}

/** Достаёт полезную нагрузку из SSE-события (строки `data: ...`). */
function ssePayload(/** @type {string} */ eventBlock) {
  return eventBlock
    .split(/\r?\n/)
    .filter(line => line.startsWith('data:'))
    .map(line => line.replace(/^data:\s?/, ''))
    .join('\n')
    .trim();
}

/** @type {Provider} */
export const openAiCompatibleProvider = {
  id: 'openai',
  label: 'OpenAI / совместимые',
  async complete(ctx) {
    const doFetch = ctx.fetchFn || fetch;
    const base = normalizeBaseUrl(ctx.baseUrl || '');
    /** @type {Record<string, string>} */
    const headers = { 'Content-Type': 'application/json' };
    if (ctx.apiKey) headers.Authorization = `Bearer ${ctx.apiKey}`;
    const wantStream = typeof ctx.onChunk === 'function';
    const res = await doFetch(`${base}/chat/completions`, {
      method: 'POST',
      headers,
      signal: ctx.signal || null,
      body: JSON.stringify({
        model: ctx.model,
        messages: ctx.messages,
        temperature: ctx.temperature ?? 0.7,
        max_tokens: ctx.maxTokens ?? 512,
        stream: wantStream
      })
    });
    if (!res.ok) return raiseHttp(res, 'OpenAI API');
    if (!wantStream) {
      /** @type {any} */
      const data = await res.json();
      return String(data?.choices?.[0]?.message?.content || '').trim();
    }
    let full = '';
    await readStreamParts(res, /\r?\n\r?\n/, block => {
      const payload = ssePayload(block);
      if (!payload || payload === '[DONE]') return;
      try {
        /** @type {any} */
        const parsed = JSON.parse(payload);
        const delta = parsed?.choices?.[0]?.delta?.content || parsed?.choices?.[0]?.message?.content || '';
        if (delta) { full += delta; ctx.onChunk?.(full); }
      } catch { /* пропускаем нечитаемый чанк */ }
    });
    return full.trim();
  }
};

/** @type {Provider} */
export const anthropicProvider = {
  id: 'anthropic',
  label: 'Anthropic Claude',
  async complete(ctx) {
    const doFetch = ctx.fetchFn || fetch;
    const { system, turns } = toAnthropicShape(ctx.messages);
    const wantStream = typeof ctx.onChunk === 'function';
    const res = await doFetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      signal: ctx.signal || null,
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': ctx.apiKey,
        'anthropic-version': '2023-06-01',
        // Официальный заголовок Anthropic для прямых браузерных запросов (CORS)
        'anthropic-dangerous-direct-browser-access': 'true'
      },
      body: JSON.stringify({
        model: ctx.model,
        max_tokens: ctx.maxTokens ?? 512,
        temperature: ctx.temperature ?? 0.7,
        system: system || undefined,
        messages: turns,
        stream: wantStream
      })
    });
    if (!res.ok) return raiseHttp(res, 'Anthropic API');
    if (!wantStream) {
      /** @type {any} */
      const data = await res.json();
      const block = Array.isArray(data?.content) ? data.content.find((/** @type {any} */ b) => b?.type === 'text') : null;
      return String(block?.text || '').trim();
    }
    let full = '';
    await readStreamParts(res, /\r?\n\r?\n/, block => {
      const payload = ssePayload(block);
      if (!payload) return;
      try {
        /** @type {any} */
        const parsed = JSON.parse(payload);
        if (parsed?.type === 'content_block_delta' && parsed?.delta?.text) {
          full += parsed.delta.text;
          ctx.onChunk?.(full);
        }
      } catch { /* служебные события пропускаем */ }
    });
    return full.trim();
  }
};

/** @type {Provider} */
export const geminiProvider = {
  id: 'gemini',
  label: 'Google Gemini',
  async complete(ctx) {
    const doFetch = ctx.fetchFn || fetch;
    const root = String(ctx.baseUrl || 'https://generativelanguage.googleapis.com/v1beta/models').replace(/\/+$/, '');
    const url = `${root}/${ctx.model}:streamGenerateContent?alt=sse`;
    const res = await doFetch(url, {
      method: 'POST',
      signal: ctx.signal || null,
      headers: { 'Content-Type': 'application/json', 'x-goog-api-key': ctx.apiKey },
      body: JSON.stringify({
        systemInstruction: ctx.systemPrompt ? { parts: [{ text: ctx.systemPrompt }] } : undefined,
        contents: ctx.geminiContents || [],
        generationConfig: { temperature: ctx.temperature ?? 0.7, topP: 0.9, topK: 40, maxOutputTokens: ctx.maxTokens ?? 512 }
      })
    });
    if (!res.ok) return raiseHttp(res, 'Google AI');
    let full = '';
    await readStreamParts(res, /\r?\n\r?\n/, block => {
      const payload = ssePayload(block);
      if (!payload || payload === '[DONE]') return;
      try {
        /** @type {any} */
        const parsed = JSON.parse(payload);
        const piece = parsed?.candidates?.[0]?.content?.parts?.map((/** @type {any} */ p) => p.text || '').join('') || '';
        if (piece) { full += piece; ctx.onChunk?.(full); }
      } catch { /* нечитаемый чанк пропускаем */ }
    });
    return full.trim();
  }
};

/** @type {Provider} */
export const yandexProvider = {
  id: 'yandex',
  label: 'Yandex Cloud',
  async complete(ctx) {
    const doFetch = ctx.fetchFn || fetch;
    const wantStream = typeof ctx.onChunk === 'function';
    const res = await doFetch('https://llm.api.cloud.yandex.net/foundationModels/v1/completion', {
      method: 'POST',
      signal: ctx.signal || null,
      headers: { 'Content-Type': 'application/json', Authorization: `Api-Key ${ctx.apiKey}`, 'x-folder-id': ctx.folderId || '' },
      body: JSON.stringify({
        modelUri: `gpt://${ctx.folderId}/${ctx.model}`,
        completionOptions: { stream: wantStream, temperature: ctx.temperature ?? 0.7, maxTokens: String(ctx.maxTokens ?? 512) },
        messages: ctx.messages.map(message => ({ role: message.role, text: message.content }))
      })
    });
    if (!res.ok) return raiseHttp(res, 'Yandex Cloud');
    if (!wantStream) {
      /** @type {any} */
      const data = await res.json().catch(() => null);
      return String(data?.result?.alternatives?.[0]?.message?.text || '').trim();
    }
    // Стриминг Yandex — поток JSON-объектов (по одному в строке); поле text в каждом
    // объекте содержит НАКОПЛЕННЫЙ текст ответа. Держим самый длинный снапшот.
    let full = '';
    await readStreamParts(res, /\r?\n/, line => {
      const clean = line.trim();
      if (!clean) return;
      try {
        /** @type {any} */
        const parsed = JSON.parse(clean);
        const text = String(parsed?.result?.alternatives?.[0]?.message?.text || '');
        if (text && text.length >= full.length) { full = text; ctx.onChunk?.(full); }
      } catch { /* частичная строка — дождёмся продолжения */ }
    });
    return full.trim();
  }
};

/** Реестр провайдеров модульного слоя. @type {Record<string, Provider>} */
export const PROVIDERS = Object.freeze({
  openai: openAiCompatibleProvider,
  anthropic: anthropicProvider,
  gemini: geminiProvider,
  yandex: yandexProvider
});
