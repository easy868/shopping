$(document).ready(function () {
    var mySwiper = new Swiper('.banner .swiper-container', {
        pagination: '.swiper-pagination', //分页器
        paginationClickable: true,  //分页按钮点击
        paginationType: 'fraction',
        autoplay: 2000  // 自动播放
    });


    $('.see-size').click(function () {
        $('.buy').val("立即购买");

        $('.buy').click(function () {
            location.href = 'confirm.html';
        });
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
    var t = $('.text_box')
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
    $('.addShopCart').click(function () {
        $('.shade').fadeIn("fast", function () {
            $('.size-wrap').slideDown('normal');
            $('.buy').val("加入购物车");
            $('.buy').click(function () {
                msgAlert("success", "加入成功超出换行豆豆豆豆的哦毒素哦");
            });
        });
    });
    $('.buynow').click(function () {
        $('.buy').val("立即购买");
        $('.shade').fadeIn("fast", function () {
            $('.size-wrap').slideDown('normal');
            $('.buy').click(function () {
                location.href = 'confirm.html';
            });
        });
    });
    $('.topnav a').click(function () {
        $(this).addClass('ac').siblings().removeClass('ac')
    })
});