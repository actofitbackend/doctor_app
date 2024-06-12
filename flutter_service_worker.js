'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "e50093e0e22ed9fecf9ec327e65dcb8d",
"version.json": "86c8f4d2a8a6c15edaf5ad577cf4a3a6",
"index.html": "133c28a37c84dab9d16ebf36ca51f22c",
"/": "133c28a37c84dab9d16ebf36ca51f22c",
"main.dart.js": "0f3cf608dfcf2826059e5020acd53839",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "0106dd15ec8a64f1165c2144babe9374",
"icons/Icon-192.png": "0106dd15ec8a64f1165c2144babe9374",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "9bb9e6e182089dd54438dfbe8db1b256",
"manifest.json": "c611a3e19433fe36df13d0458891c732",
"assets/AssetManifest.json": "6e9ff4e6faf2b8b7546c41c96978157a",
"assets/NOTICES": "918f12ac3953aa4659bd1f491e6eded6",
"assets/FontManifest.json": "5283de19107d2b0a58bb2ce856f83862",
"assets/AssetManifest.bin.json": "b69a6201668227e7447b6bd1315c6f45",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "451443a509f73d1e4a943db9a29c995f",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/icons/search.svg": "e22cc9b510243dd8553fee0df022d4d5",
"assets/assets/icons/clinic.png": "48dfc894412ebe894947090350ebf258",
"assets/assets/icons/circle_dark.svg": "16c61a2efff34e0a520b6951644e9949",
"assets/assets/icons/checked.svg": "b9919a6276907587b96f6e785ed961a6",
"assets/assets/icons/lock_outlined.svg": "8f7fb6fe2239916ff889295e6901a460",
"assets/assets/icons/circle.svg": "ead761aafdebdd9970aea9b31506c432",
"assets/assets/icons/mail_notified.svg": "0cb0c238e5edb72d43ec91b8f553a3d6",
"assets/assets/icons/link.svg": "11e1c8669d338f798dc1a2e4e9113f62",
"assets/assets/icons/eye_closed.svg": "d7e4009ae98b40a1da7f0fcb7fec8ffb",
"assets/assets/icons/gallery.svg": "363aae15d2fa2c9f4ea5c8d3e8f223c1",
"assets/assets/icons/dashboard.svg": "30677290aaecb5de2f6d141233377276",
"assets/assets/icons/lock_filled.svg": "74e3b37f743e082fbe18ec56437d3cb3",
"assets/assets/icons/clinic.svg": "1aff11df6c7f7a9fdb9c70ba527babcb",
"assets/assets/icons/copy.svg": "a4e2c9f650038ed4d07e8a20d7c7032c",
"assets/assets/icons/compare.svg": "4572bdf7ee639af4663a7dd6a7e406bf",
"assets/assets/icons/report.svg": "16e4f63f2a77f187b607da1bc1f68578",
"assets/assets/icons/notification.svg": "0023bf71e4902db8ecab9b0895ba1809",
"assets/assets/icons/whatsapp_icon.svg": "c570e2a0dda1c5bd3325b1682e25d539",
"assets/assets/icons/logo.png": "9bb9e6e182089dd54438dfbe8db1b256",
"assets/assets/icons/envalope.svg": "a4b90db1e29500146af8c998e22837c7",
"assets/assets/icons/whatsapp.svg": "c481ccbb5f2086e92ef2d6fabf1a6a2b",
"assets/assets/icons/google.svg": "089cf2faaed9231970a0c5d32d97752d",
"assets/assets/icons/profile.png": "92516a334ecf797a86fd7fabdbf23231",
"assets/assets/icons/eye.png": "038de2a9d3676537343a63352dee029d",
"assets/assets/icons/phone.png": "69542901f6dea7648dca3e198f74f515",
"assets/assets/icons/unchecked.svg": "238a65467463cc915bbcb063f8c81238",
"assets/assets/icons/exit.svg": "580c456a2663220e1620bf63301b4b07",
"assets/assets/icons/phone.svg": "08205820afe6e34d6a747b75c9a655ea",
"assets/assets/icons/call.svg": "a039c4203355bfd1e4f5c9c149c5c38e",
"assets/assets/icons/eye.svg": "01695e4dcc381dc8f385397ef5f1e849",
"assets/assets/icons/bin.svg": "e3cf62f40f04aa4091aeb035faa3b38f",
"assets/assets/icons/profile.svg": "49a30a8524b6a9b0e24df9d3da1f25b3",
"assets/assets/icons/profile_circle.svg": "61bb6594c3bb1d784d9a88b1f9b8eec0",
"assets/assets/icons/whatsapp.png": "74951e53aa34e3f7d5233218d994d818",
"assets/assets/icons/upload.svg": "59e86d53186666daacbd4b29b5980137",
"assets/assets/icons/report.png": "b028a6470abca31730e8270f42758350",
"assets/assets/icons/food.svg": "03a2224d6bc242c4484ac28651efd528",
"assets/assets/icons/apple.svg": "4e5c86f0e3dbd6507f678787fb39f5fb",
"assets/assets/fonts/Inter-Medium.ttf": "cad1054327a25f42f2447d1829596bfe",
"assets/assets/fonts/Inter-Light.ttf": "a3fe4e0f9fdf3119c62a34b1937640dd",
"assets/assets/fonts/MyIcons.ttf": "0f0794c12c3d603fb891a0a1d44112fe",
"assets/assets/fonts/Inter-Thin.ttf": "4558ff85abeab91af24c86aab81509a7",
"assets/assets/fonts/Inter-Bold.ttf": "ba74cc325d5f67d0efbeda51616352db",
"assets/assets/fonts/Inter-Regular.ttf": "ea5879884a95551632e9eb1bba5b2128",
"assets/assets/fonts/Inter-ExtraBold.ttf": "72ac147c98056996b2a31e95a56d6e66",
"assets/assets/fonts/Inter-ExtraLight.ttf": "7a177fa21fece72dfaa5639d8f1c114a",
"assets/assets/fonts/Inter-Black.ttf": "118c5868c7cc1370fcf5a1fc2f569883",
"assets/assets/fonts/Inter-SemiBold.ttf": "465266b2b986e33ef7e395f4df87b300",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
