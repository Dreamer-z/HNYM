$(".com-pt2-li").click(function() {
    ind = $(this).index();
    $(this).addClass("com-pt2-li-c");
    $(this).siblings("li").removeClass("com-pt2-li-c");
    $(".com-pt2-sec>li").eq(ind).addClass("show");
    $(".com-pt2-sec>li").eq(ind).siblings("li").removeClass("show");
});