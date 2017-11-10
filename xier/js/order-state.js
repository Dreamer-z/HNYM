var fn = {
    qh: function() {
        $(".order-states>li").each(function(i) {
            $(".order-states>li").eq(i).click(function() {
                $(this).siblings().removeClass("c-states");
                $(this).addClass("c-states");
                $(".oi-ul-c").eq(i).siblings().removeClass("oi-ul-b");
                $(".oi-ul-c").eq(i).addClass("oi-ul-b");
            });
        });
    },
    del: function() {
        $(".od-del").click(function() {
            var i = $(this).index();
            $(this).siblings().fadeIn(200);
            $(this).siblings().children($(".aff")).click(function() {
                $(this).parent().parent().parent().remove();
            });
            $(this).siblings().children($(".canc")).click(function() {
                $(this).parent().parent().fadeOut(200);
            });
        });
        // $("#all-od .od-del").click(function() {
        //     var i = $(this).index();
        //     $(this).siblings().fadeIn(200);
        //     $(this).siblings().children($(".aff")).click(function() {
        //         $(this).parent().parent().parent().remove();
        //     });
        //     $(this).siblings().children($(".canc")).click(function() {
        //         $(this).parent().parent().fadeOut(200);
        //     });
        // });
        // $("#wait-pay .od-del").click(function() {
        //     var i = $(this).index();
        //     $(this).siblings().fadeIn(200);
        //     $(this).siblings().children($(".aff")).click(function() {
        //         $(this).parent().parent().parent().remove();
        //     });
        //     $(this).siblings().children($(".canc")).click(function() {
        //         $(this).parent().parent().fadeOut(200);
        //     });
        // });
        // $("#wait-deliver .od-del").click(function() {
        //     var i = $(this).index();
        //     $(this).siblings().fadeIn(200);
        //     $(this).siblings().children($(".aff")).click(function() {
        //         $(this).parent().parent().parent().remove();
        //     });
        //     $(this).siblings().children($(".canc")).click(function() {
        //         $(this).parent().parent().fadeOut(200);
        //     });
        // });
        // $("#wait-receiving .od-del").click(function() {
        //     var i = $(this).index();
        //     $(this).siblings().fadeIn(200);
        //     $(this).siblings().children($(".aff")).click(function() {
        //         $(this).parent().parent().parent().remove();
        //     });
        //     $(this).siblings().children($(".canc")).click(function() {
        //         $(this).parent().parent().fadeOut(200);
        //     });
        // });
        // $("#wait-comment .od-del").click(function() {
        //     var i = $(this).index();
        //     $(this).siblings().fadeIn(200);
        //     $(this).siblings().children($(".aff")).click(function() {
        //         $(this).parent().parent().parent().remove();
        //     });
        //     $(this).siblings().children($(".canc")).click(function() {
        //         $(this).parent().parent().fadeOut(200);
        //     });
        // });
    },
    del_all: function() {
        var cn = 1;
        $("#c-all").click(function() {
            cn++;
            if (cn % 2 == 0) {
                $(".od-t").each(function(i) {
                    $(".od-t:eq(" + i + ") input").prop("checked", "checked");
                });
            };
            if (cn % 2 != 0) {
                $(".od-t").each(function(i) {
                    $(".od-t:eq(" + i + ") input").removeProp("checked", "checked");
                });
            };
        });
        $(".ca-inpt").click(function() {
            if (cn % 2 != 0) {
                return;
            };
            $(".del-all-aff").fadeIn(200);
        });
        $(".a-canc").click(function() {
            $(".del-all-aff").fadeOut(200);
        });
        $(".a-aff").click(function() {
            $(".del-all-aff").fadeOut(200);
            cn = 0;
            $("#c-all").removeProp("checked");
            $(".od-li").remove();
            cn = 1;
        });
    },
};
$(function() {
    // fn.qh();
    fn.del();
    fn.del_all();
})