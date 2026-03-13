const CACHE = 'kredit-v2';
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(['/kredit-mahali/', '/kredit-mahali/index.html'])));
  self.skipWaiting();
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch', e => {
  if (e.request.url.includes('supabase') || e.request.url.includes('googleapis')) return;
  e.respondWith(fetch(e.request).then(r => {
    if (r && r.status===200) { const c=r.clone(); caches.open(CACHE).then(ca=>ca.put(e.request,c)); }
    return r;
  }).catch(() => caches.match(e.request)));
});
