window.onload = function() {
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        speed: 1000,

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
};
var cnum = 0;
$(".c-l").click(function() {
    if (cnum == 0) {
        return;
    };
    cnum--;
    $(".rec-c").animate({ "margin-left": -cnum * 250 + "px" }, 1000);
});
$(".c-r").click(function() {
    if (cnum == $(".rec-l").length - 4) {
        return;
    };
    cnum++;
    $(".rec-c").animate({ "margin-left": -cnum * 250 + "px" }, 1000);
});