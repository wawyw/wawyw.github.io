"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.core.setCacheNameDetails({prefix:"wawyw"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"c81dd49c114b029b69b28842564d930a",url:"./404.html"},{revision:"af4e1ef056d37f42381bc09227f414cf",url:"./about/index.html"},{revision:"7e895ed8c196467fda731c2822822185",url:"./archives/2021/01/index.html"},{revision:"214a831790f25921fad68bfd37dca105",url:"./archives/2021/index.html"},{revision:"168dcfa73283e6122bdfe1fbbf11fd06",url:"./archives/index.html"},{revision:"b5835c500e16c320a8b831aef14bd1bd",url:"./categories/Blog/index.html"},{revision:"5911efe93f6c5e7e0911474e7678ee84",url:"./categories/index.html"},{revision:"2736c139deb9eb613d7aff66372570c7",url:"./categories/Tools/index.html"},{revision:"ffb13a1eefecf9a35f13a5e9ac8957ad",url:"./css/background.css"},{revision:"b74e7cc119f8a2c2171997e26405e812",url:"./css/icon.css"},{revision:"cdda540c89722b016fc04b3bc40852f7",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"c7ea56bd890f11523fd2b1ae3a741d0b",url:"./index.html"},{revision:"f7efbacdf5c8e57ad57deace1198b010",url:"./js/main.js"},{revision:"533d980c0d50a0d0d7fe34c41a3e2100",url:"./js/search/algolia.js"},{revision:"acb62dcdf7e90930da3f6bf07349fc21",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"4cfc631de0e5f6ff12b2833cac848f27",url:"./js/utils.js"},{revision:"4e108d8bfb2f1c019d1b2feaf5ab67ca",url:"./link/index.html"},{revision:"62abd8195c644379b85d54011d708feb",url:"./live2dw/assets/assets/tororo.model.json"},{revision:"e0eec0e71f146917081b4dd53cda90ee",url:"./live2dw/assets/assets/tororo.pose.json"},{revision:"41095ac7eebc381e39e15b95978f3b92",url:"./live2dw/assets/package.json"},{revision:"32973883fcac0a9ae6cc79c0ea25fda2",url:"./live2dw/lib/L2Dwidget.0.min.js"},{revision:"094cbace49a39548bed64abff5988b05",url:"./live2dw/lib/L2Dwidget.min.js"},{revision:"2c87b7fcf309cc3c3d3a0178f41c185a",url:"./manifest.json"},{revision:"4a724ddfbce925865b89e9c1f65e28d2",url:"./posts/16107.html"},{revision:"9e8aeb963182dbb77606f3edf7939ea4",url:"./posts/175.html"},{revision:"7d9ef7682263d620ccb17505806b21dd",url:"./posts/50074.html"},{revision:"8fa4b93320543f7102f72feb64dde118",url:"./tags/Blog/index.html"},{revision:"51ac33fd44f63fb6caea2debe7629223",url:"./tags/GitHub/index.html"},{revision:"7a536ab19e8d8bd654f466c98ee5c084",url:"./tags/Gulp/index.html"},{revision:"d4fb37e1c48986be7ad5d21c7dea367c",url:"./tags/Hexo/index.html"},{revision:"b88dcfe35473548aff3f57c15037b342",url:"./tags/index.html"},{revision:"c9539a52ebefc68b767d18959f216554",url:"./tags/Tools/index.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();