'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "11162be2ff40099762e1456789ca0017",
"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "815d6b3f9aa5ed3ad85b81ab3989b5d0",
"/": "815d6b3f9aa5ed3ad85b81ab3989b5d0",
"main.dart.js": "867700ee7d958794b5945c0732f4d496",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
"assets/AssetManifest.json": "adf8a610566362134575875e17582241",
"assets/NOTICES": "151b0bacf84aaf6bbb1b0550962540f9",
"assets/FontManifest.json": "faf6bafb92aff5ea1f2a186a58ea215e",
"assets/AssetManifest.bin.json": "8b9f2a5705d33d407abb349d1f4dad65",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "a1a3f7146571327da2f196bb1a055f66",
"assets/fonts/MaterialIcons-Regular.otf": "f2732b144f57863b7ebea40f02c04212",
"assets/assets/images/git.png": "5b2255699fcb506b570720cdbc8ade1b",
"assets/assets/images/profile_image.png": "17a5fe525da9644ba732b0c207057593",
"assets/assets/images/lampe.png": "5632f96470392bea23583a9209ddf32f",
"assets/assets/images/flutter.png": "8efb797d33c586ef3cb71d4083dd1fdb",
"assets/assets/images/google_play-2.png": "36b931224db3f96053b30ccead55db8f",
"assets/assets/images/github.png": "0db63e50ae6e4506ada8befa45da4639",
"assets/assets/images/firebase.png": "f4fcab72111fb968a088f10babf564dd",
"assets/assets/images/gmail.png": "e819b6a8860c9f813501e9dff82a471e",
"assets/assets/images/lampe_delivery.png": "818061e8b35078423bcfafec7b3c8c37",
"assets/assets/images/audit_station.png": "1506805bd83f40357b2862e3ecbdeaaf",
"assets/assets/images/linkedin.png": "8c54498de170f54d31a75a7bb0e6c998",
"assets/assets/images/lampe_vendor.png": "05c3ef3ec9f7879a2a17db084766cb9b",
"assets/assets/images/google_play.png": "30c3447d8304a0fac7152d2270574a8e",
"assets/assets/images/app_store.png": "9ecc9d4cd92fccffe10eb4ce16716753",
"assets/assets/images/dart.png": "918e7c35823c7ad268ba831c6e7eaa64",
"assets/assets/fonts/Saira-Medium.ttf": "8800a727f9f9a495a861453675aee041",
"assets/assets/fonts/Orbitron-Black.ttf": "e00a0735fb6ea5b095e6de1492e0b461",
"assets/assets/fonts/Orbitron-Medium.ttf": "501993d0e7d27d632c7da6374307113b",
"assets/assets/fonts/Saira-Regular.ttf": "342d9d9fdfc203910d1f55470ef027f4",
"assets/assets/fonts/Orbitron-ExtraBold.ttf": "22e4cd5d187feb1b2ba68bb4014a68b2",
"assets/assets/fonts/Orbitron-Regular.ttf": "f51de0b72e236467e71439339a673e3c",
"assets/assets/fonts/Orbitron-SemiBold.ttf": "f0c411b781c7967a34e2d5c3376b268e",
"assets/assets/fonts/Saira-SemiBold.ttf": "f800ac13efb6120e7d852ce8b1b4a5a7",
"assets/assets/fonts/Saira-Italic.ttf": "aaa60384916d08c1372b89a8c7f5eda3",
"assets/assets/fonts/Orbitron-Bold.ttf": "e0d0468317d267bdcd43f1df80807eaa",
"assets/assets/fonts/Saira-Bold.ttf": "43b1b372d7feb4d1df845f799700eeb5",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
