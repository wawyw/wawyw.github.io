"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.core.setCacheNameDetails({prefix:"wawyw"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"778995787560f4b11f3b2f5c286b244a",url:"./2021/01/30/hello-world/index.html"},{revision:"f41bc73785e94fe85e6ca081c93bc116",url:"./2021/01/31/使用Gulp压缩HTML,CSS,JavaScript文件/index.html"},{revision:"770b6703f13c4e40293dffa033405404",url:"./2021/01/31/Hexo + Github Pages 搭建个人博客/index.html"},{revision:"179f17e54397059e62a44d3e1810d87a",url:"./404.html"},{revision:"7b5f63ff8bac773419113074a3cf0be8",url:"./about/index.html"},{revision:"94d5a956d1f9a2c71eb74e3d4db73900",url:"./archives/2021/01/index.html"},{revision:"0c3b7c4d86762252bd223902c9e485ce",url:"./archives/2021/index.html"},{revision:"0dbfab46819b1dec74efb20e9da8e984",url:"./archives/index.html"},{revision:"e2dd4931075a0b6a78b6b13d365a202a",url:"./categories/Blog/index.html"},{revision:"54399d92d52794f9ac63b7de197f7a7c",url:"./categories/index.html"},{revision:"6af91b92954ac53b907a45b27bb7169f",url:"./categories/Tools/index.html"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/1.css"},{revision:"715a339e94a14f4ad6750dd6a49108bc",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"3491318e488125762e90972afbf42084",url:"./index.html"},{revision:"f7efbacdf5c8e57ad57deace1198b010",url:"./js/main.js"},{revision:"533d980c0d50a0d0d7fe34c41a3e2100",url:"./js/search/algolia.js"},{revision:"acb62dcdf7e90930da3f6bf07349fc21",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"4cfc631de0e5f6ff12b2833cac848f27",url:"./js/utils.js"},{revision:"7ad4434ae3417697a014f3e0050cebf6",url:"./link/index.html"},{revision:"2c87b7fcf309cc3c3d3a0178f41c185a",url:"./manifest.json"},{revision:"6bfb65e932e47c8d6175c2179319aa66",url:"./tags/Blog/index.html"},{revision:"e43937b2315569422ced316f44a898ad",url:"./tags/GitHub/index.html"},{revision:"4ce13adf92fbc22ee2bcf7cf58ab84f7",url:"./tags/Gulp/index.html"},{revision:"5bdde2f5507e59e8ee610602c0e9ffda",url:"./tags/Hexo/index.html"},{revision:"ff1067c95ba2ec83566fe6a09da82c9b",url:"./tags/index.html"},{revision:"3f1d7fddb813f6b1290d0ae5a21e5a2a",url:"./tags/Tools/index.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();