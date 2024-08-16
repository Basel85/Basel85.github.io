'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "f7c0db2d54f883e2d5d745caa829eaae",
"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "5861be7d8a53605571de161c169df8da",
"/": "5861be7d8a53605571de161c169df8da",
"main.dart.js": "8522f468ef5f17223183579d403493d3",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
".git/config": "f648b3042183552b7fdabdbcfb831e71",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/59/fb587e4d86b7cfd01799e45ac72bfdfb7533a9": "9c3a256c6fe6a778586d64b8e4c4b4db",
".git/objects/92/d225068ef73a6a8940d594c3dba8b9e57035ff": "e77a463cd18712af961e09172b47b588",
".git/objects/0c/2db228c61e79c1c421c9011e48bde96333f617": "4a6bb56a3d7b16c4b902f70bd23d6958",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/32/17640cd41bfca2bde5425c2ee92ccdf51623a6": "849dd6f476063a6408bbdc5ee3905704",
".git/objects/32/ab4eb5c9c2c2367f2fd08729f188dd0a2826d9": "7ed30080b260b0de7dc870380719ea2e",
".git/objects/58/8fb710cf2b4db88c1c84a251be6a75a7d2b283": "bd1700a932c7551c1ebc42baec491385",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/5f/6d853546366a243e5ea7ba59320e68e09b6b9d": "e2f81dc729e123efe94c63ebf4b3a817",
".git/objects/a3/1a367edb74f29441d454aaffcf15398a8d1505": "3a773b0b20db208d77b86fa01519b77c",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/a5/3fa0e9afec5f7bf7a23f02975a01ccbdf2a978": "46cbe89d10ec90a33b507e4f372b2b73",
".git/objects/bd/f26fefd9dbb24b57204ec72293709ebf1a6066": "990b000b7a541a4f29d64ae7301c5b97",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/34f22d42cfe4fa9ce62e516fac0208054fd816": "fe373881358e2dad40c1f579c6e5438f",
".git/objects/ab/271063867edb0bfb0965b73a87950150cb0cf8": "e93aa724000831b56e478f6b2a7a89e9",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fc/ea284d77cb7f4dbc0c0870aba728cd59ee102e": "4889f9cfa85748260c28be1f2dd427e2",
".git/objects/fd/630a9f10a62966ae8c46a0118ca31871855ef7": "99ce0a3e98b5a5ebb7d934b23fa8ebbc",
".git/objects/cf/7088e4b33fdf7e5fd817ebe5f35eaefde64015": "f9e94526561f756d8909af714cefce1a",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/fb/6a8d3fc9be679279700fedea92fa3c818ee13d": "46621f3f85c866fbaef015cafe40c214",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/c5b59d7b48ea616a4ba869bcb558373d3ee533": "b5654ad8f5b6deb2aa3ce3a5a76afd38",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/7c/378afeb3e918694d15e840fee49fc18dc1bb1a": "fdc03db7a011d6154eb97640c6d22585",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/26/cee254124e3924ad53d5b723e4eaf002c29def": "362ed23389c7229566546aee7c85616c",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/98e7aa1497fa6c5462124bf89f5ab7e50e69aa": "9df7c46a5408cb4999a95d831f0e3c10",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/54/9cf41cb6dfd7f761dd116a022e18979f2c1d79": "78c1f8389f9e07d9483722c46556f6e9",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/06/338c714d860991ab23d21080a9ad32abe2b50f": "2c1cf4310fe157a55b65e8c23b2cd0cb",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/b8/ff1b451cb7b3acbf386ea37f41659cfed1a7b6": "6c98797dd2a8824ec895ac006b9cd226",
".git/objects/b6/467f57c0e58797b480cbdae54a82820e8ad8af": "f8ad6447c55295eff6bd1cd927cfa59c",
".git/objects/b6/4e852010a7fa9a4403c145e10dfaeeb64a998a": "ac902218eaec5b4a2396f8e1ed43d5bc",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/53cf73bdcebf94321b1a697cc7afb1677fc131": "82c75e94f413a8899d4da00b0c39ba47",
".git/objects/a6/b7ef14164d5f68fe8a5d151e60e6fd1d189ac3": "e091934c4aee682a9bce0fdc60ed59d9",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/f6/783e7773bed0426e955de6955ba0a4178255e0": "0d35d73294635834ac62e50ed86b35ad",
".git/objects/ce/5d5f26632d4ab4e24fc9d382d6889126a156f9": "6b5e5abe7d59ac815955cd8a140efdce",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/77/a491f71c11b297d8691de2b07c8b24e0003eff": "b8c944498271209b1b5a94276f035b33",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/48/12925ee5205625b1528327ba225a9678f3c99f": "c71a06463616dad60d753d31b737feb0",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/2e/876669e56cbb7d3d70296486462f37429bb417": "831ddef35ab19c8a37651c924f2c8b30",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/13/9465965f2e8f925b0cddd5e862109ae8675e67": "d2b23e9342b47ec8b2e5d9f259deb9d0",
".git/objects/7f/246309b35d887bb2449724f820725f58175bb3": "83f4f267c9b7e347fff216f64aa7d7e3",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6da3ab24f79b64bd3c10c1afde100fa8",
".git/logs/refs/heads/main": "6da3ab24f79b64bd3c10c1afde100fa8",
".git/logs/refs/remotes/origin/main": "698c0dd582f5d506f54f438e06c50c78",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "2b8e9840f8082fb29b3788fc02d5872c",
".git/refs/remotes/origin/main": "2b8e9840f8082fb29b3788fc02d5872c",
".git/index": "a8a7627dd1c832375cfa7024a3635bcb",
".git/COMMIT_EDITMSG": "e343304b5f0f126155cb46ba5e80d5de",
"assets/AssetManifest.json": "6016c8ef772166acfc8695db1ea171b3",
"assets/NOTICES": "2145cb7f091cdc5e1d8fbc524ebf6593",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "6e6eaf7189c8972bea1721964af927cf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "e08e2d191fcb7199aa798cc9c01debc6",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/images/profile_image.jpg": "77c14ba6177904721bcc3cf9a178af49",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
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
