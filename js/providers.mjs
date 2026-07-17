// @ts-check
/**
 * AI-Gram · Слой провайдеров ИИ (ES-модуль, строгая типизация через JSDoc + tsc).
 *
 * Архитектура: каждый провайдер — самодостаточный адаптер с единым контрактом
 * `complete(ctx)`. Модуль не знает ничего про DOM, хранилище и состояние
 * приложения — всё приходит через ctx (dependency injection). Благодаря этому
 * файл покрывается typecheck'ом в CI и тестируется изолированно.
 *
 * Здесь живут НОВЫЕ провайдеры (OpenAI-совместимые и Anthropic Claude).
 * Исторические (Gemini SSE, Yandex) пока остаются в app.js и будут переезжать
 * сюда поэтапно — это осознанная стратегия миграции без big-bang рефакторинга.
 */

/**
 * @typedef {Object} ChatMLMessage
 * @property {'system'|'user'|'assistant'} role
 * @property {string} content
 */

/**
 * @typedef {Object} ProviderContext
 * @property {ChatMLMessage[]} messages   Полная история в формате ChatML (system первым).
 * @property {string} apiKey              Ключ провайдера (может быть пустым для локальных серверов).
 * @property {string} model               Идентификатор модели.
 * @property {string} [baseUrl]           Базовый URL (для OpenAI-совместимых серверов).
 * @property {number} [maxTokens]         Ограничение длины ответа.
 * @property {number} [temperature]
 * @property {AbortSignal|null} [signal]
 * @property {typeof fetch} [fetchFn]     Инъекция fetch для тестов.
 */

/**
 * @typedef {Object} Provider
 * @property {string} id
 * @property {string} label
 * @property {(ctx: ProviderContext) => Promise<string>} complete  Возвращает текст ответа.
 */

/** Обрезает и нормализует базовый URL OpenAI-совместимого сервера. */
export function normalizeBaseUrl(/** @type {string} */ url) {
  const trimmed = String(url || '').trim().replace(/\/+$/, '');
  if (!trimmed) return 'https://api.openai.com/v1';
  return /\/v\d+$/.test(trimmed) ? trimmed : `${trimmed}/v1`;
}

/**
 * Anthropic требует строгого чередования user/assistant — склеиваем подряд
 * идущие сообщения одной роли (частый случай в групповых чатах, где несколько
 * реплик разных персонажей подряд помечены как user).
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
  // Диалог обязан начинаться с user
  if (turns.length && turns[0].role === 'assistant') turns.unshift({ role: 'user', content: '(начало диалога)' });
  return { system, turns };
}

/** @param {Response} res @param {string} label */
async function throwHttpError(res, label) {
  /** @type {any} */
  let data = null;
  try { data = await res.json(); } catch { /* ignore */ }
  const detail = data?.error?.message || data?.message || '';
  throw new Error(`${label}: HTTP ${res.status}${detail ? ` — ${String(detail).slice(0, 140)}` : ''}`);
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
    const res = await doFetch(`${base}/chat/completions`, {
      method: 'POST',
      headers,
      signal: ctx.signal || null,
      body: JSON.stringify({
        model: ctx.model,
        messages: ctx.messages,
        temperature: ctx.temperature ?? 0.7,
        max_tokens: ctx.maxTokens ?? 512,
        stream: false
      })
    });
    if (!res.ok) await throwHttpError(res, 'OpenAI API');
    /** @type {any} */
    const data = await res.json();
    return String(data?.choices?.[0]?.message?.content || '').trim();
  }
};

/** @type {Provider} */
export const anthropicProvider = {
  id: 'anthropic',
  label: 'Anthropic Claude',
  async complete(ctx) {
    const doFetch = ctx.fetchFn || fetch;
    const { system, turns } = toAnthropicShape(ctx.messages);
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
        messages: turns
      })
    });
    if (!res.ok) await throwHttpError(res, 'Anthropic API');
    /** @type {any} */
    const data = await res.json();
    const block = Array.isArray(data?.content) ? data.content.find((/** @type {any} */ b) => b?.type === 'text') : null;
    return String(block?.text || '').trim();
  }
};

/** Реестр провайдеров модульного слоя. @type {Record<string, Provider>} */
export const PROVIDERS = Object.freeze({
  openai: openAiCompatibleProvider,
  anthropic: anthropicProvider
});
