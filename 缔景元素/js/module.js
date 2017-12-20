// 滑动套餐列表
// 参数：方向（left，top），父元素，子元素，动画时间
var ind;

function touchmove(parentdom, childdom, time, size, childdom_height) {
    var dom = $(parentdom).get(0);
    var lock = false;
    var ds, dist, dir;
    var wd = $(childdom).height();
    var initX;
    var nowX;
    var pge = 0;
    dom.addEventListener("touchstart", function(ev) {
        var ev = event || window.event;
        ev.stopPropagation();
        ev.preventDefault();
        initX = ev.touches[0].clientY;
    });
    dom.addEventListener("touchmove", function(ev) {
        var ev = event || window.event;
        ev.stopPropagation();
        ev.preventDefault();
        nowX = ev.touches[0].clientY;
        dist = nowX - initX;
    });
    dom.addEventListener("touchend", function() {
        if (dist > 0) {
            if (dist % wd >= .5 && dist / wd > 0) {
                pge -= Number(parseInt(dist / wd) + 1);
                move(time);
            } else if (dist % wd < .5 && dist / wd > 0) {
                pge -= parseInt(dist / wd);
                move(time);
            } else {
                pge = pge;
                $(parentdom).css({
                    dire: -pge * wd
                });
            };
        } else {
            dist = Math.abs(dist);
            if (dist % wd >= .5 && dist / wd > 0) {
                pge += Number(parseInt(dist / wd) + 1);
                move(time);
            } else if (dist % wd < .5 && dist / wd > 0) {
                pge += parseInt(dist / wd);
                move(time);
            } else {
                pge = pge;
                $(parentdom).css({
                    "margin-top": -pge * wd
                });
            };
        };
        return;
    });

    function move(t) {
        if (pge < 0) {
            pge = 0;
            $(parentdom).css({
                "transition": "all " + t + "s",
                "margin-top": -pge * childdom_height + "rem"
            });
            value()
            return;
        } else if (pge >= $(childdom).length - (size - 1)) {
            pge = $(childdom).length - (size - 1);
            $(parentdom).css({
                "transition": "all " + t + "s",
                "margin-top": -pge * childdom_height + "rem"
            });
            value()
            return;
        } else {
            $(parentdom).css({
                "transition": "all " + t + "s",
                "margin-top": -pge * childdom_height + "rem"
            });
            value();
        };
    };

    function value() {
        ind = pge + 1;
        $(childdom).eq(ind).siblings("li").attr("status", "0");
        $(childdom).eq(ind).attr("status", "1");
    };
    // $(".lr-l").click(function() {
    //     pge--;
    //     move(time);
    // });
    // $(".lr-r").click(function() {
    //     pge++;
    //     move(time);
    // });

    $(childdom).click(function(ev) {
        ev.stopPropagation();
        $(this).css({});
        $(this).siblings("li").css({});
    });
};