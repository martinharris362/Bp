self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("bp_readings_v1").then(cache => {
      return cache.addAll(["./", "./manifest.json"]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
