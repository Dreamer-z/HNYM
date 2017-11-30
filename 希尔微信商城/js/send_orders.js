function nb() { // 数量
    $("#adult").val($(".ordDet-commodity-num").children(" span").html());

    function allnum(pnum) {
        $(".ocnum").html(pnum);
        $(".ocTotal").html(pnum * Number($(".ocPrice").html()));
        $(".aggregate").html(pnum * Number($(".ocPrice").html()));
    };
    // 数量选择
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
        allnum(pnum);
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
        allnum(pnum);
    });
};

function ticket() { // 优惠券
    $(".md-ticket").click(function(ev) {
        ev.stopPropagation();
        $(".ticket-zzc").css("display", "block");
        $(".ticket-box").slideDown("slow");
        $(document).click(function(ev) {
            if (ev.target == $(".ticket-box")[0] || ev.target == $(".coupon-list")[0] || ev.target == $(".coupon-li")[0] || ev.target == $(".coupon-sec")[0] || ev.target == $(".coupon-sec-limit")[0] || ev.target == $(".coupon-sec-limit span")[0] || ev.target == $(".coupon-sec-cont")[0] || ev.target == $(".coupon-sec-tit")[0] || ev.target == $(".coupon-sec-type")[0] || ev.target == $(".coupon-sec-type span")[0] || ev.target == $(".coupon-validity")[0] || ev.target == $(".coupon-validity span")[0] || ev.target == $(".ticket-tit")[0]) {
                return;
            } else {
                $(".ticket-zzc").slideUp("slow");
                $(".ticket-box").slideUp("slow");
            }
        });
        $(".coupon-li2").click(function() {
            $(".ticket-zzc").slideUp("slow");
            $(".ticket-box").slideUp("slow");
            $(".cTicket").html($(this).children(".coupon-li-box").children(".coupon-sec").children(".coupon-limit").children("span").html() + "元优惠券")
        });
    });
}