//地区选择
! function() {
    var $target = $('#J_Address');
    $target.citySelect({
        provance: '新疆',
        city: '乌鲁木齐市',
        area: '天山区'
    });
    $target.on('click', function(event) {
        event.stopPropagation();
        $target.citySelect('open');
    });
    $target.on('done.ydui.cityselect', function(ret) {
        $(this).val(ret.provance + ' ' + ret.city + ' ' + ret.area);
    });
}();
// /*** 设置默认值*/
// ! function() {
//     var $target = $('#J_Address2');
//     $target.citySelect({
//         provance: '新疆',
//         city: '乌鲁木齐市',
//         area: '天山区'
//     });
//     $target.on('click', function(event) {
//         event.stopPropagation();
//         $target.citySelect('open');
//     });
//     $target.on('done.ydui.cityselect', function(ret) {
//         $(this).val(ret.provance + ' ' + ret.city + ' ' + ret.area);
//     });
// }();
$(".has-xg").click(function() {
    $(this).parent().parent().parent().children("div").children("textarea").removeAttr("disabled");
    $(this).parent().hide();
    $(this).parent().siblings(".has-op-aff").show();
    $(this).parent().parent().parent().children("div").children("textarea").css({ "border": "1px solid #dcdcdc", "color": "#000" });
    sessionStorage.setItem("add", $(this).parent().parent().parent().children(".has-region").children("textarea").val());
    sessionStorage.setItem("add-xx", $(this).parent().parent().parent().children(".has-detailed-address").children("textarea").val());
    sessionStorage.setItem("post", $(this).parent().parent().parent().children(".has-postcode").children("textarea").val());
    sessionStorage.setItem("tel", $(this).parent().parent().parent().children(".has-tel").children("textarea").val());
});
$(".has-sc").click(function() {
    $(this).parent().parent().parent().remove();
});
$(".has-qr").click(function() {
    $(this).parent().parent().parent().children("div").children("textarea").attr("disabled", true);
    $(this).parent().parent().parent().children("div").children("textarea").css({ "border": "0", "color": "#666" });
    $(this).parent().hide();
    $(this).parent().siblings(".has-op-c").show();
});
$(".has-qx").click(function() {
    $(this).parent().parent().parent().children("div").children("textarea").attr("disabled", true);
    $(this).parent().parent().parent().children("div").children("textarea").css({ "border": "0", "color": "#666" });
    $(this).parent().hide();
    $(this).parent().siblings(".has-op-c").show();
    $(this).parent().parent().parent().children(".has-region").children("textarea").val(sessionStorage.getItem("add"));
    $(this).parent().parent().parent().children(".has-detailed-address").children("textarea").val(sessionStorage.getItem("add-xx"));
    $(this).parent().parent().parent().children(".has-postcode").children("textarea").val(sessionStorage.getItem("post"));
    $(this).parent().parent().parent().children(".has-tel").children("textarea").val(sessionStorage.getItem("tel"));
});