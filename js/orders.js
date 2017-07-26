/**
 * Created by quwang on 2017/3/17.
 */
$('.top-nav li').click(function () {
    $(this).addClass('active').siblings().removeAttr('class');
    var index = $(this).index();
    $('.tab-box > div').eq(index).show().siblings().hide();
});
// tab选项卡