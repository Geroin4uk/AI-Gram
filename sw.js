// Service Worker для AI-Gram.
// Должен лежать РЯДОМ с index.html (тот же путь, что и './sw.js' в registerServiceWorker()).
//
// Стратегия: NETWORK-FIRST для оболочки приложения на своём домене.
//  - Когда есть сеть, всегда берём свежие index.html/app.js/app.css и т.д. — поэтому
//    новые сборки применяются сразу, без «застревания» на старом кеше.
//  - Кеш используется только как офлайн-фолбэк.
//  - Кросс-доменные запросы (Gemini API, Hugging Face / hf.co веса моделей, esm.run,
//    cdn.jsdelivr.net) НИКОГДА не перехватываются — идут напрямую в сеть.
//  - Новый воркер активируется немедленно (skipWaiting + clients.claim), страница
//    один раз перезагружается при смене контроллера (см. registerServiceWorker в app.js).

const CACHE_NAME = 'ai-gram-shell-v12';
const APP_SHELL = [
  './',
  './index.html',
  './css/app.css?v=p8',
  './js/app.js?v=p8',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-192.png',
  './icons/icon-maskable-512.png'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL).catch(() => {}))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  // Трогаем только свой домен; всё кросс-доменное (API, модели, CDN) не перехватываем.
  if (url.origin !== self.location.origin) return;

  event.respondWith((async () => {
    try {
      // Network-first: всегда пытаемся получить свежую версию.
      const fresh = await fetch(request);
      if (fresh && fresh.ok && fresh.type === 'basic') {
        const cache = await caches.open(CACHE_NAME);
        cache.put(request, fresh.clone()).catch(() => {});
      }
      return fresh;
    } catch (error) {
      // Офлайн — отдаём из кеша, для навигаций фолбэк на index.html.
      const cached = await caches.match(request);
      if (cached) return cached;
      if (request.mode === 'navigate') {
        const shell = await caches.match('./index.html');
        if (shell) return shell;
      }
      throw error;
    }
  })());
});
