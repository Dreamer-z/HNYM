var column = localStorage.getItem("column");
var column_child_val = localStorage.getItem("column_child_val");
//获取文章列表数据
var artic_1 = document.getElementsByClassName("balance-common-section-cont-artic");
var column_child;
var common, cyclopedia, complication, information;
var daarr = [];
var balance = {
    column: function() {
        $.post(
            data_url, {
                "action": "GetChildInfo",
                "parentid": column,
                "pagesize": 5,
                "pid": 1
            },
            function(json) {
                $("#balance>li").each(function(i) {
                    $("#balance>li:eq(" + i + ") .balance-title").html(json.Result[i].category_name);
                    $("#balance>li:eq(" + i + ") .balance-title").attr("data_id", json.Result[i].id);
                    $("#balance>li").eq(i).attr("data_columnid", json.Result[i].id);
                    daarr.push(json.Result[i].id);
                });
                $(".balance-title").click(function() {
                    localStorage.setItem("column_child", $(this).attr("data_id"));
                    localStorage.setItem("child2_column", $(this).siblings(".balance-column-introduce").children("a").eq(0).attr("data_id"));
                    localStorage.setItem("child2_column_val", $(this).siblings(".balance-column-introduce").children("a").eq(0).html().split("/")[0]);
                    window.location.assign("/balance_article_column.html");
                });
                $(json.Result).each(function(i) {
                    $(json.Result[i].ChildList).each(function(j) {
                        $("<a/>", { class: "bci-l" }).appendTo($(".balance-column-introduce:eq(" + i + ")"));
                        $(".balance-column-introduce:eq(" + i + ") a").eq(j).html(json.Result[i].ChildList[j].category_name + "&nbsp/&nbsp");
                        $(".balance-column-introduce:eq(" + i + ") a").eq(j).attr("data_id", json.Result[i].ChildList[j].id)
                    });
                });
                $(".bci-l").click(function() {
                    localStorage.setItem("child2_column", $(this).attr("data_id"));
                    localStorage.setItem("column_child", $(this).parent().parent().parent().attr("data_columnid"));
                    window.location.assign("/balance_article_column.html");
                });
                $(json.Result).each(function(i) {
                    if (column_child == "" || column_child == undefined) {
                        localStorage.setItem("column_child", json.Result[0].id);
                    };
                    if (json.Result[i].category_name == $(".balance-common .balance-title").html()) {
                        common = json.Result[i].AricleList;
                        $(".balance-common-section").attr("data_column", json.Result[i].category_name);
                        $(".balance-common-section").attr("data_columnid", json.Result[i].id);
                    } else if (json.Result[i].category_name == $(".balance-cyclopedia .balance-title").html()) {
                        cyclopedia = json.Result[i].AricleList;
                        $(".balance-cyclopedia-list").attr("data_column", json.Result[i].category_name);
                        $(".balance-cyclopedia-list").attr("data_columnid", json.Result[i].id);
                    } else if (json.Result[i].category_name == $(".balance-complication .balance-title").html()) {
                        complication = json.Result[i].AricleList;
                        $(".balance-complication").attr("data_column", json.Result[i].category_name);
                        $(".balance-complication").attr("data_columnid", json.Result[i].id);
                    } else if (json.Result[i].category_name == $(".balance-information .balance-title").html()) {
                        information = json.Result[i].AricleList;
                        $(".balance-information-box").attr("data_column", json.Result[i].category_name);
                        $(".balance-information-box").attr("data_columnid", json.Result[i].id);
                    }
                });
                $(".balance-complication-left-box").html($("#complicationTemplate").tmpl(complication));
                if (!complication[2]) {
                    $(".balance-complication-right img").css("display", "none");
                } else {
                    $(".balance-complication-right img").attr("src", complication[2].article_image);
                    $(".balance-complication-right h4").attr("src", complication[2].article_title);
                    if (complication[2].article_video || complication[2].article_video != "" || complication[2].article_video != null || complication[2].article_video != "http://39.108.189.233:8001/") {
                        $(".balance-complication-right .play").css("display", "block");
                    };
                }

                $(".balance-cyclopedia-list").html($("#cyclopediaTemplate").tmpl(cyclopedia));
                $(".balance-common-section").html($("#commonTemplate").tmpl(common));
                $(".balance-information-box").html($("#informationTemplate").tmpl(information));
                $(complication).each(function(i) {
                    if (complication[i].article_video && complication[i].article_video != "" && complication[i].article_video != null && complication[i].article_video != "http://39.108.189.233:8001/") {
                        $(".balance-complication-left .play").eq(i).css("display", "block");
                    };
                });
                $(cyclopedia).each(function(i) {
                    if (cyclopedia[i].article_video && cyclopedia[i].article_video != "" && cyclopedia[i].article_video != null && cyclopedia[i].article_video != "http://39.108.189.233:8001/") {
                        $(".balance-cyclopedia-list-box .play").eq(i).css("display", "block");
                    };
                });
                $(common).each(function(i) {
                    if (common[i].article_video && common[i].article_video != "" && common[i].article_video != null && common[i].article_video != "http://39.108.189.233:8001/") {
                        $(".balance-common-section-img .play").eq(i).css("display", "block");
                    };
                });
                $(information).each(function(i) {
                    if (information[i].article_video && information[i].article_video != "" && information[i].article_video != null && information[i].article_video != "http://39.108.189.233:8001/") {
                        $(".balance-information-box .balance-information-img .play").eq(i).css("display", "block");
                    };
                });
                var artic_1 = document.getElementsByClassName("balance-common-section-cont-artic");
                for (var i = 0; i < artic_1.length; i++) {
                    $clamp(artic_1[i], { clamp: 4 });
                };
                var artic_2 = document.getElementsByClassName("bclc");
                for (var j = 0; j < artic_2.length; j++) {
                    $clamp(artic_2[j], { clamp: 1 });
                };
                var artic_3 = document.getElementsByClassName("bcc");
                for (var t = 0; t < artic_3.length; t++) {
                    $clamp(artic_3[t], { clamp: 6 });
                };
                var artic_4 = document.getElementsByClassName("bic");
                for (var s = 0; s < artic_4.length; s++) {
                    $clamp(artic_4[s], { clamp: 5 });
                };
                $(".balance-common-section>li").each(function(i) {
                    $(".balance-common-section>li").eq(i).click(function() {
                        localStorage.setItem("column_child_val", $(".balance-common-section").attr("data_column"));
                        localStorage.setItem("column_child", $(".balance-common-section").attr("data_columnid"));
                        localStorage.setItem("article_id", $(this).attr("data_id"));
                        localStorage.setItem("article_title", $(this).attr("data_title"));
                        window.location.assign("/balance_article.html");
                    });
                });
                $(".balance-cyclopedia-list-box").each(function(i) {
                    $(".balance-cyclopedia-list-box").eq(i).click(function() {
                        localStorage.setItem("column_child_val", $(".balance-cyclopedia-list").attr("data_column"));
                        localStorage.setItem("column_child", $(".balance-cyclopedia-list").attr("data_columnid"));
                        localStorage.setItem("article_id", $(this).attr("data_id"));
                        localStorage.setItem("article_title", $(this).attr("data_title"));
                        window.location.assign("/balance_article.html");
                    });
                });
                $(".balance-complication-left").each(function(i) {
                    $(".balance-complication-left").eq(i).click(function() {
                        localStorage.setItem("column_child_val", $(".balance-complication").attr("data_column"));
                        localStorage.setItem("column_child", $(".balance-complication").attr("data_columnid"));
                        localStorage.setItem("article_id", $(this).attr("data_id"));
                        localStorage.setItem("article_title", $(this).attr("data_title"));
                        window.location.assign("/balance_article.html");
                    });
                });
                $(".balance-complication-right").click(function() {
                    localStorage.setItem("column_child_val", $(".balance-complication").attr("data_column"));
                    localStorage.setItem("column_child", $(".balance-complication").attr("data_columnid"));
                    localStorage.setItem("article_id", $(this).attr("data_id"));
                    localStorage.setItem("article_title", $(this).attr("data_title"));
                    window.location.assign("/balance_article.html");
                });
                $(".balance-information-box>li").each(function(i) {
                    $(".balance-information-box>li:eq(" + i + ") button").click(function() {
                        localStorage.setItem("column_child_val", $(".balance-information-box").attr("data_column"));
                        localStorage.setItem("column_child", $(".balance-information-box").attr("data_columnid"));
                        localStorage.setItem("article_id", $(".balance-information-box>li:eq(" + i + ")").attr("data_id"));
                        localStorage.setItem("article_title", $(".balance-information-box>li:eq(" + i + ")").attr("data_title"));
                        window.location.assign("/balance_article.html");
                    });
                });
                if (!complication[2] || complication[2] == "") {
                    return;
                } else {
                    if (complication[2].article_video && complication[2].article_video != "" && complication[2].article_video != null && complication[2].article_video != "http://39.108.189.233:8001/") {
                        $("#example_video_1").attr("src", complication[2].article_video);
                        $(".balance-complication-right .play").css("display", "block");
                    } else {
                        $("#example_video_1").remove();
                        $(".balance-complication-right").attr("data_id", complication[2].id);
                        $(".balance-complication-right h4").html(complication[2].article_title);
                        $(".balance-complication-right img").attr("src", complication[2].article_image);
                    }
                };
            },
            "json"
        );
    },
    // hh: function() {
    //     var artic_1 = document.getElementsByClassName("balance-common-section-cont-artic");
    //     for (var i = 0; i < artic_1.length; i++) {
    //         $clamp(artic_1[i], { clamp: 5 });
    //     };
    //     var artic_2 = document.getElementsByClassName("bclc");
    //     for (var j = 0; j < artic_2.length; j++) {
    //         $clamp(artic_2[j], { clamp: 3 });
    //     };
    //     var artic_3 = document.getElementsByClassName("bcc");
    //     for (var t = 0; t < artic_3.length; t++) {
    //         $clamp(artic_3[t], { clamp: 4 });
    //     };
    //     var artic_4 = document.getElementsByClassName("bic");
    //     for (var s = 0; s < artic_4.length; s++) {
    //         $clamp(artic_4[s], { clamp: 5 });
    //     };
    // },
}
$(function() {
    balance.column();
    // balance.hh();
})