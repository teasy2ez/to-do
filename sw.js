const CACHE_NAME = 'to-do-t-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Let Network / Firebase handle fetch requests directly
  event.respondWith(fetch(event.request));
});
