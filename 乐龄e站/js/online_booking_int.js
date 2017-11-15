// 滑动套餐列表
$(function() {
    var dom = document.getElementsByClassName("onbook-day-list")[0];
    var lock = false;
    var ds, dist;
    var wd = Math.ceil($(".onb-day-li").width() + 1);
    var initX;
    var nowX;
    var pge = 0;
    dom.addEventListener("touchstart", function(ev) {
        var ev = event || window.event;
        // clearTimeout(ds);
        initX = ev.touches[0].clientX;
        // ds = setTimeout(function() {
        //     lock = true;
        // }, 350);
    });
    dom.addEventListener("touchmove", function(ev) {
        var ev = event || window.event;
        nowX = ev.touches[0].clientX;
    });
    dom.addEventListener("touchend", function() {
        dist = nowX - initX;
        // if (lock == true) {
        // lock = false;
        if (dist > 0) {
            // alert("left")
            if (dist % wd >= .5 && dist / wd > 0) {
                pge -= Number(parseInt(dist / wd) + 1);
                move(".5");
            } else if (dist % wd < .5 && dist / wd > 0) {
                pge -= parseInt(dist / wd);
                move(".5");
            } else {
                pge = pge;
                $(".onbook-day-list").css({
                    "margin-left": -pge * wd
                });
            }
        } else {
            // alert("right")
            dist = Math.abs(dist);
            if (dist % wd >= .5 && dist / wd > 0) {
                pge += Number(parseInt(dist / wd) + 1);
                move(".5");
            } else if (dist % wd < .5 && dist / wd > 0) {
                pge += parseInt(dist / wd);
                move(".5");
            } else {
                pge = pge;
                $(".onbook-day-list").css({
                    "margin-left": -pge * wd
                });
            };
        };
        // } else {
        //     clearTimeout(ds);
        //     return;
        // };
    });

    function move(t) {
        if (pge <= 0) {
            pge = 0;
            $(".onbook-day-list").css({
                "transition": "all " + t + "s",
                "margin-left": -pge * wd
            });
            return;
        } else if (pge >= $(".onb-day-li").length - 4) {
            pge = $(".onb-day-li").length - 4;
            $(".onbook-day-list").css({
                "transition": "all " + t + "s",
                "margin-left": -pge * wd
            });
            return;
        } else {
            $(".onbook-day-list").css({
                "transition": "all " + t + "s",
                "margin-left": -pge * wd,
            })
        };
    };
    $(".lr-l").click(function() {
        pge--;
        move(.3);
    });
    $(".lr-r").click(function() {
        pge++;
        move(.3);
    });

    $(".onb-day-li").click(function(ev) {
        ev.stopPropagation();
        $(this).addClass("onb-day-choose");
        $(this).siblings("li").removeClass("onb-day-choose");
    });
});
$(function() {
    function peo(length, obj, type) {
        $("<li/>", { class: "onbook-people-li clear", }).appendTo($(obj));
        $("<a/>").appendTo($(obj + " .onbook-people-li").eq(len));
        $("<span/>", { class: "fl" }).appendTo($(obj + " .onbook-people-li").eq(len).children("a"));
        $(obj + " .onbook-people-li").eq(len).children("a").children("span").html(type);
        $("<div/>", { class: "onbook-people-cont fl" }).appendTo($(obj + " .onbook-people-li").eq(len).children("a"));
        $("<p/>", { class: "onbook-people-name fl" }).appendTo($(obj + " .onbook-people-li").eq(len).children("a").children(".onbook-people-cont"));
        $("<p/>", { class: "onbook-people-id fl" }).appendTo($(obj + " .onbook-people-li").eq(len).children("a").children(".onbook-people-cont"));
        $("<p/>", { class: "onbook-people-init fl" }).appendTo($(obj + " .onbook-people-li").eq(len).children("a").children(".onbook-people-cont"));
        $(obj + " .onbook-people-li").eq(len).children("a").children(".onbook-people-cont").children(".onbook-people-init").html("请填写出行人信息");
        $(".onbook-people-cont").each(function(i) {
            if ($(".onbook-people-cont:eq(" + i + ") p").html() == "") {
                $(".onbook-people-cont:eq(" + i + ") .onbook-people-init").css("display", "block");
            };
        });
    }
    // 人数
    var pnum;
    var len;
    var type = "";
    var allpeo;
    $(".add").click(function() {
        $(this).addClass("add-cl");
        $(this).siblings(".sub").removeClass("sub-cl");
        pnum = $(this).siblings("input").val();
        pnum++;
        $(this).siblings("input").val(pnum);
        if ($(this).attr("data") == "adult_add") {
            len = $(".onbook-people-adult .onbook-people-li").length;
            type = "成人";
            peo(len, ".onbook-people-adult", type);
        };
        if ($(this).attr("data") == "child_add") {
            len = $(".onbook-people-child .onbook-people-li").length;
            type = "儿童";
            peo(len, ".onbook-people-child", type);
        };
        allpeo = Number($(".onbook-adult .onbook-adult").val()) + Number($(".onbook-child .onbook-adult").val());
        $(".insurance-num").html("×" + allpeo);
        $(".onbook-tj>p>span").html("&yen" + allpeo * (parseInt($(".onb-day-choose .onbook-day-price").html().split("￥")[1]) + Number($(".insurance span").html())));
    });
    $(".sub").click(function() {
        $(this).addClass("sub-cl");
        $(this).siblings(".add").removeClass("add-cl");
        if ($(this).siblings("input").val() == 0) {
            return;
        };
        pnum = $(this).siblings("input").val();
        pnum--;
        $(this).siblings("input").val(pnum);
        if ($(this).attr("data") == "adult_sub") {
            len = $(".onbook-people-adult .onbook-people-li").length;
            $(".onbook-people-adult .onbook-people-li").eq(len - 1).remove();
        };
        if ($(this).attr("data") == "child_sub") {
            len = $(".onbook-people-child .onbook-people-li").length;
            $(".onbook-people-child .onbook-people-li").eq(len - 1).remove();
        };
        allpeo = Number($(".onbook-adult .onbook-adult").val()) + Number($(".onbook-child .onbook-adult").val());
        $(".insurance-num").html("×" + allpeo);
        $(".onbook-tj>p>span").html("&yen" + allpeo * (parseInt($(".onb-day-choose .onbook-day-price").html().split("￥")[1]) + Number($(".insurance span").html())));
    });
    // 出行人信息
    $(".onbook-people-cont").each(function(i) {
        if ($(".onbook-people-cont:eq(" + i + ") p").html() == "") {
            $(".onbook-people-cont:eq(" + i + ") .onbook-people-init").css("display", "block");
        }
    });
    // 协议
    $(".onbook-agreement-int").click(function(ev) {
        ev.stopPropagation();
        $(".onbook-agreement-zzc").fadeIn(200);
        $(".onbook-agreement-tit span").click(function() {
            $(".onbook-agreement-zzc").fadeOut(200);
        })
    });
    // 优惠券
    $(".onbook-ticket").click(function(ev) {
        ev.stopPropagation();
        $(".onbook-ticket-zzc").css("display", "block");
        $(".onbook-ticket-box").slideDown("slow");
        $(document).click(function(ev) {
            if (ev.target == $(".onbook-ticket-box")[0] || ev.target == $(".coupon-list")[0] || ev.target == $(".coupon-li")[0] || ev.target == $(".coupon-sec")[0] || ev.target == $(".coupon-sec-limit")[0] || ev.target == $(".coupon-sec-limit span")[0] || ev.target == $(".coupon-sec-cont")[0] || ev.target == $(".coupon-sec-tit")[0] || ev.target == $(".coupon-sec-type")[0] || ev.target == $(".coupon-sec-type span")[0] || ev.target == $(".coupon-validity")[0] || ev.target == $(".coupon-validity span")[0] || ev.target == $(".onbook-ticket-tit")[0]) {
                return;
            } else {
                $(".onbook-ticket-zzc").css("display", "none");
                $(".onbook-ticket-box").slideUp("slow");
            }
        });
        $(".coupon-li").click(function() {
            $(".onbook-ticket-zzc").css("display", "none");
            $(".onbook-ticket-box").slideUp("slow");
            $(".onbook-ticket-cont").html($(this).children(".coupon-li-box").children(".coupon-sec").children(".coupon-sec-limit").children("span").html() + "元优惠券")
        });
    });
});