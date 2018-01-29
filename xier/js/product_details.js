var num = 1;
var pr = {
    cs: function() {
        $(".pro-int-ul>li").each(function(i) {
            $(".pro-int-ul>li").eq(i).click(function() {
                var ind = i;
                $(this).siblings().removeClass("pro-c-li");
                $(this).addClass("pro-c-li");
                $(".pro-int-sec").eq(ind).siblings().removeClass("pro-int-dis");
                $(".pro-int-sec").eq(ind).addClass("pro-int-dis");
            });
        });
    },
    num: function() {
        $(".minum").click(function() {
            if (num == 1) {
                return;
            };
            num--;
            $(".pronum").attr("value", num);
            $(".minum").addClass("cnum");
            $(".addnum").removeClass("cnum");
        });
        $(".addnum").click(function() {
            num++;
            $(".pronum").attr("value", num);
            $(".addnum").addClass("cnum");
            $(".minum").removeClass("cnum");
        });
    },
    fdj: function() {
        var img = document.getElementById("product-left-big");
        var fd = document.getElementById("fdj");
        var fdj = document.getElementById("pro-fd");
        var wm = 2;
        var hm = 2;
        var lock = false;
        img.onmouseover = function() {
            fd.style.display = "block";
            fdj.style.display = "block";
            setTimeout(() => {
                lock = true;
            }, 1);
        };
        img.onmouseout = function() {
            fd.style.display = "";
            fdj.style.display = "";
            lock = false;
        };
        fd.onmousemove = function() {
            if (lock == true) {
                var eve = document.all ? window.event : arguments[0] ? arguments[0] : event;
                var x = eve.clientX - img.offsetLeft - (fd.offsetWidth / 2);
                var y = eve.pageY ? eve.pageY - img.offsetTop - (fd.offsetHeight / 2) : eve.clientY - img.offsetTop - (fd.offsetHeight / 2);
                // var y = eve.pageY - img.offsetTop - (fd.offsetHeight / 2);
                if (x <= 0) {
                    fd.style.left = 0 + "px";
                } else if (x >= img.offsetWidth - fd.offsetWidth) {
                    fd.style.left = img.offsetWidth - fd.offsetWidth + "px";
                } else {
                    fd.style.left = x + "px";
                }
                if (y <= 0) {
                    fd.style.top = 0 + "px";
                } else if (y >= img.offsetHeight - fd.offsetHeight) {
                    fd.style.top = img.offsetHeight - fd.offsetHeight + "px";
                } else {
                    fd.style.top = y + "px";
                }
                fdj.style.backgroundPosition = wm * (-fd.offsetLeft) + "px" + " " + hm * (-fd.offsetTop) + "px";
            } else {
                return;
            }
        };
    },
    cli_fd: function() {
        $("#product-left-small>li").each(function(i) {
            $("#product-left-small>li").eq(i).click(function() {
                $(this).siblings().removeClass("checked");
                $(this).addClass("checked");
                $("#product-left-big>img").attr("src", $("#product-left-small>li:eq(" + i + ")>img").attr("src"));
                $("#pro-fd").css("background-image", "url(" + $("#product-left-small>li:eq(" + i + ")>img").attr("src") + ")");
            })
        })
    },
    sc: function() {
        $(".size").each(function(i) {
            $(".size").eq(i).click(function() {
                $(".size").eq(i).siblings().children("span").removeClass("c-size");
                $(".size:eq(" + i + ")>span").addClass("c-size");
            })
        });
        $(".car").click(function() {
            $(".sc-hint").fadeIn(200);
            setTimeout(function() {
                $(".sc-hint").fadeOut(200);
            }, 1000)
        });
    },
    pl: function() {
        $(".comment-ul>li").each(function(i) {
            $(".comment-ul>li").eq(i).click(function() {
                $(this).siblings().removeClass("com-c");
                $(this).addClass("com-c");
            });
        });
    },
    buy: function() {
        $(".buynow").click(function() {
            window.location.assign("/submit_order.html");
        })
    }
};
$(function() {
    pr.cs();
    pr.num();
    // pr.fdj();
    pr.cli_fd();
    pr.sc();
    pr.pl();
    pr.buy();
});