//JavaScript Document
$(window).scroll(function() {
    var scrollpos = $("body").scrollTop();
    if (scrollpos > 400) {
        $(".titleheader").css("top", "0px");
    } else {
        $(".titleheader").css("top", "-48px");
    }
});
