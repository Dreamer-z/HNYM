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
    // 横向banner
    banner: function(obj, time) {
        var mySwiper = new Swiper(obj, {
            direction: 'horizontal',
            loop: true,
            speed: 1500,
            // 如果需要分页器
            pagination: '.swiper-pagination',
            autoplay: time,
            autoplayDisableOnInteraction: false,
        });
    },
    // 纵向banner   
    banner1: function(obj) {
        var mySwiper = new Swiper(obj, {
            direction: 'vertical',
            loop: true,
            speed: 2000,
            noSwiping: true, //禁止拖动
            noSwipingClass: 'stop-swiping', //禁止拖动
            autoplay: 8000,
            autoplayDisableOnInteraction: false,
        });
    },
    banner2: function(obj, perview = 3) {
        var mySwiper = new Swiper(obj, {
            direction: 'horizontal',
            loop: true,
            slidesPerView: perview,
            speed: 1000,
            autoplay: 3000,
            autoplayDisableOnInteraction: false,
        });
    },
    // 添加评论区图片,向尾部添加
    put: function(inpid, domname, imglength) {
        var len = 0;
        document.getElementById(inpid).addEventListener("change", function() {
            var imgArr = [];
            var imgurl;
            filelist = document.getElementById(inpid).files;
            len += filelist.length;
            if (len > imglength) {
                len -= filelist.length;
                if (imglength) {
                    alert("最多只能上传" + imglength + "张图片哦！");
                };
                return;
            } else if (len == imglength) {
                $("." + domname).hide();
            } else {
                $("." + domname).fadeIn(100);
            };
            for (var i = 0; i < filelist.length; i++) {
                imgurl = window.URL.createObjectURL(filelist[i]);
                imgArr.push(imgurl);
                $("<img/>", {
                    src: imgArr[i],
                    class: "img-li"
                }).appendTo($("<div/>", {
                    class: "img-li-box left"
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
                len -= 1;
                $(this).parent(".img-li-box").remove();
                if ($("." + domname).show()) {
                    return;
                } else {
                    $("." + domname).fadeIn(100);
                }
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
                if (imglength) {
                    alert("最多只能上传" + imglength + "张图片哦！");
                };
                return;
            } else if (len == imglength) {
                $("." + domname).hide();
            } else {
                $("." + domname).fadeIn(100);
            };
            for (var i = 0; i < filelist.length; i++) {
                imgurl = window.URL.createObjectURL(filelist[i]);
                imgArr.push(imgurl);
                $("<img/>", {
                    src: imgArr[i],
                    class: "img-li"
                }).appendTo($("<div/>", {
                    class: "img-li-box left"
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
                len -= 1;
                $(this).parent(".img-li-box").remove();
                if ($("." + domname).show()) {
                    return;
                } else {
                    $("." + domname).fadeIn(100);
                }
            });
        });
    },
    // 更换头像
    putpicture: function(inpid, domname) {
        document.getElementById(inpid).addEventListener("change", function() {
            var filelist = document.getElementById(inpid).files[0];
            var imgurl = window.URL.createObjectURL(filelist);
            $("." + domname).css({
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
    },
    // 视频操作
    playing: function(domName, palyInp) {
        // $(domName).get(0).onemptied = function(){};
        $(palyInp).click(function() {
            $(palyInp).fadeOut(50);
            $(domName).get(0).play();
            $(domName).click(function() {
                $(domName).get(0).pause();
                $(palyInp).fadeIn(50);
            });
        });
    }
};
window.onload = function() {
    all.fullscreen();
    all.fullscreen1();
    all.fullscreen2();
};