window.onload = function() {
    document.addEventListener("change", function() {
        $(".op-c").each(function(i) {
            if ($(".op-c").eq(i).children("input").val().length > 0) {
                $(".op-c").eq(i).children(".op-cl").fadeIn(100);
            };
            if ($(".op-c").eq(i).children("input").val().length == 0) {
                $(".op-c").eq(i).children(".op-cl").fadeOut(100);
            };
        });
        $(".op-cl").click(function() {
            $(this).siblings("input").val("");
            $(this).fadeOut(100);
        });
    });
};
$(".inquire .sub").click(function() {
    if ($(".op-cont input").val() == "" || $(".op-cont select").val() == "") {
        $(".inquire .zz").fadeIn(200);
        $(".inquire .gb").click(function() {
            $(".inquire .zz").fadeOut(200);
        });
        $(".inquire .qx").click(function() {
            $(".inquire .zz").fadeOut(200);
        });
        $(".inquire .qd").click(function() {
            $(".inquire .zz").fadeOut(100);
            window.location.assign("/index.html");
        });
        return;
    } else {
        window.location.assign("/inquire_result.html");
    };
})