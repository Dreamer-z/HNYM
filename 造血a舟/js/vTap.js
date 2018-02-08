var wds = 0;
$(".classType .list .li").each(function(i) {
    wds += $(".classType .list .li").eq(i).width();
    $(".classType .list .li").click(function() {
        $(".classType .list .li").removeClass("check");
        $(this).addClass("check");
    })
});
$(".classType .list").width(wds);
var initX, nowX, dist, mdist;
var pge = 0;
var wd = $(".classType .list .li").width();
var dom = document.getElementsByClassName("typeList")[0];
dom.addEventListener("touchstart", function(ev) {
    var ev = event || window.event;
    initX = ev.touches[0].clientX;
});
dom.addEventListener("touchmove", function(ev) {
    var ev = event || window.event;
    nowX = ev.touches[0].clientX;
    mdist = nowX - initX;
    $(".typeList").css({
        "margin-left": mdist
    });
});
dom.addEventListener("touchend", function() {
    dist = nowX - initX;
    if (dist > 0) {
        if (dist % wd >= .5 && dist / wd > 0) {
            pge -= Number(parseInt(dist / wd) + 1);
            move(".5");
        } else if (dist % wd < .5 && dist / wd > 0) {
            pge -= parseInt(dist / wd);
            move(".5");
        } else {
            pge = pge;
            $(".typeList").css({
                "margin-left": -pge * wd
            });
        }
    } else {
        dist = Math.abs(dist);
        if (dist % wd >= .5 && dist / wd > 0) {
            pge += Number(parseInt(dist / wd) + 1);
            move(".5");
        } else if (dist % wd < .5 && dist / wd > 0) {
            pge += parseInt(dist / wd);
            move(".5");
        } else {
            pge = pge;
            $(".typeList").css({
                "margin-left": -pge * wd
            });
        };
    };
});

function move(t) {
    if (pge <= 0) {
        pge = 0;
        $(".typeList").css({
            "transition": "all " + t + "s",
            "margin-left": -pge * wd
        });
        return;
    } else if (pge >= $(".typeList .li").length - 4) {
        pge = $(".typeList .li").length - 4;
        $(".typeList").css({
            "transition": "all " + t + "s",
            "margin-left": -pge * wd
        });
        return;
    } else {
        $(".typeList").css({
            "transition": "all " + t + "s",
            "margin-left": -pge * wd,
        })
    };
};
// 展开所有类型
$(".alltype").click(function() {
    $(".typeWindow").css({ "opacity": 1, "width": $(window).width(), "height": $(window).height() });
    $(".typeWindow .title .cancel").click(function() {
        $(".typeWindow").css({ "opacity": 0, "width": 0, "height": 0 });
    });
});
// 轮播
!(function() {
    var mySwiper = new Swiper(".vTapBanner", {
        direction: 'horizontal',
        loop: true,
        speed: 1500,
        // 如果需要分页器
        pagination: '.swiper-pagination',
        autoplay: 4000,
        autoplayDisableOnInteraction: false,
    });
})()