/**
 * Created by quwang on 2017/3/17.
 */

$('.add-dress').click(function () {
    $('.p1 span').text('新增收货地址');
    $('.mask').fadeIn("fast", function () {
        $('.address').slideDown()
    })
});
$('.mask').click("fast", function () {
    $('.mask').fadeOut();
    $('.address').slideUp('normal')
});
$('.address').click(function (even) {
    even.stopPropagation()
});
$('.close').click(function () {
    $('.mask').fadeOut();
    $('.address').slideUp('normal')
});
// 新增收货地址
$('.delete').click(function () {
    $(this).parents('.address-all').remove();
});
// 删除地址
$('.edit').click(function () {
    $('.p1 span').text('编辑地址');
    $('.mask').fadeIn("fast", function () {
        $('.address').slideDown()
    })
});
$('.mask').click("fast", function () {
    $('.mask').fadeOut();
    $('.address').slideUp('normal')
});
$('.address').click(function (even) {
    even.stopPropagation()
});
$('.close').click(function () {
    $('.mask').fadeOut();
    $('.address').slideUp('normal')
});