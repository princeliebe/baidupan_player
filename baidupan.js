// ==UserScript==
// @name         针对百度盘播放器插件
// @description  对百度盘播放器的功能进行增强, c加速, x减速, z恢复原始速度。
// @version      0.1
// @author       lianghaikun
// @match        *://pan.baidu.com/play/video*
// @grant        none
// @require    http://code.jquery.com/jquery-1.11.0.min.js
// ==/UserScript==

(function() {
    'use strict';
    $(".header-box").append("<div id='course1'>html1</div>");
    var tempRate = 0;
    document.onkeydown = function (event) {

            //按键X：减速播放 -0.1
            if (event.keyCode === 88) {
                tempRate = videojs.getPlayers("video-player").html5player.tech_.playbackRate()
                tempRate -= 0.1;
                videojs.getPlayers("video-player").html5player.tech_.setPlaybackRate(tempRate)
            }
            //按键C：加速播放 +0.1
            if (event.keyCode === 67) {
                tempRate = videojs.getPlayers("video-player").html5player.tech_.playbackRate()
                tempRate += 0.1;
                videojs.getPlayers("video-player").html5player.tech_.setPlaybackRate(tempRate)
            }
            //按键Z：正常速度播放
            if (event.keyCode === 90) {
                tempRate = 1;
                videojs.getPlayers("video-player").html5player.tech_.setPlaybackRate(tempRate)
            }
        $("#course1").html(tempRate);
        }
    // Your code here...
})();
