"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.core.setCacheNameDetails({prefix:"wawyw"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"51b9f1e7c7dce5aba3314a208cb1bd37",url:"./2021/01/30/hello-world/index.html"},{revision:"ea641f999a825b2dc0c713a35fac430c",url:"./2021/01/31/个人博客搭建记录 Hexo+Butterfly+Github Page+Coding/index.html"},{revision:"2f276db1bf27a2afd412080d19ff5c08",url:"./2021/01/31/Gulp压缩初体验/index.html"},{revision:"0e2ef27e7247a0d68bc34966ecbcab71",url:"./404.html"},{revision:"5d14f9777b060c296aca760e1844ca42",url:"./about/index.html"},{revision:"688cc03cbe978d0300d656bc8a735760",url:"./archives/2021/01/index.html"},{revision:"8c13c40a622f40d787a8e66a982f9217",url:"./archives/2021/index.html"},{revision:"ac62a5ac2b05969f4ac9fcf8ed038c84",url:"./archives/index.html"},{revision:"cc8e8d50eb8d93286345e84bb0085222",url:"./categories/Blog/index.html"},{revision:"74110aaa8bc1b55180d4af1381a32a6f",url:"./categories/index.html"},{revision:"65cefe15d1a9f5086365e48f2bba09a6",url:"./categories/Tools/index.html"},{revision:"ffb13a1eefecf9a35f13a5e9ac8957ad",url:"./css/background.css"},{revision:"cdda540c89722b016fc04b3bc40852f7",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"f796c0b30338f7690bd13a75caf7b247",url:"./index.html"},{revision:"f7efbacdf5c8e57ad57deace1198b010",url:"./js/main.js"},{revision:"533d980c0d50a0d0d7fe34c41a3e2100",url:"./js/search/algolia.js"},{revision:"acb62dcdf7e90930da3f6bf07349fc21",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"4cfc631de0e5f6ff12b2833cac848f27",url:"./js/utils.js"},{revision:"d583638525d889c563155ea252006b8d",url:"./link/index.html"},{revision:"2c87b7fcf309cc3c3d3a0178f41c185a",url:"./manifest.json"},{revision:"cb914f72d360a59dc56bb0f7e6548672",url:"./tags/Blog/index.html"},{revision:"66fe06a287d166f928bc1aa693b34bca",url:"./tags/GitHub/index.html"},{revision:"4d6856c93165af5b65ded1a2d3d98f06",url:"./tags/Gulp/index.html"},{revision:"f8349f8bf288aa59d4cae8da1cfbcfdd",url:"./tags/Hexo/index.html"},{revision:"c4e474447db42c2c4ec4ad440460ee70",url:"./tags/index.html"},{revision:"d5ebf9e14de3af9a8c2b60352cee3b4f",url:"./tags/Tools/index.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();