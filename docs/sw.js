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

self.addEventListener('fetch', function(event) {
    event.respondWith(
      fetch(event.request).catch(function() {
        return caches.match(event.request);
      })
    );
  });