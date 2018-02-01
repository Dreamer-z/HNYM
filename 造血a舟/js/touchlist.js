function tlist(liname, movedom, initlength) {
    var initX, nowX, dist, mdist;
    var pge = 0;
    var wd = $("." + liname).width();
    console.log(wd);
    var dom = document.getElementsByClassName(movedom)[0];
    dom.addEventListener("touchstart", function(ev) {
        var ev = event || window.event;
        initX = ev.touches[0].clientX;
    });
    dom.addEventListener("touchmove", function(ev) {
        var ev = event || window.event;
        nowX = ev.touches[0].clientX;
        mdist = nowX - initX;
        $("." + movedom).css({
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
                $("." + movedom).css({
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
                $("." + movedom).css({
                    "margin-left": -pge * wd
                });
            };
        };
    });

    function move(t) {
        if (pge <= 0) {
            pge = 0;
            $("." + movedom).css({
                "transition": "all " + t + "s",
                "margin-left": -pge * wd
            });
            return;
        } else if (pge >= $("." + liname).length - initlength) {
            pge = $("." + liname).length - initlength;
            $("." + movedom).css({
                "transition": "all " + t + "s",
                "margin-left": -pge * wd
            });
            return;
        } else {
            $("." + movedom).css({
                "transition": "all " + t + "s",
                "margin-left": -pge * wd,
            })
        };
    };
}