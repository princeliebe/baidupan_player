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
    $("#video-wrap-outer").append("<div id=\"html_player_enhance_tips\">tipps</div>");
    $("#html_player_enhance_tips").attr("style", "position: absolute;z-index: 999999;padding: 10px;background: rgba(0,0,0,0.8);color:white;top: 50%;left: 50%;transform: translate(-50%,-50%);transition: all 500ms ease;display: none; -webkit-font-smoothing: subpixel-antialiased;font-family: 'microsoft yahei', Verdana, Geneva, sans-serif;-webkit-user-select: none;fontSize: 20px;");

    var tempRate = 0;
    document.onkeydown = function (event) {
            //按键X：减速播放 -0.1
            if (event.keyCode === 88) {
                tempRate = player().playbackRate()
                tempRate -= 0.1;
                player().setPlaybackRate(tempRate)
            }
            //按键C：加速播放 +0.1
            if (event.keyCode === 67) {
                tempRate = player().playbackRate()
                tempRate += 0.1;
                player().setPlaybackRate(tempRate)
            }
            //按键Z：正常速度播放
            if (event.keyCode === 90) {
                tempRate = 1;
                player().setPlaybackRate(tempRate)
            }
            //按键1：播放*1
            if (event.keyCode === 49) {
                tempRate = player().playbackRate()
                tempRate = 1;
                player().setPlaybackRate(tempRate)
            }
            //按键2：播放*2
            if (event.keyCode === 50) {
                tempRate = player().playbackRate()
                tempRate = 2;
                player().setPlaybackRate(tempRate)
            }
            //按键3：播放*3
            if (event.keyCode === 51) {
                tempRate = player().playbackRate()
                tempRate = 3;
                player().setPlaybackRate(tempRate)
            }
        settips(tempRate);
        $("#course1").html(tempRate);
    }
    function settips (tempRate) {
        $('#html_player_enhance_tips').html(tempRate);
        $('#html_player_enhance_tips').show();
        $('#html_player_enhance_tips').fadeOut(1000);

    }
    function player() {
        return videojs.getPlayers("video-player").html5player.tech_
    }
    // Your code here...
})();
