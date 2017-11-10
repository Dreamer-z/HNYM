var column_child = localStorage.getItem("column_child");
var column = localStorage.getItem("column");
var column_val = localStorage.getItem("column_val");
var column_child_val = localStorage.getItem("column_child_val");
var column_url = localStorage.getItem("column_url");
var column_child_url = localStorage.getItem("column_child_url");
var article_id = Number(localStorage.getItem("article_id"));
var article = {
    article: function() {
        $.ajax({
            type: "post",
            url: data_url,
            dataType: "json",
            data: {
                "action": "GetOneArticle",
                // "ColumnId": column_child,
                "AricleId": article_id
            },
            success: function(json) {
                $("#column").html(column_val);
                $("#column").attr("href", column_url);
                $("#column-child").html(column_child_val);
                $("#column-child").attr("href", column_child_url);
                $("#title").html(json.Result.article_title);
                if (json.Result.article_origin == "" || json.Result.article_origin == null) {
                    $("#source a").html("");
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
                } else {
                    $("#article-main>video").attr("src", json.Result.article_video);
                };
                $("#article-main>div").html(json.Result.article_content);
                $("#reading>i").html(json.Result.article_click);
                // if ($("#source").width() == 0) {
                //     $("#operate").css({ "width": $("#reading").width() + $('#time').width() + 130, "margin": "0 auto", "margin-bottom": "30px" });
                // } else {
                //     $("#operate").css({ "width": $("#source").width() + $("#reading").width() + $('#time').width() + 190, "margin": "0 auto", "margin-bottom": "30px" });
                // }
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
                } else {
                    $("#article-main>video").attr("src", json.Result.article_video);
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
            article.getart();
        });
    },
    previousart: function() {
        $("#previous").click(function() {
            op = "pre";
            article.getart();
        });
    }
};
$(function() {
    article.article();
    article.nextart();
    article.previousart();
});