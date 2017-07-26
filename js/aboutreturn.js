/**
 * Created by quwang on 2017/3/20.
 */
$('.top-nav li').click(
    function () {
        $(this).addClass('active').siblings().removeClass('active');
        var idx = $(this).index();
        $('.content>div').eq(idx).show().siblings().hide();
    }
);