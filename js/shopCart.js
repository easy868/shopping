$('.close').click(function () {
    $(this).parents('.list').remove()
});
$("input[type='checkbox']").attr("checked", "true");
// $('.choseall').addClass('ycheck');
// 默认全选
var t = $(".text_box");
$('.min').attr('disabled', true);
$(".add").click(function () {
    //var index = $(this).parent().index();
    var val = parseInt($(this).siblings(".text_box").val());
    val++;
    $(this).siblings(".text_box").val(val);
    //   t.val(parseInt(t.val()) + 1);
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