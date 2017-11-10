var open1 = 1;
$(".step1-ob").click(function() {
    open1++;
    if (open1 % 2 == 0) {
        $(".step1-box").animate({ "height": $(".step1-cont").height() }, 100);
        $(".step1-op").fadeOut(100);
        $(".step1-cl").fadeIn(100);
    } else {
        $(".step1-box").animate({ "height": "3.6rem" }, 100);
        $(".step1-op").fadeIn(100);
        $(".step1-cl").fadeOut(100);
    };
});
var open2 = 1;
$(".step2-ob").click(function() {
    open2++;
    if (open2 % 2 == 0) {
        $(".step2-box").animate({ "height": $(".step2-cont").height() }, 100);
        $(".step2-op").fadeOut(100);
        $(".step2-cl").fadeIn(100);
    } else {
        $(".step2-box").animate({ "height": "3.6rem" }, 100);
        $(".step2-op").fadeIn(100);
        $(".step2-cl").fadeOut(100);
    };
});