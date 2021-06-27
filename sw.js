var cacheName = 'piac-pwa';
var filesToCache = [
'/',
'/index.html',
'/css/style.css',
'/css/bootstrap.css',
'/js/main.js',
'/kursy.html',
'/kontakt.html',
'/img/azure.jpg',
'/img/rest.jpg',
'/img/python.jpg',
];
self.addEventListener('install', function(e) {
e.waitUntil(
caches.open(cacheName).then(function(cache) {
return cache.addAll(filesToCache);
})
);
});
self.addEventListener('fetch', function(e) {
e.respondWith(
caches.match(e.request).then(function(response) {
return response || fetch(e.request);
})
);
});
