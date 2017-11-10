var jf = 0;
var pri = 0;
var fn = {
    pw: function() {
        $(".pay-way>li").click(function(ev) {
            ev.preventDefault();
            var p = 0;
            $(this).siblings().removeClass("c-pay");
            $(this).addClass("c-pay");
            $(this).siblings(".jf-os").children(".jf-offset").children(".use-jf").children("p").children("input").prop("value", "");
            jf = 0;
            $(".price").each(function(i) {
                p += Number($(".price").eq(i).children("span").html());
            });
            $(".pw-p-c").children("span").html("&yen" + p);
        });
        $(".qr-p>button").click(function() {
            window.location.assign("/pay-success.html");
        });
    },
    pr: function() {
        $(".price").each(function(i) {
            pri += Number($(".price").eq(i).children("span").html());
        });
        if ($(".c-pay .use-jf input").val() > 0) {
            jf = Number($(".c-pay .use-jf input").val() / 100);
        } else if ($(".c-pay .use-jf input").val() == "" || $(".c-pay .use-jf input").val() == undefined || $(".c-pay .use-jf input").val() == null) {
            jf = 0;
        };
        $(".pw-p-c").children("span").html("&yen" + (pri - jf));

        function a() {
            $(".c-pay .sub-use").click(function(ev) {
                ev.stopPropagation();
                if ($(".c-pay .use-jf input").val() > 0) {
                    jf = Number($(".c-pay .use-jf input").val() / 100);
                } else if ($(".c-pay .use-jf input").val() == "" || $(".c-pay .use-jf input").val() == undefined || $(".c-pay .use-jf input").val() == null) {
                    jf = 0;
                };
                $(".pw-p-c").children("span").html("&yen" + (pri - jf));
                // $(".price").each(function(i) {
                //     pri += Number($(".price").eq(i).children("span").html());
                // });
                // $(".pw-p-c").children("span").html("&yen" + pri);
            });
        };
        a();
        document.addEventListener("change", function() {
            a();
            // if ($(".c-pay .use-jf input").val() > 0) {
            //     jf = Number($(".c-pay .use-jf input").val() / 100);
            // } else if ($(".c-pay .use-jf input").val() == "" || $(".c-pay .use-jf input").val() == undefined || $(".c-pay .use-jf input").val() == null) {
            //     jf = 0;
            // };
            // $(".pw-p-c").children("span").html("&yen" + pri);
            // $(".pw-p-c").children("span").html("&yen" + (pri - jf));
        });
    }
};
window.onload = function() {
    fn.pw();
    fn.pr();
}