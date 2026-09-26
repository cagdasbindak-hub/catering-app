// Tre Kök service worker. It makes the site installable as an app.
// No fetch handler on purpose: the page is always loaded fresh from the network,
// so a new version shows up as soon as it is published (site.js checks version.json).
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));
