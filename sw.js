"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.core.setCacheNameDetails({prefix:"wawyw"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"b85c2e4f5ff1216f5c31323075a82481",url:"./404.html"},{revision:"5e684c529043a00e9a253bea67ae12d1",url:"./about/index.html"},{revision:"54aae92e0962fd011b57e718086308db",url:"./about/style.css"},{revision:"f942b26f26aca53fe306f413f1d09cb8",url:"./archives/2021/01/index.html"},{revision:"f3df5f363d019e0b20e3302e8dfb666c",url:"./archives/2021/02/index.html"},{revision:"199156424bd7d8b7fe3749017840e8dc",url:"./archives/2021/02/page/2/index.html"},{revision:"84a89a3e689251f8785327bdf8f9bad5",url:"./archives/2021/03/index.html"},{revision:"ac7e07d15278578dbe3b5fd45dd58cde",url:"./archives/2021/index.html"},{revision:"e2085e012288dfe7286a53005d9385ba",url:"./archives/2021/page/2/index.html"},{revision:"10934f0bd4f40d5c10146070d878ab9b",url:"./archives/index.html"},{revision:"857243f1000784efe9a73aad2627ae4b",url:"./archives/page/2/index.html"},{revision:"b8f8b675ab554fb297910961cbadb0d6",url:"./categories/Blog/index.html"},{revision:"0cfa6c04b970e708a58747466a76f0ac",url:"./categories/index.html"},{revision:"e276d3de82dd8519bad730a1d9008d18",url:"./categories/Linux/index.html"},{revision:"ed3eb0d1c4b1b3525917420fe2156a91",url:"./categories/Tools/index.html"},{revision:"b325aa3f4e1c69d84860d53345f236b7",url:"./categories/Web安全学习/index.html"},{revision:"011c0d9117a416372e6e439ac5a88d38",url:"./collect/index.html"},{revision:"22a792d702c4fd3a64de10ecff5ce213",url:"./css/background.css"},{revision:"651d296ec5d5b5c932ce5e44dd5de49a",url:"./css/icon.css"},{revision:"9d556cda7a5d10106fb113bd7b01d283",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"8afdbb6d32a6b4d1c2b2d7410eaf738c",url:"./friend-link-circle/index.html"},{revision:"887187d7e00326ecec1a759040c8abd0",url:"./friend-link-circle/moments.js"},{revision:"98cc2de9fc7e5396931966f81711eb76",url:"./index.html"},{revision:"6ff3990bcb603044fc947cd2c9113772",url:"./js/change.js"},{revision:"f7efbacdf5c8e57ad57deace1198b010",url:"./js/main.js"},{revision:"533d980c0d50a0d0d7fe34c41a3e2100",url:"./js/search/algolia.js"},{revision:"acb62dcdf7e90930da3f6bf07349fc21",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"4cfc631de0e5f6ff12b2833cac848f27",url:"./js/utils.js"},{revision:"384e2a219e084d17fe0643973790da44",url:"./link/index.html"},{revision:"62abd8195c644379b85d54011d708feb",url:"./live2dw/assets/assets/tororo.model.json"},{revision:"e0eec0e71f146917081b4dd53cda90ee",url:"./live2dw/assets/assets/tororo.pose.json"},{revision:"41095ac7eebc381e39e15b95978f3b92",url:"./live2dw/assets/package.json"},{revision:"32973883fcac0a9ae6cc79c0ea25fda2",url:"./live2dw/lib/L2Dwidget.0.min.js"},{revision:"094cbace49a39548bed64abff5988b05",url:"./live2dw/lib/L2Dwidget.min.js"},{revision:"2c87b7fcf309cc3c3d3a0178f41c185a",url:"./manifest.json"},{revision:"9a067401ff22e00c93c80cda68f7a43f",url:"./page/2/index.html"},{revision:"607afda208c19d8e3a2d8cfdca45992b",url:"./posts/16107.html"},{revision:"6e7cc8db62f2657ab16334d504342d5b",url:"./posts/175.html"},{revision:"0c64f217af04fd7548b0dd524b6ebeda",url:"./posts/18120.html"},{revision:"2faf7c020a005477cb6fc296ef37d8c0",url:"./posts/19674.html"},{revision:"d6321ee40d5288db58e18585d4d95052",url:"./posts/20316.html"},{revision:"29e2a4c18cf40a1501244185dc324697",url:"./posts/22595.html"},{revision:"2add186666e44a368ba114b1ddd2141a",url:"./posts/2811.html"},{revision:"cb4f5357142eb45cd28ddd3b536975e3",url:"./posts/31686.html"},{revision:"4943538ead4670ee57bd6a02040e964c",url:"./posts/33159.html"},{revision:"5e71c0c39e9df839dc7349ae0ea9eb08",url:"./posts/36028.html"},{revision:"be5209fc74980b4bfbac1626d65695c2",url:"./posts/37062.html"},{revision:"66787ae7de01b44f7440fc8d0bebd4e4",url:"./posts/46255.html"},{revision:"4582205ed75da1a6873b22c48fae9e57",url:"./posts/50074.html"},{revision:"4ea367b94e14880b23f5adc1388a2520",url:"./posts/52081.html"},{revision:"47cca887c0a212342539d24ababbbcf7",url:"./posts/54831.html"},{revision:"5003ea4901e497df7a52961d0f3b6a9c",url:"./posts/60533.html"},{revision:"2f6762e8c907ff7bb06294940c01be53",url:"./posts/671.html"},{revision:"a010bc27c3e31549c91122befb03ed1e",url:"./posts/8774.html"},{revision:"17aa4b4f5e8e703e3681606745cb23ea",url:"./tags/Blog/index.html"},{revision:"05b1ed32289a3dc2167eb5712325ba1b",url:"./tags/GitHub/index.html"},{revision:"f9e4205cb7f16a031e0bc310fc351aa0",url:"./tags/Gulp/index.html"},{revision:"14e4cb25a4b326f076f3812075b56441",url:"./tags/Hexo/index.html"},{revision:"320bdd9d1a0e323d221dd18e45e5a30f",url:"./tags/index.html"},{revision:"f701074cfa2f6192674040dcb358c690",url:"./tags/Linux/index.html"},{revision:"5a3cb2cabba705d721a2ce0645e49522",url:"./tags/MySQL/index.html"},{revision:"273d9f4ca837700709b434a0713bd8b1",url:"./tags/Nessus/index.html"},{revision:"8bea4b7741ed8047a9a7299184b3855e",url:"./tags/SQL/index.html"},{revision:"7f68f52be53d947bb804387c9fa2a011",url:"./tags/Tools/index.html"},{revision:"20514ff87d4f29e9a37116994c89f2c1",url:"./tags/Ubuntu/index.html"},{revision:"c4e9673345b69b8863ca2e682f87fef2",url:"./tags/Web安全学习/index.html"},{revision:"47c83ee4773b0ee7df6dbff0dffaf363",url:"./tags/Wireshark/index.html"},{revision:"ab59d71c42d09a73d237740d94117256",url:"./test/index.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();