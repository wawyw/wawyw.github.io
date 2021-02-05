"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.core.setCacheNameDetails({prefix:"wawyw"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"57520e3dc219ff7dc8220553255c10ff",url:"./404.html"},{revision:"ae81656b184eec85c91ec449a6b80d01",url:"./about/index.html"},{revision:"75673f457d6c1958f133da61d0c47df6",url:"./archives/2021/01/index.html"},{revision:"cd86165c759e7f014cfad1c040e5d58c",url:"./archives/2021/index.html"},{revision:"1e6e7862133cc15951109fc47b6799cf",url:"./archives/index.html"},{revision:"a4af6bab50952ab2cc7ba7a4f4af995f",url:"./categories/Blog/index.html"},{revision:"56004e3df7d3197e965d868d208f2a6e",url:"./categories/index.html"},{revision:"050fa23698f5410693d41842a41d72d6",url:"./categories/Tools/index.html"},{revision:"66f44c141f17e7127d9739a5f1a9b6c3",url:"./css/background.css"},{revision:"651d296ec5d5b5c932ce5e44dd5de49a",url:"./css/icon.css"},{revision:"cdda540c89722b016fc04b3bc40852f7",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"b4b033bdcba597273dc3fd5437a964e6",url:"./index.html"},{revision:"f7efbacdf5c8e57ad57deace1198b010",url:"./js/main.js"},{revision:"533d980c0d50a0d0d7fe34c41a3e2100",url:"./js/search/algolia.js"},{revision:"acb62dcdf7e90930da3f6bf07349fc21",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"4cfc631de0e5f6ff12b2833cac848f27",url:"./js/utils.js"},{revision:"824b86d94191fc256798274425541d9e",url:"./link/index.html"},{revision:"62abd8195c644379b85d54011d708feb",url:"./live2dw/assets/assets/tororo.model.json"},{revision:"e0eec0e71f146917081b4dd53cda90ee",url:"./live2dw/assets/assets/tororo.pose.json"},{revision:"41095ac7eebc381e39e15b95978f3b92",url:"./live2dw/assets/package.json"},{revision:"32973883fcac0a9ae6cc79c0ea25fda2",url:"./live2dw/lib/L2Dwidget.0.min.js"},{revision:"094cbace49a39548bed64abff5988b05",url:"./live2dw/lib/L2Dwidget.min.js"},{revision:"2c87b7fcf309cc3c3d3a0178f41c185a",url:"./manifest.json"},{revision:"1a7df9cba443384a7ac9361f645e98a3",url:"./posts/16107.html"},{revision:"a1c7ab187815216bbafb2e9e40af6c1f",url:"./posts/175.html"},{revision:"57ea2d1c07d62fbec7c8af0918208f95",url:"./posts/50074.html"},{revision:"92db6e8e904a9d563228a0bb71f10daf",url:"./tags/Blog/index.html"},{revision:"02ab42be74494346ca49376bb58d747f",url:"./tags/GitHub/index.html"},{revision:"c6ee11320f4f5a66eb4ea9fb639e6f61",url:"./tags/Gulp/index.html"},{revision:"b0afbfac123d9a51df652fe14fb7da39",url:"./tags/Hexo/index.html"},{revision:"4ab9d7fcbf57176eb417275377a9cfce",url:"./tags/index.html"},{revision:"281eb4b75df12622fdae492905edfce3",url:"./tags/Tools/index.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();