var column_child_val = localStorage.getItem("column_child_val");
var column_child_url = localStorage.getItem("column_child_url");
var column = localStorage.getItem("column");
var article_title = localStorage.getItem("article_title");
var article_time = localStorage.getItem("article_time");
var column_child = localStorage.getItem("column_child");
var article_id = Number(localStorage.getItem("article_id"));
var op;
var data = {
    article: function() {
        $.ajax({
            type: "post",
            url: data_url,
            dataType: "json",
            data: {
                "action": "GetOneArticle",
                "AricleId": article_id
            },
            success: function(json) {
                $(".now").html("&gt" + column_child_val);
                $(".now").attr("href", column_child_url);
                $("#title").html(json.Result.article_title);
                if (json.Result.article_origin == "" || json.Result.article_origin == null) {
                    $("#source a").html("");
                    $("#source").css("margin", "0");
                } else {
                    $("#source a").html("来源：" + json.Result.article_origin)
                };
                if (json.Result.article_origin_address != "" || json.Result.article_origin_address != null) {
                    $("#source a").attr("href", json.Result.article_origin_address);
                };
                if (json.Result.article_publish_time) {
                    $('#time>i').html(json.Result.article_publish_time);
                } else if (article_time && article_time != undefined) {
                    $('#time>i').html(article_time);
                } else if (json.Result.article_publish_time == "" || !json.Result.article_publish_time || article_time == "" || article_time == null) {
                    $('#time>i').html("暂无发布时间信息");
                };
                if (json.Result.article_video == "" || json.Result.article_video == null || json.Result.article_video == "http://39.108.189.233:8001/") {
                    $("#article-main>video").remove();
                    $("#article-main>img").attr("src", json.Result.article_image);
                } else {
                    $("#article-main>img").remove();
                    $("#article-main>video").attr("src", json.Result.article_video)
                };
                $("#article-main>div").html(json.Result.article_content);
                $("#reading>i").html(json.Result.article_click);
                // if ($("#source").width() == 0) {
                //     $("#operate").css({ "width": $("#reading").width() + $('#time').width() + 130, "margin": "0 auto", "margin-bottom": "30px" });
                // } else {
                //     $("#operate").css({ "width": $("#source").width() + $("#reading").width() + $('#time').width() + 190, "margin": "0 auto", "margin-bottom": "30px" });
                // }
            }
        });
    },
    getart: function() {
        article_id = Number(localStorage.getItem("article_id"));
        $.ajax({
            type: "post",
            url: data_url,
            dataType: "json",
            data: {
                "action": "GetNextOrPreAricle",
                "ColumnId": column_child,
                "AricleId": article_id,
                "op": op
            },
            success: function(json) {
                if (json.Result == null) {
                    $("#tc-box").fadeIn(400);
                    $(".close").each(function(i) {
                        $(".close").click(function() {
                            $("#tc-box").fadeOut(200);
                        });
                    });
                    return;
                };
                $(window).scrollTop(0);
                $("#title").html(json.Result.article_title);
                if (json.Result.article_origin == "" || json.Result.article_origin == null) {
                    $("#source a").html("");
                    $("#source").css("margin", "0");
                } else {
                    $("#source a").html("来源：" + json.Result.article_origin)
                };
                if (json.Result.article_origin_address != "" || json.Result.article_origin_address != null) {
                    $("#source a").attr("href", json.Result.article_origin_address);
                };
                if (json.Result.article_publish_time) {
                    $('#time>i').html(json.Result.article_publish_time);
                } else if (article_time && article_time != undefined) {
                    $('#time>i').html(article_time);
                } else if (json.Result.article_publish_time == "" || !json.Result.article_publish_time || article_time == "" || article_time == null) {
                    $('#time>i').html("暂无发布时间信息");
                };
                if (json.Result.article_video == "" || json.Result.article_video == null || json.Result.article_video == "http://39.108.189.233:8001/") {
                    $("#article-main>video").remove();
                    $("#article-main>img").attr("src", json.Result.article_image);
                } else {
                    $("#article-main>img").remove();
                    $("#article-main>video").attr("src", json.Result.article_video)
                };
                $("#article-main>div").html(json.Result.article_content);
                $("#reading>i").html(json.Result.article_click);
                // if ($("#source").width() == 0) {
                //     $("#operate").css({ "width": $("#reading").width() + $('#time').width() + 130, "margin": "0 auto", "margin-bottom": "30px" });
                // } else {
                //     $("#operate").css({ "width": $("#source").width() + $("#reading").width() + $('#time').width() + 190, "margin": "0 auto", "margin-bottom": "30px" });
                // }
                localStorage.setItem("article_id", json.Result.id);
            },
            error: function(error) {
                $("#tc-box").fadeIn(200);
                $(".close").each(function(i) {
                    $(".close").click(function() {
                        $("#tc-box").fadeOut(200);
                    });
                });
            }
        });
    },
    nextart: function() {
        $("#next").click(function() {
            op = "next";
            data.getart();
        });
    },
    previousart: function() {
        $("#previous").click(function() {
            op = "pre";
            data.getart();
        });
    }
};
$(function() {
    data.article();
    data.nextart();
    data.previousart();
});