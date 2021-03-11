"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.core.setCacheNameDetails({prefix:"wawyw"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"ef98aac6a3cdd01a4efbfd44b3d33141",url:"./404.html"},{revision:"4842ac51c0151c60551d242eec8ca69c",url:"./archives/2021/01/index.html"},{revision:"d6caa339455e62414aa683ab0c41f415",url:"./archives/2021/02/index.html"},{revision:"0b76438e887aee203925cc53c4d92ac0",url:"./archives/2021/02/page/2/index.html"},{revision:"d6544b981be8b9e765bc7d641f730faa",url:"./archives/2021/03/index.html"},{revision:"7f545d54aa7a49ae8d4b8e4a52c75093",url:"./archives/2021/index.html"},{revision:"089601e1929ae52d34f60cae1a651c02",url:"./archives/2021/page/2/index.html"},{revision:"223c74aeecd0d24fba11ab38941fa1f1",url:"./archives/index.html"},{revision:"52b41daa6bbaa8a532d2293637532d14",url:"./archives/page/2/index.html"},{revision:"afcf98e699904a8588a84a5f1eea3910",url:"./categories/Blog/index.html"},{revision:"216d9dd41b7d53ab7e2309f198fee8db",url:"./categories/index.html"},{revision:"e08e78c73de6baff1365554a6fbc7965",url:"./categories/Linux/index.html"},{revision:"2f22cdd3d2deeb0b0ba19ea0af582025",url:"./categories/Tools/index.html"},{revision:"8b7508cb80f206b999c4a2c1cbf57006",url:"./categories/Web安全学习/index.html"},{revision:"fd48a38e3f2916bfc2b501f50becebc9",url:"./css/background.css"},{revision:"83acf44cc3d09fd45da4afc8f5ef11a4",url:"./css/history.css"},{revision:"16bb4497f5f890db0755d4b61122a193",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"631ed21d16159d98aeb82c707c7266e1",url:"./friend-link-circle/index.html"},{revision:"887187d7e00326ecec1a759040c8abd0",url:"./friend-link-circle/moments.js"},{revision:"d2e019b8aa9762be4733570e14f00b16",url:"./index.html"},{revision:"1d4aa212801e070d5b3090fef2969547",url:"./js/change.js"},{revision:"ab625652252ee556e09734a41d3007e9",url:"./js/history.js"},{revision:"f7efbacdf5c8e57ad57deace1198b010",url:"./js/main.js"},{revision:"533d980c0d50a0d0d7fe34c41a3e2100",url:"./js/search/algolia.js"},{revision:"acb62dcdf7e90930da3f6bf07349fc21",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"4cfc631de0e5f6ff12b2833cac848f27",url:"./js/utils.js"},{revision:"484fc866ee5e075892b9c1a5fe8b39dd",url:"./law/index.html"},{revision:"180f3db48a9bed8fead6cf4e4572fa9f",url:"./link/index.html"},{revision:"2c87b7fcf309cc3c3d3a0178f41c185a",url:"./manifest.json"},{revision:"749c8afe8721e93d777f2a4a39f3762a",url:"./page/2/index.html"},{revision:"9d200afac5729cf1c0856cb72ab42a5c",url:"./posts/16107.html"},{revision:"ec1af61e4ce0a5e15dbb79725efcdef7",url:"./posts/175.html"},{revision:"64809f501d0885ca605b55284122fae6",url:"./posts/18120.html"},{revision:"75dad2a2f2c472d2f21cc1f00da6ed06",url:"./posts/19674.html"},{revision:"04185ace052830319410003698e49b8e",url:"./posts/20316.html"},{revision:"efba4b3a33e624202ff9cda22e073a33",url:"./posts/22595.html"},{revision:"5dab9ddfefff9ad96ba2e23abf98cd19",url:"./posts/2811.html"},{revision:"ecf70e22dac85f51ed9b8180241e9d54",url:"./posts/31686.html"},{revision:"23820164fdbdacfc8fe6a476bfc077af",url:"./posts/33159.html"},{revision:"3607f420a9e381d58e402d811e58d2d2",url:"./posts/36028.html"},{revision:"39660ba7a7c2b58ebd91c9812678ef72",url:"./posts/37062.html"},{revision:"73025b458dff70f5e0e3da6edcfff04d",url:"./posts/46255.html"},{revision:"f66f3b1180058a2395b0885b3b2f0f9f",url:"./posts/50074.html"},{revision:"8c86abe0e4ff676daf6aff475c25bbd6",url:"./posts/52081.html"},{revision:"0273403074bec8462b71fa39fc450dd8",url:"./posts/54831.html"},{revision:"a400a578483a291aa8af4fd80194f03a",url:"./posts/60533.html"},{revision:"838958aec85093237546e46a39cd52ea",url:"./posts/671.html"},{revision:"fbf1823918c109635d13424bfe7158d7",url:"./posts/8774.html"},{revision:"717abb8e54a088f2592b5ff3f4988fca",url:"./readme/index.html"},{revision:"117694598456e1cd438ded795b219e65",url:"./speak/index.html"},{revision:"57936ecf0c01f545ba6b9b2e01282340",url:"./tags/Blog/index.html"},{revision:"5e83ea7fc69632c24923a598aa2e0f3b",url:"./tags/GitHub/index.html"},{revision:"e5403354499550d6a655ed7eda16100e",url:"./tags/Gulp/index.html"},{revision:"fee860b4a0df90a9cdf8317c5471b7d4",url:"./tags/Hexo/index.html"},{revision:"e242185c1ddf94c7bc1dd93923042e62",url:"./tags/index.html"},{revision:"de63634f0fc178d7444ce81e1b4b4ca2",url:"./tags/Linux/index.html"},{revision:"e56702250cbc83a8556bcd8ad96fe35b",url:"./tags/MySQL/index.html"},{revision:"5bfdb69b7613c3c5fe40b98999f2ae74",url:"./tags/Nessus/index.html"},{revision:"2a126828812ba52c8321b101001b2c77",url:"./tags/SQL/index.html"},{revision:"f994e59f70405883942ea8398edfe9a5",url:"./tags/Tools/index.html"},{revision:"ab18adb26b8a7f03eed9aebc95180ace",url:"./tags/Ubuntu/index.html"},{revision:"a56bbaf965dc5ecb6e538205e693aabf",url:"./tags/Web安全学习/index.html"},{revision:"beae0430dee3520c1a4d2f92648c9e89",url:"./tags/Wireshark/index.html"},{revision:"ab59d71c42d09a73d237740d94117256",url:"./test/index.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();