"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.core.setCacheNameDetails({prefix:"wawyw"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"4237e43299b2f043ea63600f89a07a47",url:"./404.html"},{revision:"b7ebb401eb8c4d77472d0897f469d811",url:"./archives/2021/01/index.html"},{revision:"6fa1127fe0e7cace4a0b7a8143134757",url:"./archives/2021/02/index.html"},{revision:"68899e19de4e1c07bbe233d8120764a6",url:"./archives/2021/02/page/2/index.html"},{revision:"ae3dec8345ba49a05d7ef72e14fc8794",url:"./archives/2021/03/index.html"},{revision:"e507be7f3f9865ab01fb9df03924672c",url:"./archives/2021/index.html"},{revision:"075de7b8747677bc824dec3ad800f8a8",url:"./archives/2021/page/2/index.html"},{revision:"aaefcbba46a618fb32334dd47e88f429",url:"./archives/2021/page/3/index.html"},{revision:"49987c57659ddf33ddf2d6451c09d399",url:"./archives/index.html"},{revision:"546648b9eb535bf9becba5490f4cad6f",url:"./archives/page/2/index.html"},{revision:"87b4611e220fecf7761143ec6f0a4887",url:"./archives/page/3/index.html"},{revision:"8832b33906e28237376b0de91d7c419f",url:"./categories/Blog/index.html"},{revision:"a4b93247727c59ec987ca068ffa01140",url:"./categories/index.html"},{revision:"bb1aef1b75392ae6aa3d9701ad5c7d9d",url:"./categories/Linux/index.html"},{revision:"b05da723df387ed3f49985112e9cd21c",url:"./categories/Python/index.html"},{revision:"add5e1cab77374e350d56db971e78c16",url:"./categories/Tools/index.html"},{revision:"f5b3a9059253fe24e26bc7cd8a46aa6f",url:"./categories/Web安全学习/index.html"},{revision:"2f245759d8250a527b012c8e5840d190",url:"./css/background.css"},{revision:"d8784f86db5e7fe7b181dc9871773bde",url:"./css/history.css"},{revision:"c7dc9e92e7ba319bb431487be5d627b5",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"ebba7af71d8fce890de711bf6a2ec52d",url:"./fcircle/index.html"},{revision:"1b16e70a57caeda5e7ea9aec134b4147",url:"./index.html"},{revision:"ae0a81b85d5660f5a8bfba8e8bac065f",url:"./js/change.js"},{revision:"669b484b83f2a4757e64dc9921c45f4b",url:"./js/fcircle.js"},{revision:"57e64633510403c769cc82f344f77e9e",url:"./js/history.js"},{revision:"f7efbacdf5c8e57ad57deace1198b010",url:"./js/main.js"},{revision:"533d980c0d50a0d0d7fe34c41a3e2100",url:"./js/search/algolia.js"},{revision:"acb62dcdf7e90930da3f6bf07349fc21",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"4cfc631de0e5f6ff12b2833cac848f27",url:"./js/utils.js"},{revision:"685186228566d3aeb9a81ffc942973ea",url:"./js/wow_init.js"},{revision:"7be282e89e6a8606a4f9a5d34d3ef79f",url:"./law/index.html"},{revision:"75844662087b21c09c6304f1fb185437",url:"./link/index.html"},{revision:"2c87b7fcf309cc3c3d3a0178f41c185a",url:"./manifest.json"},{revision:"cbee0bc0bc2387aa21a54dd7f15f8c3f",url:"./page/2/index.html"},{revision:"af063c0fd513a9b197cf1beba9a6495e",url:"./page/3/index.html"},{revision:"32d6aa3a7d42aac2649afb0784a94d64",url:"./posts/12051.html"},{revision:"0923457200f09e5451afd13313c27175",url:"./posts/16107.html"},{revision:"faef7ee333fd17b2b0645927ae3deca0",url:"./posts/175.html"},{revision:"128b2d10cea6ee9272d3112d76d6f483",url:"./posts/18120.html"},{revision:"292d021b4b36d5f6716fe94f0f6f7c8a",url:"./posts/19674.html"},{revision:"4e07d2c9adae0045984a67be4f040ca8",url:"./posts/20316.html"},{revision:"9c8306daa0d8d6ace625f736fd635812",url:"./posts/22595.html"},{revision:"f2091c41efef7e6fc534390841629380",url:"./posts/2811.html"},{revision:"c51e072a3319ebdea9a44dc8a408a3d7",url:"./posts/31686.html"},{revision:"c538e037c0e5f38b315b891a55ef6530",url:"./posts/33159.html"},{revision:"28fd8628d5ad73826988e4ce7dc3e8cc",url:"./posts/33839.html"},{revision:"a9fd613f78c39271d02224437fd59da1",url:"./posts/3575.html"},{revision:"282e3462b28bc9ae83927d82db70edf3",url:"./posts/36028.html"},{revision:"0210e5ca3a70db4a8dcea805ff797b03",url:"./posts/37062.html"},{revision:"98879dfa0ce8af4c8bd791a5774ac0ec",url:"./posts/46255.html"},{revision:"4a0fde172367bd65481acb3b77de973b",url:"./posts/50074.html"},{revision:"65388afd555859851ab373474d31b6e2",url:"./posts/52081.html"},{revision:"fced97f11f9dcbfc943641a12075f987",url:"./posts/54823.html"},{revision:"5a2f5e406b5db6f600c6f55c62e5c179",url:"./posts/54831.html"},{revision:"c14b3e7b7962c5c21514c2db2c057adf",url:"./posts/60533.html"},{revision:"544ec9ea896e5bc4ffd0b9345a5b00da",url:"./posts/671.html"},{revision:"4dd2bb9e902c9b71b5e2541f1864eb6b",url:"./posts/8774.html"},{revision:"c2d6eebe385d0d53b2f4cc88f03e42e8",url:"./readme/index.html"},{revision:"c1af9eb2e17255ac178894825c706c73",url:"./speak/index.html"},{revision:"63bbc7c5094d231a8307cde4d09b5388",url:"./tags/爬虫/index.html"},{revision:"e07829e88fef3f8de8a42ab222c60d38",url:"./tags/Blog/index.html"},{revision:"01e1acd39689a435ed21e416c4f9d03b",url:"./tags/CSRF/index.html"},{revision:"32e39a786bd0ad09a166f34c0b42e010",url:"./tags/GitHub/index.html"},{revision:"65ed923930d5eb8de3b9a1025093bccb",url:"./tags/Gulp/index.html"},{revision:"b4c5e99341ceabaa1fff7ef8626d5901",url:"./tags/Hexo/index.html"},{revision:"b485a26d514cc1f8984c976bc3311ad5",url:"./tags/index.html"},{revision:"f2b53f9a39d4f84ae2ca389bd7410b75",url:"./tags/Linux/index.html"},{revision:"2601c65c03a515e5c5f7757a4c40f780",url:"./tags/MySQL/index.html"},{revision:"21703b4997f190e50e4cc0284bd31d4b",url:"./tags/Nessus/index.html"},{revision:"d80794d824a3627e271bc982f0368eb5",url:"./tags/Python/index.html"},{revision:"a234991a6e93966661ce5bce744de976",url:"./tags/SQL/index.html"},{revision:"da70b9a8b2b83cf4c7e1fc1c4f9a32e3",url:"./tags/Tools/index.html"},{revision:"69ef8c111179c43f59c8b8cd53765f40",url:"./tags/Ubuntu/index.html"},{revision:"55db0a67afb4e78345320e49fdc5e417",url:"./tags/Web安全学习/index.html"},{revision:"383adaca30fc630ad244158be461889f",url:"./tags/Wireshark/index.html"},{revision:"096f89abafa68bc620638f4567dbb9ae",url:"./tags/XSS/index.html"},{revision:"ab59d71c42d09a73d237740d94117256",url:"./test/index.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();