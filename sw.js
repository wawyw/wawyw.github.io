"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.core.setCacheNameDetails({prefix:"wawyw"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"769a2978ea98174bdd370ebdc2e4efc3",url:"./404.html"},{revision:"1aa1d0d587b955d1d54e7ee0e26e22b3",url:"./archives/2021/01/index.html"},{revision:"697339103da0897396e84a898d5be116",url:"./archives/2021/02/index.html"},{revision:"96ba46ae0487abf892ac21bbe8366b44",url:"./archives/2021/02/page/2/index.html"},{revision:"ef60eb659a927e5204ad8163010aaaa8",url:"./archives/2021/03/index.html"},{revision:"a7090e52fcba4b4d86749c0bb3d1cbae",url:"./archives/2021/index.html"},{revision:"fc6d7350570d4c51d4922f40f11e1e38",url:"./archives/2021/page/2/index.html"},{revision:"abb866803b90011b610a644439c773c3",url:"./archives/index.html"},{revision:"7fdaa4ea0978cd9952851279273f3662",url:"./archives/page/2/index.html"},{revision:"7f3fad81bd4b07a0cd6d95bf254db1ac",url:"./categories/Blog/index.html"},{revision:"c67e5b65f7e415d65ba8b529695496ee",url:"./categories/index.html"},{revision:"c7dde1f3518f699f81e4a00331a79c60",url:"./categories/Linux/index.html"},{revision:"3ab44c8ee4b7bf54205b2e8975aee9fd",url:"./categories/Tools/index.html"},{revision:"cd7b8e95558e2300584d2d959edd3384",url:"./categories/Web安全学习/index.html"},{revision:"fd48a38e3f2916bfc2b501f50becebc9",url:"./css/background.css"},{revision:"9d556cda7a5d10106fb113bd7b01d283",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"da1ece3f499db8703cf4e1f6fd44ebf4",url:"./friend-link-circle/index.html"},{revision:"887187d7e00326ecec1a759040c8abd0",url:"./friend-link-circle/moments.js"},{revision:"c99586052bad84ae05bbe4ed3f22646b",url:"./index.html"},{revision:"2b1f848de9f3a63a985091e7e4006250",url:"./js/change.js"},{revision:"f7efbacdf5c8e57ad57deace1198b010",url:"./js/main.js"},{revision:"533d980c0d50a0d0d7fe34c41a3e2100",url:"./js/search/algolia.js"},{revision:"acb62dcdf7e90930da3f6bf07349fc21",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"4cfc631de0e5f6ff12b2833cac848f27",url:"./js/utils.js"},{revision:"fc0ff36aacbb1b69b672070f2412482e",url:"./law/index.html"},{revision:"54aae92e0962fd011b57e718086308db",url:"./law/style.css"},{revision:"00e24d3453e301a6ce8e72b752019d93",url:"./link/index.html"},{revision:"62abd8195c644379b85d54011d708feb",url:"./live2dw/assets/assets/tororo.model.json"},{revision:"e0eec0e71f146917081b4dd53cda90ee",url:"./live2dw/assets/assets/tororo.pose.json"},{revision:"41095ac7eebc381e39e15b95978f3b92",url:"./live2dw/assets/package.json"},{revision:"32973883fcac0a9ae6cc79c0ea25fda2",url:"./live2dw/lib/L2Dwidget.0.min.js"},{revision:"094cbace49a39548bed64abff5988b05",url:"./live2dw/lib/L2Dwidget.min.js"},{revision:"2c87b7fcf309cc3c3d3a0178f41c185a",url:"./manifest.json"},{revision:"cbd032fe47a9805d7642f020542a80d1",url:"./page/2/index.html"},{revision:"b37fb04301fa1e95cce5f3cacaf68d60",url:"./posts/16107.html"},{revision:"7177bb75bc765010903e5fff699759a4",url:"./posts/175.html"},{revision:"d0a4aff69a15c195095543ee11659c3c",url:"./posts/18120.html"},{revision:"c8bec6af8950569147248e3edc193f29",url:"./posts/19674.html"},{revision:"4c48d92ed2d0630ece15236e3593f4f6",url:"./posts/20316.html"},{revision:"150e27d402aa4a5617a3570554d864c4",url:"./posts/22595.html"},{revision:"b347b54014bd22dc830c5f585e534105",url:"./posts/2811.html"},{revision:"d60f5ddd42f2c343aec9ee0ea0f48937",url:"./posts/31686.html"},{revision:"56de3cab95d2b8c02eac356695079523",url:"./posts/33159.html"},{revision:"94a654a6d633435bd64333d605dcf83d",url:"./posts/36028.html"},{revision:"5d4e08ab06c4058b089f05932edddb4f",url:"./posts/37062.html"},{revision:"9b23bf465c4f4ffde96b844f1ed343bf",url:"./posts/46255.html"},{revision:"ceedf25a2db987e34041d68e4e2b609b",url:"./posts/50074.html"},{revision:"6f26ee276b6c8d93c6472a159ef2aa61",url:"./posts/52081.html"},{revision:"c6163f38b42f4b2169bffcafe0ada1b6",url:"./posts/54831.html"},{revision:"837fd76fab086d45b49bf8c80c13b044",url:"./posts/60533.html"},{revision:"f2b11ccd17115cdffe26009aed70bc93",url:"./posts/671.html"},{revision:"387ce06d85323941865991ddee7737bc",url:"./posts/8774.html"},{revision:"af1b270410eefba21f20ef3195788327",url:"./readme/index.html"},{revision:"54aae92e0962fd011b57e718086308db",url:"./readme/style.css"},{revision:"c009d3c714f0b3bd4b9fec9528ab5ff9",url:"./speak/index.html"},{revision:"53447da3dcf4e1ec23039c11138ddf9a",url:"./tags/Blog/index.html"},{revision:"72981d4a4ba2f9270641f138a96c80c2",url:"./tags/GitHub/index.html"},{revision:"054556adcf47cb83e4462e8f03902997",url:"./tags/Gulp/index.html"},{revision:"a1cc84c0d00cc0b2adba54cb2f980843",url:"./tags/Hexo/index.html"},{revision:"9239dc47ac899a20b9be4c003dc05e5f",url:"./tags/index.html"},{revision:"17a19945233e6564490139492de45afe",url:"./tags/Linux/index.html"},{revision:"32ae448e7edba28841212e6700ffab85",url:"./tags/MySQL/index.html"},{revision:"08e22ad5c9a37429706517ee46941c11",url:"./tags/Nessus/index.html"},{revision:"0fbf90323dbf642a9d3b2c78917798a9",url:"./tags/SQL/index.html"},{revision:"a3cbf211630e6fd17af59bce7ae32c56",url:"./tags/Tools/index.html"},{revision:"4ab1519c8af851b0325423038e557726",url:"./tags/Ubuntu/index.html"},{revision:"adf23fe3022bc03b858d8d32e477de90",url:"./tags/Web安全学习/index.html"},{revision:"c180f3bc59ef91b2141f90878a9723b4",url:"./tags/Wireshark/index.html"},{revision:"ab59d71c42d09a73d237740d94117256",url:"./test/index.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();