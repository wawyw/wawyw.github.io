"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.core.setCacheNameDetails({prefix:"wawyw"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"981683981f77ecf868fe663a67acc33f",url:"./2021/01/30/hello-world/index.html"},{revision:"8cc5f45e2bd881db809bd3c90ac4da8a",url:"./2021/01/31/使用Gulp压缩HTML,CSS,JavaScript文件/index.html"},{revision:"f8025226b5045985ea6052f0b2b43071",url:"./2021/01/31/Hexo + Github Pages 搭建个人博客/index.html"},{revision:"e13594a55a2049f6d936b949c38b231c",url:"./404.html"},{revision:"55b78da039401a09969e76c4b98bfc14",url:"./about/index.html"},{revision:"d6bcd27524b10d1f0304196a03e0701d",url:"./archives/2021/01/index.html"},{revision:"6ce45770936bd3eaa6435503c7165e43",url:"./archives/2021/index.html"},{revision:"95ef0e80eafefc24c789218a6e9a80e9",url:"./archives/index.html"},{revision:"baf5d4733749348f976023e4c5567a34",url:"./categories/Blog/index.html"},{revision:"3880a8954b700411abc3f9be006d9b01",url:"./categories/index.html"},{revision:"ed7234d192a58dd8d76c014e99db3942",url:"./categories/Tools/index.html"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/1.css"},{revision:"715a339e94a14f4ad6750dd6a49108bc",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"a5687ce09bcfd6e5951750d146e7673b",url:"./index.html"},{revision:"f7efbacdf5c8e57ad57deace1198b010",url:"./js/main.js"},{revision:"533d980c0d50a0d0d7fe34c41a3e2100",url:"./js/search/algolia.js"},{revision:"acb62dcdf7e90930da3f6bf07349fc21",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"4cfc631de0e5f6ff12b2833cac848f27",url:"./js/utils.js"},{revision:"2c87b7fcf309cc3c3d3a0178f41c185a",url:"./manifest.json"},{revision:"e952294659cddd683c082497e73f7216",url:"./tags/Blog/index.html"},{revision:"681ced68e914517e08e95b251a6e8aff",url:"./tags/GitHub/index.html"},{revision:"15ec51b687c1603ebd5de7668686cc45",url:"./tags/Gulp/index.html"},{revision:"fb8405a90c9c61e2ab836b77b25ffb3f",url:"./tags/Hexo/index.html"},{revision:"b17ac3bb20ea2410ba01948af83b6b91",url:"./tags/index.html"},{revision:"7e757e3650c6f1e433efec169bde4823",url:"./tags/Tools/index.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();