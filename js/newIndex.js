/**
 * Created by quwang on 2017/4/10.
 */
$(document).ready(function () {
    var mySwiper = new Swiper('.banner', {
        autoplay: 2000,// 自动播放
        pagination: '.swiper-pagination', //分页器
        paginationClickable: true //分页按钮点击
    });
    var theme_sp = new Swiper('.theme-wrap', {
        slidesPerView: 2.65,
        spaceBetween: 20,
        freeMode : true
    });

    $("#t1,#t2").oaoTime();
    var len = $('.classify a').length;
    if (len < 5) {
        $('.classify').css('justify-content', 'space-between')
    } else {
    }
    // 分类几个图标
    $(window).bind("touchmove", scrollFn);	//绑定滚动事件
    function scrollFn() {
        var bwidth = $('.banner').outerHeight();
        //真实内容的高度
        var pageHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight);
        //视窗的高度
        var viewportHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0;
        //隐藏的高度
        var scrollHeight = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (scrollHeight > bwidth) {	//如果满足触发条件，执行
            $('.classify').addClass('fixtop')
        } else {
            $('.classify').removeClass('fixtop')
        }
    }
});


