/**
 * Created by quwang on 2017/3/22.
 */

$(document).ready(function () {
    $('.rank div').click(function () {
        $(this).find('a').addClass('down');
        $(this).siblings().find('a').removeClass('down')
    });
//	点击排序变色
    $('.cart2').click(function () {
        $('.shade').fadeIn("fast", function () {
            $('.size-wrap').slideDown('normal');
        });
    });
//  点击查看尺码显示尺码选择
    $('.close2').click(function () {
        $('.shade').fadeOut(function () {
                $('.size-wrap').hide('normal');
            }
        );
    });
//        点击X号关闭
    $('.shade').click(function () {
        $('.shade').fadeOut(function () {
                $('.size-wrap').hide('normal');
            }
        );
    });
//		点击遮罩关闭
    $('.size-wrap').click(function () {
        return false;
    });//		阻止冒泡事件
    $('.size-choose').find('a').click(function () {
        $(this).addClass('ac').siblings().removeClass('ac');
    });
    // 		选尺码
    //获得文本框对象
    var t = $(".text_box");
    //初始化数量为1,并失效减
    $('.min').attr('disabled', true);
    $(".add").click(function () {
        t.val(parseInt(t.val()) + 1);
        if (parseInt(t.val()) != 1) {
            $('.min').attr('disabled', false);
        }
    });
    //数量增加操作
    $(".min").click(function () {
        t.val(parseInt(t.val()) - 1);
        if (parseInt(t.val()) == 1) {
            $('.min').attr('disabled', true);
        }
    });
    //数量减少操作
    $('.buy').click(function () {
        msgAlert("success", "加入成功！");
    });
    $('.addShopCart').click(function () {
        $('.shade').fadeIn("fast", function () {
            $('.size-wrap').slideDown('normal');
            $('.buy').val("加入购物车");
        });
    });
    /*    $('.clatxt').click(function () {
     $('.cla').toggle()
     })
     $('.cla span').click(function () {
     $('.cla span').removeClass('active');
     $(this).addClass('active');
     })*/
    // 分类选择

});