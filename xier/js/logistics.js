// 物流信息条目前面修饰线条高度
function lineH() {
    $(".logcont2-li").each(function(i) {
        $(".logcont2-li").eq(i).children(".line").height($(".logcont2-li").eq(i).height() - 5);
        $(".logcont2-li").eq($(".logcont2-li").length - 1).children(".line").css("display", "none");
        $(".logcont2-li").eq($(".logcont2-li").length - 1).children(".light").css("background-color", "red");
    });
};
lineH();