function star(parentId) {
    var dom = document.getElementById(parentId);
    var ind = -1,
        ind2;

    function starbg1() {
        $("#" + parentId).children("label:lt(" + (ind + 1) + ")").each(function(i) {
            $("#" + parentId).children("label:lt(" + (ind + 1) + ")").eq(i).css({ "background": "url(./../images/collect_on.png)no-repeat center", "background-size": "100%" });
        });
        $("#" + parentId).children("label:gt(" + ind + ")").each(function(i) {
            $("#" + parentId).children("label:gt(" + ind + ")").eq(i).css({ "background": "url(./../images/collect.png)no-repeat center", "background-size": "100%" });
        });
    };

    function starbg2() {
        $("#" + parentId).children("label:lt(" + (ind2 + 1) + ")").each(function(i) {
            $("#" + parentId).children("label:lt(" + (ind2 + 1) + ")").eq(i).css({ "background": "url(./../images/collect_on.png)no-repeat center", "background-size": "100%" });
        });
        $("#" + parentId).children("label:gt(" + ind2 + ")").each(function(i) {
            $("#" + parentId).children("label:gt(" + ind2 + ")").eq(i).css({ "background": "url(./../images/collect.png)no-repeat center", "background-size": "100%" });
        });
    };
    $("#" + parentId).children("label").each(function(i) {
        $("#" + parentId).children("label").eq(i).mouseenter(function() {
            ind2 = i;
            starbg2();
        });
        $("#" + parentId).children("label").eq(i).mouseleave(function() {
            if (ind == -1) {
                $("#" + parentId).children("label").css({ "background": "url(./../images/collect.png)no-repeat center", "background-size": "100%" });
            } else {
                ind2 = ind;
                starbg2();
            }
        });
    });
    dom.addEventListener("click", function() {
        $("#" + parentId).children("input").each(function(i) {
            if ($("#" + parentId).children("input").eq(i).prop("checked")) {
                $("#" + parentId).children("label").eq(i).css({ "background": "url(./../images/collect.png)no-repeat center", "background-size": "100%" });
                ind = i;
            };
        });
        starbg1()
            // $("#" + parentId).children("label:lt(" + (ind + 1) + ")").each(function(i) {
            //     $("#" + parentId).children("label:lt(" + (ind + 1) + ")").eq(i).css({ "background": "url(./../images/collect_on.png)no-repeat center", "background-size": "100%" });
            // });
            // $("#" + parentId).children("label:gt(" + ind + ")").each(function(i) {
            //     $("#" + parentId).children("label:gt(" + ind + ")").eq(i).css({ "background": "url(./../images/collect.png)no-repeat center", "background-size": "100%" });
            // });
    });

};
star("proCom");
star("logCom");
star("serAtt");
// 添加评论区图片,向头部添加
function putH(inpid, domname, imglength) {
    var len = 0;
    document.getElementById(inpid).addEventListener("change", function() {
        var imgArr = [];
        var imgurl;
        filelist = document.getElementById(inpid).files;
        len += filelist.length;
        if (len > imglength) {
            len -= filelist.length;
            if (imglength) {
                alert("最多只能上传" + imglength + "张图片哦！");
            };
            return;
        };
        for (var i = 0; i < filelist.length; i++) {
            imgurl = window.URL.createObjectURL(filelist[i]);
            imgArr.push(imgurl);
            $("<img/>", {
                src: imgArr[i],
                class: "img-li"
            }).appendTo($("<div/>", {
                class: "img-li-box y-left"
            }).insertBefore($("." + domname)));
        };

        $(".img-li-box").each(function(i) {
            $(".img-li-box").eq(i).children(".delinp").remove();
            $("<div/>", {
                class: "delinp"
            }).appendTo($(".img-li-box").eq(i));
        });

        // 删除图片操作
        $(".delinp").click(function(ev) {
            ev.stopPropagation();
            $(this).parent(".img-li-box").remove();
            len -= 1;
        });
    });
};
putH("pushimg", "pushimg", 6);
// 监测输入字数
function inplength() {
    var dom = document.getElementsByClassName("comment")[0];
    dom.addEventListener("keyup", function() {
        if ($(".comment").val().length >= 450) {
            $(".inpLength span").css("color", "red");
        };
        $(".inpLength span").html($(".comment").val().length);

    });
};
inplength();