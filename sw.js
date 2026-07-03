// Service Worker для AI Messenger.
// Должен лежать РЯДОМ с html-файлом приложения (тот же путь, что и './sw.js' в registerServiceWorker()).
//
// Что делает:
//  - Кеширует саму страницу (App Shell), чтобы приложение открывалось офлайн.
//  - Использует стратегию "сначала кеш, обновление в фоне" только для запросов на
//    ТОТ ЖЕ домен, что и сама страница.
//  - НИКОГДА не трогает кросс-доменные запросы (Gemini API, Hugging Face / hf.co
//    веса моделей, esm.run, cdn.jsdelivr.net) — они идут напрямую в сеть, как обычно.
//    Это важно: перехват огромных бинарных файлов модели через Cache Storage может
//    сломать их загрузку или раздуть кеш на сотни МБ и гигабайты без необходимости.
//
// Версию кеша (CACHE_NAME) стоит менять при каждом заметном обновлении html-файла,
// чтобы у пользователей подтянулась свежая версия оболочки.

const CACHE_NAME = 'ai-messenger-shell-v5';
const APP_SHELL = [
  './',
  './index.html',
  './css/app.css',
  './js/app.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-192.png',
  './icons/icon-maskable-512.png'
];

self.addEventListener('install', event => {
  // Do NOT skipWaiting() automatically: activating a new worker mid-session can serve a
  // mix of old and new shell assets (e.g. fresh app.js against a cached index.html).
  // Instead the new worker waits; the page shows an "update ready" toast and applies it
  // on the user's terms (message below) or on the next full open.
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_SHELL).catch(() => {}))
  );
});

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  // Только свой домен: не кешируем и не перехватываем сторонние API/CDN/модели.
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(req).then(cached => {
      const networkFetch = fetch(req)
        .then(response => {
          if (response && response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(req, copy)).catch(() => {});
          }
          return response;
        })
        // Bug fix: when the network failed AND the request wasn't cached, this used to
        // resolve respondWith() with `undefined`, which throws a TypeError and breaks
        // the request entirely. Fall back to the cached shell for navigations and to a
        // proper network-error response for everything else.
        .catch(() => cached || (req.mode === 'navigate' ? caches.match('./index.html') : undefined))
        .then(response => response || Response.error());
      // Отдаём кеш сразу, если он есть (быстрый офлайн-старт), и обновляем его в фоне.
      return cached || networkFetch;
    })
  );
});
