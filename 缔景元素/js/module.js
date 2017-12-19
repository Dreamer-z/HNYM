// 滑动套餐列表
// 参数：方向（left，top），父元素，子元素，动画时间
function touchmove(direction, parentdom, childdom, time) {
    var dom = document.getElementsByClassName(parentdom)[0];
    var lock = false;
    var ds, dist;
    var wd = Math.ceil($(childdom).width() + 1);
    var initX;
    var nowX;
    var pge = 0;
    dom.addEventListener("touchstart", function(ev) {
        var ev = event || window.event;
        initX = ev.touches[0].clientX;
    });
    dom.addEventListener("touchmove", function(ev) {
        var ev = event || window.event;
        nowX = ev.touches[0].clientX;
    });
    dom.addEventListener("touchend", function() {
        dist = nowX - initX;
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
                    "margin-left": -pge * wd
                });
            }
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
                    "margin-left": -pge * wd
                });
            };
        };
    });

    function move(t) {
        if (pge <= 0) {
            pge = 0;
            $(parentdom).css({
                "transition": "all " + t + "s",
                "margin-left": -pge * wd
            });
            return;
        } else if (pge >= $(childdom).length - 4) {
            pge = $(childdom).length - 4;
            $(parentdom).css({
                "transition": "all " + t + "s",
                "margin-left": -pge * wd
            });
            return;
        } else {
            $(parentdom).css({
                "transition": "all " + t + "s",
                "margin-left": -pge * wd,
            })
        };
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