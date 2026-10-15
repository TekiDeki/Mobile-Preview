// Mobile Preview - service worker (cache-first shell, network-first for URLs)
const CACHE_NAME = 'mobile-preview-v6';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './LICENSE',
  './manifest.json',
  './favicon.ico',
  './icon-maskable-512.png',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png',
  './og-image.png',
  './screenshot-narrow.png',
  './screenshot-wide.png'
];

// install: pre-cache app shell
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS_TO_CACHE))
      .then(() => self.skipWaiting())
  );
});

// activate: drop old caches and tell open pages that a new version is ready
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      const oldCaches = keys.filter((k) => k.startsWith('mobile-preview-v') && k !== CACHE_NAME);
      return Promise.all(oldCaches.map((k) => caches.delete(k))).then(() => {
        if (oldCaches.length === 0) return undefined;
        return self.clients.matchAll({ type: 'window' }).then((clients) => {
          clients.forEach((client) => client.postMessage({ type: 'SW_UPDATED', cache: CACHE_NAME }));
        });
      });
    }).then(() => self.clients.claim())
  );
});

// fetch: only handle same-origin requests (app shell). Preview URLs go straight to network.
self.addEventListener('fetch', (event) => {
  const licenseUrl = new URL('./LICENSE', self.registration.scope).href;
  if (event.request.method === 'GET' && event.request.url === licenseUrl) {
    event.respondWith(caches.open(CACHE_NAME).then(cache => cache.match(event.request)).then(cached => cached || fetch(event.request)));
    return;
  }
  const req = event.request;
  if (req.method !== 'GET') return;

  let url;
  try { url = new URL(req.url); } catch (e) { return; }

  // never intercept cross-origin (user previews, external URLs)
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req).then((res) => {
        // cache successful same-origin GET responses
        if (res && res.status === 200 && res.type === 'basic') {
          const copy = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
        }
        return res;
      }).catch(() => caches.match('./index.html'));
    })
  );
});
