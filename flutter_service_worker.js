'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "12f28e8d75c7eb8f18c10d92e282f138",
"index.html": "ba63e21058a6eae39b1fbce4ef74ac5f",
"/": "ba63e21058a6eae39b1fbce4ef74ac5f",
"main.dart.js": "14d110bae5e9bde7e8e6c01c1cc46648",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "1d3d02c0cc06ee557cff5450865fa675",
"icons/Icon-192.png": "1d3d02c0cc06ee557cff5450865fa675",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "70c96066b4f4ba7eefe94a14d351ffe3",
"manifest.json": "1acae1b3d847b4dde6ec5145c5e6a287",
"assets/AssetManifest.json": "5e6303aa7369cb4a41af70856cc9bfa4",
"assets/NOTICES": "13abc06d67cadf6a17512d5ef993a613",
"assets/FontManifest.json": "5283de19107d2b0a58bb2ce856f83862",
"assets/AssetManifest.bin.json": "3df1f1e90d203fc87a6fabcd12976f68",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "2dc972d116896dff5f6ca628fa8454bb",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/assets/icons/search.svg": "e22cc9b510243dd8553fee0df022d4d5",
"assets/assets/icons/clinic.png": "48dfc894412ebe894947090350ebf258",
"assets/assets/icons/checked.svg": "b9919a6276907587b96f6e785ed961a6",
"assets/assets/icons/lock_outlined.svg": "8f7fb6fe2239916ff889295e6901a460",
"assets/assets/icons/mail_notified.svg": "0cb0c238e5edb72d43ec91b8f553a3d6",
"assets/assets/icons/link.svg": "11e1c8669d338f798dc1a2e4e9113f62",
"assets/assets/icons/eye_closed.svg": "d7e4009ae98b40a1da7f0fcb7fec8ffb",
"assets/assets/icons/gallery.svg": "363aae15d2fa2c9f4ea5c8d3e8f223c1",
"assets/assets/icons/dashboard.svg": "30677290aaecb5de2f6d141233377276",
"assets/assets/icons/lock_filled.svg": "74e3b37f743e082fbe18ec56437d3cb3",
"assets/assets/icons/clinic.svg": "1aff11df6c7f7a9fdb9c70ba527babcb",
"assets/assets/icons/copy.svg": "a4e2c9f650038ed4d07e8a20d7c7032c",
"assets/assets/icons/report.svg": "16e4f63f2a77f187b607da1bc1f68578",
"assets/assets/icons/notification.svg": "0023bf71e4902db8ecab9b0895ba1809",
"assets/assets/icons/envalope.svg": "a4b90db1e29500146af8c998e22837c7",
"assets/assets/icons/whatsapp.svg": "c481ccbb5f2086e92ef2d6fabf1a6a2b",
"assets/assets/icons/google.svg": "089cf2faaed9231970a0c5d32d97752d",
"assets/assets/icons/profile.png": "92516a334ecf797a86fd7fabdbf23231",
"assets/assets/icons/phone.png": "69542901f6dea7648dca3e198f74f515",
"assets/assets/icons/unchecked.svg": "238a65467463cc915bbcb063f8c81238",
"assets/assets/icons/exit.svg": "580c456a2663220e1620bf63301b4b07",
"assets/assets/icons/phone.svg": "08205820afe6e34d6a747b75c9a655ea",
"assets/assets/icons/call.svg": "a039c4203355bfd1e4f5c9c149c5c38e",
"assets/assets/icons/eye.svg": "01695e4dcc381dc8f385397ef5f1e849",
"assets/assets/icons/logo.jpeg": "97e0a9f891e3ebb2e2cbd8eb2661f71b",
"assets/assets/icons/profile.svg": "49a30a8524b6a9b0e24df9d3da1f25b3",
"assets/assets/icons/profile_circle.svg": "61bb6594c3bb1d784d9a88b1f9b8eec0",
"assets/assets/icons/whatsapp.png": "74951e53aa34e3f7d5233218d994d818",
"assets/assets/icons/upload.svg": "59e86d53186666daacbd4b29b5980137",
"assets/assets/icons/report.png": "b028a6470abca31730e8270f42758350",
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
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
