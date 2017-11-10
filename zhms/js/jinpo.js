var open = 1;
$(".open-box").click(function() {
    open++;
    if (open % 2 == 0) {
        $(".step-box").animate({ "height": $(".step-cont").height() }, 100);
        $(".open").fadeOut(100);
        $(".close").fadeIn(100);
    } else {
        $(".step-box").animate({ "height": "6.7rem" }, 100);
        $(".open").fadeIn(100);
        $(".close").fadeOut(100);
    };
});