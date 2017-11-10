var fn = {
    // 选择收货地址
    cd: function() {
        $(".add-li").click(function() {
            $(this).siblings().removeClass("add-li-c");
            $(this).addClass("add-li-c");
            $(this).children($(".add-box")).children($("input").eq(0)).prop("checked");
        });
    },
    car: function() {
        var pri = 0;
        $(".sub-c").each(function(i) {
            pri += Number($(".sub-c:eq(" + i + ")>p>span").html());
        });
        $(".od-price span").html("&yen" + pri);
        $(".pay span").html("&yen" + (pri + Number($(".od-op-t").html()) + Number($(".od-op-i").html())));

        function pnum() {
            var p = 0;
            $(".sub-c").each(function(i) {
                p += Number($(".sub-c:eq(" + i + ")>p>span").html());
            });
            $(".od-price span").html("&yen" + p);
            $(".pay span").html("&yen" + (p + Number($(".od-op-t").html()) + Number($(".od-op-i").html())))
        };

        // 购物车数量
        $(".od-amount").each(function(i) {
            var num = 1;

            $(".od-amount:eq(" + i + ") .ac-sub").click(function() {
                num++;
                $(".od-amount:eq(" + i + ") .a-val").attr("value", num);
                $(".sub-c:eq(" + i + ")>p>span").html(num * 299);
                pnum();
            });
            $(".od-amount:eq(" + i + ") .ac-add").click(function() {
                if (num == 1) {
                    return;
                };
                num--;
                $(".od-amount:eq(" + i + ") .a-val").attr("value", num);
                $(".sub-c:eq(" + i + ")>p>span").html(num * 299);
                pnum();
            });
        });
    },
    so: function() {
        // 提交订单
        $(".od-sub>button").click(function() {
            window.location.assign("/payment.html");
        });
    },
};
window.onload = function() {
    fn.car();
    fn.cd();
    fn.so();
};