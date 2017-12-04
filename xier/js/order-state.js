var fn = {
    // 订单类型切换
    qh: function() {
        $(".od-li").each(function(i) {
            if ($(".od-li").eq(i).attr("status") == "待收货") {
                $(".waiTake").eq(i).css("display", "block");
            } else if ($(".od-li").eq(i).attr("status") == "待发货") {
                $(".waiSend").eq(i).css("display", "block");
            } else if ($(".od-li").eq(i).attr("status") == "待付款") {
                $(".waiPay").eq(i).css("display", "block");
            } else if ($(".od-li").eq(i).attr("status") == "待评论") {
                $(".waiComment").eq(i).css("display", "block");
            } else if ($(".od-li").eq(i).attr("status") == "已完成") {
                $(".odFinish").eq(i).css("display", "block");
            };
        })
        $(".order-states>li").each(function(i) {
            $(".order-states>li").eq(i).click(function() {
                $(this).siblings().removeClass("c-states");
                $(this).addClass("c-states");
                $(".od-li").each(function(i) {
                    if ($(".od-li").eq(i).attr("status") == "待收货") {
                        $(".waiTake").eq(i).css("display", "block");
                    } else if ($(".od-li").eq(i).attr("status") == "待发货") {
                        $(".waiSend").eq(i).css("display", "block");
                    } else if ($(".od-li").eq(i).attr("status") == "待付款") {
                        $(".waiPay").eq(i).css("display", "block");
                    } else if ($(".od-li").eq(i).attr("status") == "待评论") {
                        $(".waiComment").eq(i).css("display", "block");
                    } else if ($(".od-li").eq(i).attr("status") == "已完成") {
                        $(".odFinish").eq(i).css("display", "block");
                    };
                })
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
    // 翻页
    page: function() {
        var dislay, lay;
        var nowlay = 1;
        $(".page-turner").pagination({
            currentPage: nowlay, // 当前页数
            totalPage: lay, // 总页数
            isShow: true, // 是否显示首尾页
            count: dislay, // 显示个数
            homePageText: "回到首页", // 首页文本
            endPageText: "跳到尾页", // 尾页文本
            prevPageText: "上一页", // 上一页文本
            nextPageText: "下一页", // 下一页文本 
            callback: function(current) {
                // 回调,current(当前页数)
                nowlay = current;
            }
        });
    }
};
$(function() {
    fn.qh();
    fn.del();
    fn.del_all();
    fn.page();
})