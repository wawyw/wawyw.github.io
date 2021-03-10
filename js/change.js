var full_page = document.getElementsByClassName("full_page");
if (full_page.length != 0) {
  full_page[0].style.background = "transparent";
}

let oSpan = document.getElementsByTagName("timing")[0];
let localhostTime = new Date();//获取页面打开的时间
function tow(n) {
    return n >= 0 && n < 10 ? '0' + n : '' + n;
}
setInterval(function () {
    let goTime = new Date();//获取动态时间
    let diffTime = goTime.getTime() - localhostTime.getTime();
    var second = Math.floor(diffTime / 1000);//未来时间距离现在的秒数
    var day = Math.floor(second / 86400);//整数部分代表的是天；一天有24*60*60=86400秒 ；
    second = second % 86400;//余数代表剩下的秒数；
    var hour = Math.floor(second / 3600);//整数部分代表小时；
    second %= 3600; //余数代表 剩下的秒数；
    var minute = Math.floor(second / 60);
    second %= 60;
    var str = tow(hour) + '<span class="time">小时</span>'
        + tow(minute) + '<span class="time">分钟</span>'
        + tow(second) + '<span class="time">秒</span>';
    oSpan.innerHTML = "您已逗留" + str + "<br>再看看呗🉑";
}, 1000)

// 天气插件
WIDGET = {
  CONFIG: {
      "modules": "12043",
      "background": 5,
      "tmpColor": "ffffff",
      "tmpSize": 16,
      "cityColor": "ffffff",
      "citySize": 16,
      "aqiSize": 16,
      "weatherIconSize": 24,
      "alertIconSize": 18,
      "padding": "10px 10px 10px 10px",
      "shadow": "0",
      "language": "zh",
      "borderRadius": 5,
      "fixed": "true",
      "vertical": "middle",
      "horizontal": "center",
      "left": "210",
      "top": 10,
      "key": "8YIQcU1aJ7"
  }
}
