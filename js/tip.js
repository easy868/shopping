/*
/!**
 * Created by quwang on 2017/3/21.
 *!/
/!*
 function msgAlert(type, msg) {
 $('.msg_' + type).html(msg);
 $('.msg_' + type).animate({'top': 0}, 500);
 setTimeout(function () {
 $('.msg_' + type).animate({'top': '-3rem'}, 500)
 }, 2000);

 var htmlstyle = "<style>body{padding:0;margin:0;}.msg{color:#FFF;width:100%;height:3rem;text-align:center;font-size:1rem;line-height:3rem;position:fixed;top:-3rem;z-index:200;}"
 + ".msg_success{background-color:rgba(0,0,0,.3);}"
 + ".msg_warning{background-color:#e94b35;}"
 + ".msg_primary{background-color:#337ab7;}"
 + ".msg_info{background-color:#5bc0de;}</style>";
 $('head').append(htmlstyle);
 $('body').prepend('<div class="msg msg_success"></div>'
 + '<div class="msg msg_warning"></div>'
 + '<div class="msg msg_primary"></div>'
 + '<div class="msg msg_info"></div>');
 }
 *!/

// 在顶部显示
function msgAlert(type, msg) {
    $('.msg_' + type).children().html(msg);
    $('.msg_' + type).fadeIn().css("opacity", "1");
    $('.txt').css("opacity", "1");
    setTimeout(function () {
        $('.msg_' + type).fadeOut();
    }, 2000);
    var htmlstyle = "<style>.msg{display: table;width:160px;height: 150px;color:#FFF;font-size:14px;position:fixed;top: 50%;left: 50%;-webkit-transform: translate(-50%);-moz-transform: translate(-50%);-ms-transform: translate(-50%);-o-transform: translate(-50%);transform: translate(-50%);z-index:900;opacity: 0;word-break: break-all;word-wrap: break-word;-webkit-border-radius:4px ;-moz-border-radius:4px ;border-radius: 4px;} .txt{display: table-cell;vertical-align: middle;text-align: center;}"
        + ".msg_success{background-color:rgba(0,0,0,.3);}"
        + ".msg_warning{background-color:#e94b35;}"
        + ".msg_primary{background-color:#337ab7;}"
        + ".msg_info{background-color:#5bc0de;}</style>";
    $('head').append(htmlstyle);
    $('body').prepend('<div class="msg msg_success"><div class="txt"></div></div>' + '<div class="msg msg_warning"><div class="txt"></div></div>');
}
*/
function msgAlert(type,msg) {
    $('.msg_'+type).html(msg);
    $('.msg_'+type).animate({'top': 0},500);
    setTimeout(function(){$('.msg_'+type).animate({'top': '-3rem'},500)},2000);
}

$(document).ready(function(){
    var htmlstyle = "<style>body{padding:0;margin:0;}.msg{color:#FFF;width:100%;height:3rem;text-align:center;font-size:1.2rem;line-height:3rem;position:fixed;top:-3rem;z-index:20;}"
        +".msg_success{background-color:#1fcc6c;}"
        +".msg_warning{background-color:#e94b35;}"
        +".msg_primary{background-color:#337ab7;}"
        +".msg_info{background-color:#5bc0de;}</style>";
    $('head').append(htmlstyle);
    $('body').prepend('<div class="msg msg_success"></div>'
        +'<div class="msg msg_warning"></div>'
        +'<div class="msg msg_primary"></div>'
        +'<div class="msg msg_info"></div>');
})
