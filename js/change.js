"use strict";var full_page=document.getElementsByClassName("full_page");0!=full_page.length&&(full_page[0].style.background="transparent");var oSpan=document.getElementsByTagName("timing")[0],localhostTime=new Date;function tow(e){return 0<=e&&e<10?"0"+e:""+e}setInterval(function(){var e=(new Date).getTime()-localhostTime.getTime(),a=Math.floor(e/1e3);Math.floor(a/86400);a%=86400;var t=Math.floor(a/3600);a%=3600;e=Math.floor(a/60);a%=60;a=tow(t)+'<span class="time">小时</span>'+tow(e)+'<span class="time">分钟</span>'+tow(a)+'<span class="time">秒</span>';oSpan.innerHTML="您已逗留"+a+"<br>再看看呗🉑"},1e3);