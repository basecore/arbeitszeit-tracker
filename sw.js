const CACHE_NAME = 'gps-tracker-v2.0.0';

// Dateien, die beim ersten Aufruf direkt gespeichert werden sollen (App Shell)
const PRECACHE_ASSETS = [
    './',
    './index.html',
    './manifest.json',
    './images/icon.svg',
    './images/icon-192.png',
    './images/icon-512.png',
    'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
    'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
];

// Installation: Cache öffnen und Assets laden
self.addEventListener('install', (event) => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('[Service Worker] Caching App Shell');
                return cache.addAll(PRECACHE_ASSETS);
            })
    );
});

// Aktivierung: Alte Caches löschen, wenn sich CACHE_NAME ändert
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        console.log('[Service Worker] Lösche alten Cache:', cache);
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

// Fetch-Ereignis: Network First, Fallback auf Cache
self.addEventListener('fetch', (event) => {
    // Nur GET-Requests cachen
    if (event.request.method !== 'GET') return;

    event.respondWith(
        fetch(event.request)
            .then((networkResponse) => {
                // Antwort ist gültig -> dynamisch in den Cache legen für den nächsten Offline-Besuch
                if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
                    const responseToCache = networkResponse.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, responseToCache);
                    });
                }
                return networkResponse;
            })
            .catch(() => {
                // Offline? Aus dem Cache laden!
                return caches.match(event.request);
            })
    );
});
