// 购物车数量
$(".od-amount").each(function(i) {
    var num = 1;
    $(".od-amount:eq(" + i + ") .a-add").click(function() {
        if (num == 1) {
            return;
        };
        num--;
        $(".od-amount:eq(" + i + ") .a-val").attr("value", num);
        $(".od-total:eq(" + i + ") span").html(num * 299);
        dc();
    });
    $(".od-amount:eq(" + i + ") .a-sub").click(function() {
        num++;
        $(".od-amount:eq(" + i + ") .a-val").attr("value", num);
        $(".od-total:eq(" + i + ") span").html(num * 299);
        dc();
    })
});
// 全选
var chnum = 1;
$("#all-li").click(function() {
    chnum++;
    if (chnum % 2 == 0) {
        $(".c-li").each(function(i) {
            $(".c-li input").prop("checked", "checked");
        });
        $("#all-li-c").prop("checked", "checked");
        $(".c-li:eq(" + i + ") input").addClass("cd");
    };
    if (chnum % 2 == 1) {
        $(".c-li").each(function(i) {
            $(".c-li input").removeProp("checked");
        });
        $("#all-li-c").removeProp("checked");
        $(".c-li:eq(" + i + ") input").removeClass("cd");
    };
    a();
});
$("#all-li-c").click(function() {
    chnum++;
    if (chnum % 2 == 0) {
        $(".c-li").each(function(i) {
            $(".c-li:eq(" + i + ") input").prop("checked", "checked");
            $(".c-li:eq(" + i + ") input").addClass("cd");
        });
        $("#all-li").prop("checked", "checked");
    };
    if (chnum % 2 == 1) {
        $(".c-li").each(function(i) {
            $(".c-li:eq(" + i + ") input").removeProp("checked");
        });
        $("#all-li").removeProp("checked");
        $(".c-li:eq(" + i + ") input").removeClass("cd");
    };
    a();
});
// 结算按钮
function a() {
    var cn = 0;
    $(".c-li").each(function(i) {
        if ($(".c-li:eq(" + i + ") input").prop("checked")) {
            cn++;
        };
    });
    if (cn > 0) {
        $(".op-c").css({ "color": "#fff", "background-color": "red" });
        $(".op-c").click(function() {
            window.location.assign("/submit_order.html");
        })
    } else {
        $(".op-c").css({ "color": "", "background-color": "" });
    };
};
a();
document.addEventListener("change", a, true);
// 删除
$(".od-del").click(function() {
    var self = this;
    $(".del-aff").fadeIn(200);
    $(".aff").click(function() {
        $(".del-aff").fadeOut(200);
        $(self).parent().parent().remove();
    });
});
$(".canc").click(function() {
    $(".del-aff").fadeOut(200);
});
// 全部删除
$(".c-all").click(function() {
    var self = this;
    $(".del-aff").fadeIn(200);
    $(".aff").click(function() {
        $(".del-aff").fadeOut(200);
        $(".od-li").remove();
    });
});
// 删除选中
function dc() {
    var price = 0;
    var inn = 0;
    $(".c-li").each(function(i) {
        if ($(".c-li:eq(" + i + ") input").prop("checked")) {
            price += Number($(".sell-pri").eq(i).html());
            inn++;
        };
    });
    if (inn > 0) {
        $(".cc-del").click(function() {
            $(".del-aff").fadeIn(200);
            $(".aff").click(function() {
                $(".del-aff").fadeOut(200);
                $(".cd").parent().parent().remove();
                $(".c-li").each(function(i) {
                    if ($(".c-li:eq(" + i + ")>input").prop("checked") == true) {
                        $(".c-li:eq(" + i + ")>input").parent().parent().remove();
                    };
                });
                $("#all-li-c").removeProp("checked");
                $("#all-li").removeProp("checked");
                inn = 0;
                chnum = 1;
                $(".amount-c span").html(0);
                $(".total-c span").html("&yen" + 0);
            });
        });
    }
    $(".amount-c span").html(inn);
    $(".total-c span").html("&yen" + price);
};

document.addEventListener("change", dc, true)