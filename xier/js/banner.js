//-----------------------------banner----------------------------------------
function banner(linum) {
    this.num = 0;
    this.n = 0;
    this.run();
    this.numthis = 0;
    this.flag = false;
    this.linum = linum;
};
banner.prototype.run = function() {
        var mwidth;

        mwidth = $("#banner-content").width() / $(".banner-li").length;
        var linum = $("#banner-content>li").length;
        $(".banner-swicth-li>i").each(function(i) {
            $(".banner-swicth-li:eq(" + i + ")>i").removeClass("banner-list-checked");
        });
        $(".banner-swicth-li:eq(0)>i").addClass("banner-list-checked");
        var self = this;
        var timer = setInterval(move, 5000);

        function move() {
            if (self.num == (linum - 1)) {
                self.num = 0;
                $(".banner-swicth-li").each(function(i) {
                    $(".banner-swicth-li:eq(" + i + ")>i").removeClass("banner-list-checked");
                });
                $(".banner-swicth-li:eq(0)>i").addClass("banner-list-checked");
                $("#banner-content").css("margin-left", 0);
            };
            self.num++;
            self.n++;
            $("#banner-content").animate({ "margin-left": -mwidth * self.num }, 2000);
            $(".banner-swicth-li").each(function(i) {
                $(".banner-swicth-li:eq(" + i + ")>i").removeClass("banner-list-checked");
            });
            $(".banner-swicth-li:eq(" + (self.num > (linum - 2) ? 0 : self.num) + ")>i").addClass("banner-list-checked");

        };
        $("#banner-swicth-left").click(function() {
            if ($("#banner-content").is(":animated")) {
                return;
            }
            self.num--;
            self.n--;
            $(".banner-swicth-li").each(function(i) {
                $(".banner-swicth-li:eq(" + i + ")>i").removeClass("banner-list-checked");
            });
            $(".banner-swicth-li:eq(" + (self.num < 0 ? (linum - 2) : self.num) + ")>i").addClass("banner-list-checked");
            if (self.num < 0) {
                self.num = (linum - 1);
                $("#banner-content").css({ "margin-left": self.num * -mwidth });
                setTimeout(function() {
                    self.num--;
                    self.n--;
                    $("#banner-content").stop(true, true);
                    $("#banner-content").animate({ "margin-left": self.num * -mwidth }, 2000);
                }, 10);
            }
            $("#banner-content").animate({ "margin-left": self.num * -mwidth }, 2000);
        });
        $("#banner-swicth-right").click(function() {
            if ($("#banner-content").is(":animated")) {
                return;
            };
            if (self.num == (linum - 1)) {
                self.num = 0;
                $(".banner-swicth-li").each(function(i) {
                    $(".banner-swicth-li:eq(" + i + ")>i").removeClass("banner-list-checked");
                });
                $(".banner-swicth-li:eq(0)>i").addClass("banner-list-checked");
                $("#banner-content").css("margin-left", 0);
            };
            self.num++;
            self.n++;
            $("#banner-content").animate({ "margin-left": -mwidth * self.num }, 2000);
            $(".banner-swicth-li").each(function(i) {
                $(".banner-swicth-li:eq(" + i + ")>i").removeClass("banner-list-checked");
            });
            $(".banner-swicth-li:eq(" + (self.num > (linum - 2) ? 0 : self.num) + ")>i").addClass("banner-list-checked");
        });
        $(".banner-swicth-li").each(function(i) {
            $(".banner-swicth-li:eq(" + i + ")>i").click(function() {
                if ($("#banner-content").is(":animated")) {
                    return;
                };
                $("#banner-content").stop(true, true);
                self.num = i;
                self.n = i;
                $("#banner-content").animate({ "margin-left": -mwidth * self.num }, 2000);
                $(".banner-swicth-li").each(function(i) {
                    $(".banner-swicth-li:eq(" + i + ")>i").removeClass("banner-list-checked");
                });
                $(".banner-swicth-li:eq(" + self.n + ")>i").addClass("banner-list-checked");
            });

        });
        var lock = false;
        var ti = false;
        $("#banner").mouseenter(function() {
            if (lock == true || ti == true) {
                return;
            } else {
                lock = true;
                ti = true;
                clearInterval(timer);
            };
        });
        $("#banner").mouseleave(function() {
            setTimeout(function() {
                if (lock == false || ti == false) {
                    return;
                };
                ti = false;
                if (ti == false) {
                    setTimeout(function() {
                        lock = false;
                        timer = setInterval(move, 5000);
                    }, 10);
                };
            }, 1000);
        });
        document.addEventListener("blur", function() {
            $("#banner-content").finish();
            // if (lock == true || ti == true) {
            //     return;
            // };
            lock = true;
            ti = true;
            clearInterval(timer);
        });
        document.addEventListener("focus", function() {
            setTimeout(function() {
                if (lock == false || ti == false) {
                    return;
                };
                ti = false;
                if (ti == false) {
                    setTimeout(function() {
                        lock = false;
                        timer = setInterval(move, 5000);
                    }, 10);
                };
            }, 1000);
        });

        // $("#banner-swicth-ul").mouseenter(function() {
        //     if (lock == true) {
        //         return;
        //     };
        //     lock = true;
        //     clearInterval(timer);
        // });
        // $("#banner-swicth-ul").mouseleave(function() {
        //     if (lock == false) {
        //         return;
        //     };
        //     lock = false;
        //     setTimeout(function() {
        //         timer = setInterval(move, 5000);
        //     }, 1000);
        // });
        // $(".switchClick").mouseenter(function() {
        //     if (lock == true) {
        //         return;
        //     };
        //     lock = true;
        //     clearInterval(timer);
        // });
        // $(".switchClick").mouseleave(function() {
        //     if (lock == false) {
        //         return;
        //     };
        //     lock = false;
        //     setTimeout(function() {
        //         timer = setInterval(move, 5000);
        //     }, 1000);
        // });
        // window.addEventListener("blur", function() {
        //     clearInterval(timer);
        // });
        // window.addEventListener("focus", function() {
        //     setTimeout(function() {
        //         timer = setInterval(move, 3000);
        //     }, 200);
        // });
    }
    //-------------------------------------------------------------------
    //获取首页banner
function getBanner() {
    $.ajax({
        type: "post",
        url: data_url,
        datatype: "json",
        data: {
            "action": "getBanner",
        },
        success: function(json) {
            var data = JSON.parse(json);
            $("#banner-content").html($("#commissionTemplate").tmpl(data.Result));
            $(data.Result).each(function(i) {
                $("<li class='banner-swicth-li y-left'><i></i></li>").appendTo($("#banner-swicth-ul"));
            });
            $(".banner-li").eq(0).clone().appendTo($("#banner-content"));
            $("#banner-content").width($("#banner-content>li").length * 100 + "%");
            $("#banner-content>li").width(100 / $("#banner-content>li").length + "%");
            $("#banner-swicth-ul").width($(".banner-swicth-li").length * ($(".banner-swicth-li").width()) + 60);
            $("#banner-swicth-ul").css("margin-left", $("#banner-swicth-ul").width() / -2);
            $("#new-center").width($("#new-center>li").width * $("#new-center>li").length);
            var bn = new banner();
        }
    });
};
getBanner();