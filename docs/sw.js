self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('geoPosApp')
            .then(cache => cache.addAll([
                '/geoposApp/',
                'index.html',
                'style.css',
                'app.js',
                'icon512.png',
                'icon16.png',
                'manifest.webmanifest'
            ]))
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.open('geoPosApp')
            .then(cache => cache.match(event.request))
    );
});