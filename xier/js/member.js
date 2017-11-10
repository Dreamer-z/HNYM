var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    speed: 2000,

    // 如果需要分页器
    pagination: '.swiper-pagination',

    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',

    // 如果需要滚动条
    // scrollbar: '.swiper-scrollbar',
    autoplay: 3000,
    autoplayDisableOnInteraction: false,
});
var day = new Date();
var year = day.getFullYear();
var month = day.getMonth() + 1;
var date = day.getDate();
var time = year + "/" + month + "/" + date;
var week = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六")[day.getDay()];
$(".day").html(time);
$(".week").html(week);

var tsnum = 0;
$(".ts-big-img").attr("src", $(".ts-bt-cont>li:eq(" + tsnum + ")>img").attr("src"));
$(".ts-bt-up").click(function() {
    if (tsnum == 0) {
        return;
    };
    tsnum--;
    $(".ts-big-img").attr("src", $(".ts-bt-cont>li:eq(" + tsnum + ")>img").attr("src"));
    $(".ts-bt-cont").animate({ "margin-top": -tsnum * 107.5 + "px" }, 300);
});
$(".ts-bt-down").click(function() {
    if (tsnum == $(".ts-bt-cont>li").length - 1) {
        return;
    };
    tsnum++;
    $(".ts-big-img").attr("src", $(".ts-bt-cont>li:eq(" + tsnum + ")>img").attr("src"));
    $(".ts-bt-cont").animate({ "margin-top": -tsnum * 107.5 + "px" }, 300);
});
var vcnum = 0;
$(".vb-s").attr("src", $(".vc-l>li:eq(" + vcnum + ")>img").attr("src"));
$(".vc-up").click(function() {
    if (vcnum == 0) {
        return;
    };
    vcnum--;
    $(".vb-s").attr("src", $(".vc-l>li:eq(" + vcnum + ")>img").attr("src"));
    $(".vc-l").animate({ "margin-top": -vcnum * 160 + "px" }, 300);
});
$(".vc-down").click(function() {
    if (vcnum == $(".vc-l>li").length - 1) {
        return;
    };
    vcnum++;
    $(".vb-s").attr("src", $(".ts-bt-cont>li:eq(" + vcnum + ")>img").attr("src"));
    $(".vc-l").animate({ "margin-top": -vcnum * 160 + "px" }, 300);
});