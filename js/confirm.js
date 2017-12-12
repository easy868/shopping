    $('.top').click(function () {
        $('.mask').fadeIn("fast",function () {
            $('.address').slideDown()
        })
    });
    $('.mask').click("fast",function () {
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
// 新增弹窗
/*    $('.top').click(function () {
        $('.mask2').fadeIn("fast",function () {
            $('.address1').slideDown()
        })
    });
    $('.mask2').click("fast",function () {
        $('.mask2').fadeOut();
        $('.address1').slideUp('normal')
    });
    $('.address1').click(function (even) {
        even.stopPropagation()
    });
    $('.close2').click(function () {
        $('.mask2').fadeOut();
        $('.address1').slideUp('normal')
    });
    // 选择弹窗*/


$('select').change(function () {
    $(this).css('color','#333')
})
