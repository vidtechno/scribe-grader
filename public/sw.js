// Scorify service worker. It caches nothing on purpose: the site always loads fresh from the network, so a new deploy is never
// hidden behind old files. Its only job is to let phones add the site to the home screen as an app.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
