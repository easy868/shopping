/**
 * Created by guohe on 2016/1/25.
 */

function showMsg(text, position) {
    var show = $('.show_msg').length
    if (show > 0) {
    } else {
        var div = $('<div></div>');
        div.addClass('show_msg');
        var span = $('<p></p>');
        span.addClass('show_span');
        span.appendTo(div);
        span.text(text);
        $('body').append(div);
    }
    $(".show_span").text(text);
    if (position == 'bottom') {
        $(".show_msg").addClass('fb');
    } else if (position == 'center') {
        $(".show_msg").css('top', '');
        $(".show_msg").addClass('fc');
    } else {
        $(".show_msg").addClass('ft');
    }
    $('.show_msg').fadeIn();
    setTimeout(function () {
        $('.show_msg').fadeOut()
    }, 1500);
}
