var all = {
    fullscreen: function() {
        $(".fullscreen").width("7.5rem");
        $(".fullscreen").height($(window).height());
        $(".fullscreen").css({ "background-color": "rgba(0,0,0,.4)", "position": "fixed", "left": "calc(50% - 3.75rem)", "top": "0", "z-index": "1000", "display": "none" });
    },
    fullscreen1: function() {
        $(".fullscreen1").width("7.5rem");
        $(".fullscreen1").height($(window).height());
        $(".fullscreen1").css({ "background-color": "#eee", "position": "fixed", "left": "calc(50% - 3.75rem)", "top": "0", "z-index": "1000" });
    },
    fullscreen2: function() {
        $(".fullscreen2").width("7.5rem");
        $(".fullscreen2").height($(window).height());
        $(".fullscreen2").css({ "background-color": "#fff", "box-sizing": "border-box" });
    },
    // 复选带全选功能
    check_inp: function() {
        var state, th;
        $("input:checkbox").click(function() {
            th = $(this);
            if ($(this).attr("state") == 0) {
                $(this).attr("state", "1");
                state = $(this).attr("state")
                select(th, state);
            } else {
                $(this).attr("state", "0");
                state = $(this).attr("state")
                select(th, state);
            };
        });

        function select(dom, num) {
            if (num == 1) {
                $(dom).removeClass("input-no-checked");
                $(dom).addClass("input-checked");
                $(dom).prop("checked", "checked");
            } else {
                $(dom).removeClass("input-checked");
                $(dom).addClass("input-no-checked");
                $(dom).removeProp("checked");
            }
        };
        document.getElementById("allinp").addEventListener("change", function() {
            if ($("#allinp").prop("checked") == true) {
                $(".ce-inp").each(function(i) {
                    $(".ce-inp").eq(i).attr("state", "1");
                    $(".ce-inp").eq(i).addClass("input-checked");
                    $(".ce-inp").eq(i).prop("checked", "checked");
                    select($(".ce-inp").eq(i), $(".ce-inp").eq(i).attr("state"));
                })
            } else {
                $(".ce-inp").each(function(i) {
                    $(".ce-inp").eq(i).attr("state", "0");
                    $(".ce-inp").eq(i).removeClass("input-checked");
                    $(".ce-inp").eq(i).removeProp("checked");
                    select($(".ce-inp").eq(i), $(".ce-inp").eq(i).attr("state"));
                })
            }
        });
    },
    // 复选按钮
    check: function() {
        $("input:checkbox").click(function() {
            th = $(this);
            if ($(this).attr("state") == 0 || !$(this).attr("state")) {
                $(this).attr("state", "1");
                state = $(this).attr("state")
                select(th, state);
            } else {
                $(this).attr("state", "0");
                state = $(this).attr("state")
                select(th, state);
            };
        });

        function select(dom, num) {
            if (num == 1) {
                $(dom).removeClass("input-no-checked");
                $(dom).addClass("input-checked");
                $(dom).prop("checked", "checked");
            } else {
                $(dom).removeClass("input-checked");
                $(dom).addClass("input-no-checked");
                $(dom).removeProp("checked");
            }
        };
    },
    // 单选按钮
    inp: function() {
        var state, th;
        $("input:radio").click(function() {
            th = $(this);
            if ($(this).attr("state") == 0 || !$(this).attr("state")) {
                $("input:radio").attr("state", "0");
                $(this).attr("state", "1");
                state = $(this).attr("state")
                select(th, state);
            };
        });

        function select(dom, num) {
            if (num == 1) {
                $("input:radio").removeClass("input-no-checked");
                $("input:radio").removeClass("input-checked");
                $(dom).removeClass("input-no-checked");
                $(dom).addClass("input-checked");
                $(dom).prop("checked", "checked");
            } else {
                $("input:radio").removeClass("input-checked");
                $("input:radio").addClass("input-no-checked");
                $(dom).addClass("input-no-checked");
                $(dom).removeProp("checked", "checked");
            }
        };
    },
    banner: function(obj) {
        var mySwiper = new Swiper(obj, {
            direction: 'horizontal',
            loop: true,
            speed: 1500,
            // 如果需要分页器
            pagination: '.swiper-pagination',
            autoplay: 4000,
            autoplayDisableOnInteraction: false,
        });
    },
    banner2: function(obj) {
        var mySwiper = new Swiper(obj, {
            direction: 'horizontal',
            loop: true,
            slidesPerView: 3,
            speed: 1000,
            autoplay: 3000,
            autoplayDisableOnInteraction: false,
        });
    },
    // 添加评论区图片,向尾部添加
    put: function(inpid, domname) {
        var len = 0;
        document.getElementById(inpid).addEventListener("change", function() {
            var imgArr = [];
            var imgurl;
            filelist = document.getElementById(inpid).files;
            len += filelist.length;
            for (var i = 0; i < filelist.length; i++) {
                imgurl = window.URL.createObjectURL(filelist[i]);
                imgArr.push(imgurl);
                $("<img/>", {
                    src: imgArr[i],
                    class: "img-li"
                }).appendTo($("<div/>", {
                    class: "img-li-box fl"
                }).appendTo($("." + domname)));
            };

            $(".img-li-box").each(function(i) {
                $(".img-li-box").eq(i).children(".delinp").remove();
                $("<div/>", {
                    class: "delinp"
                }).appendTo($(".img-li-box").eq(i));
            });
            // 删除图片操作
            $(".delinp").click(function(ev) {
                ev.stopPropagation();
                $(this).parent(".img-li-box").remove();
            });
        });
    },
    // 添加评论区图片,向头部添加
    putH: function(inpid, domname, imglength) {
        var len = 0;
        document.getElementById(inpid).addEventListener("change", function() {
            var imgArr = [];
            var imgurl;
            filelist = document.getElementById(inpid).files;
            len += filelist.length;
            if (len > imglength) {
                len -= filelist.length;
                return;
            };
            for (var i = 0; i < filelist.length; i++) {
                imgurl = window.URL.createObjectURL(filelist[i]);
                imgArr.push(imgurl);
                $("<img/>", {
                    src: imgArr[i],
                    class: "img-li"
                }).appendTo($("<div/>", {
                    class: "img-li-box fl"
                }).insertBefore($("." + domname)));
            };

            $(".img-li-box").each(function(i) {
                $(".img-li-box").eq(i).children(".delinp").remove();
                $("<div/>", {
                    class: "delinp"
                }).appendTo($(".img-li-box").eq(i));
            });

            // 删除图片操作
            $(".delinp").click(function(ev) {
                ev.stopPropagation();
                $(this).parent(".img-li-box").remove();
            });
        });
    },
    // 更换头像
    putpicture: function(inpid, domname) {
        document.getElementById(inpid).addEventListener("change", function() {
            var filelist = document.getElementById(inpid).files[0];
            var imgurl = window.URL.createObjectURL(filelist);
            $(domname).css({
                "background": "url(" + imgurl + ")no-repeat center",
                "background-size": "100%"
            });
        });
    },
    // 弹出信息处理事件
    msg_tc: function(display_inp, msg_tc_dom, confirm_inp, cancel_inp) {
        $(display_inp).click(function() {
            $(msg_tc_dom).fadeIn(200);
        });
        $(confirm_inp).click(function() {
            $(msg_tc_dom).fadeOut(200);
        });
        $(cancel_inp).click(function() {
            $(msg_tc_dom).fadeOut(200);
        });
    }
};
window.onload = function() {
    all.fullscreen();
    all.fullscreen1();
    all.fullscreen2();
    all.check();
    all.inp();
};