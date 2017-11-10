var column = localStorage.getItem("column");
var column_child = localStorage.getItem("column_child");
var column_child_val = localStorage.getItem("column_child_val");
var lay, dislay;
var nowlay = 1;
var data = {
    article: function() {
        $.post(
            data_url, {
                // "action": "GetChildInfo",
                // "parentid": column,
                // "pagesize": 8,
                // "pid": nowlay
                "action": "GetAricleList",
                "cloumnID": column_child,
                "pagesize": 8,
                "pid": nowlay
            },
            function(json) {
                var data;
                $("#column_child").html("&gt" + column_child_val);

                function a() {
                    lay = Number(json.PageCount);
                    return b(lay)
                };
                a();

                function b() {
                    if (lay >= 6) {
                        dislay = 5;
                    } else {
                        dislay = lay;
                    };
                    $("#sprot-aticle").html($("#articleTemplate").tmpl(json.Result))
                    $("#sprot-aticle").attr("data_id", column_child);
                    $(".sprot-aticle-list").each(function(i) {
                        if (json.Result[i].article_video != null && json.Result[i].article_video != "" && json.Result[i].article_video != "http://39.108.189.233:8001/") {
                            $(".sprot-aticle-list .play").eq(i).css("display", "block");
                        };
                        $(".sprot-aticle-list").eq(i).click(function() {
                            localStorage.setItem("article_id", $(this).attr("data_id"));
                            localStorage.setItem("column_child", $("#sprot-aticle").attr("data_id"));
                            localStorage.setItem("column_child_title", $(this).attr("data_title"));
                            window.location.assign("/Health_article.html");
                        });
                    });
                    $(".page-turner").pagination({
                        currentPage: nowlay, // 当前页数
                        totalPage: json.PageCount, // 总页数
                        isShow: true, // 是否显示首尾页
                        count: dislay, // 显示个数
                        homePageText: "回到首页", // 首页文本
                        endPageText: "跳到尾页", // 尾页文本
                        prevPageText: "上一页", // 上一页文本
                        nextPageText: "下一页", // 下一页文本 
                        callback: function(current) {
                            // 回调,current(当前页数)
                            nowlay = current;
                            $.post(data_url, {
                                    "action": "GetAricleList",
                                    "cloumnID": column_child,
                                    "pagesize": 8,
                                    "pid": nowlay
                                },
                                function(json) {
                                    $("#sprot-aticle").html($("#articleTemplate").tmpl(json.Result));
                                    $("#sprot-aticle").attr("data_id", column_child);
                                    $(".sprot-aticle-list").each(function(i) {
                                        if (json.Result[i].article_video != null && json.Result[i].article_video != "" && json.Result[i].article_video != "http://39.108.189.233:8001/") {
                                            $(".sprot-aticle-list .play").eq(i).css("display", "block");
                                        };
                                        $(".sprot-aticle-list").eq(i).click(function() {
                                            localStorage.setItem("article_id", $(this).attr("data_id"));
                                            localStorage.setItem("column_child", $("#sprot-aticle").attr("data_id"));
                                            localStorage.setItem("column_child_title", $(this).attr("data_title"));
                                            window.location.assign("/Health_article.html");
                                        });
                                    });
                                },
                                "json"
                            );
                        }
                    });
                }
            },
            "json"
        );
    },
    hotart: function() {
        $.post(data_url, {
                "action": "GetHotAricle",
                "cloumnID": column
            },
            function(json) {
                var sprotlast;
                $("#sprot-video-right").html($("#healthheadTemplate").tmpl(json.Result));
                $("#sprot-video").attr("data_id", column_child);
                if (json.Result.length > 0) {
                    sprotlast = json.Result.length - 1;
                } else {
                    sprotlast = 0;
                };
                $("#sprot-video-right li").each(function(i) {
                    if (json.Result[i].article_video != null && json.Result[i].article_video != "" && json.Result[i].article_video != "http://39.108.189.233:8001/") {
                        $("#sprot-video-right .play").eq(i).css("display", "block");
                    };
                    $("#sprot-video-right li").eq(i).click(function() {
                        localStorage.setItem("article_id", $(this).attr("data_id"));
                        localStorage.setItem("column_child", $("#sprot-video").attr("data_id"));
                        localStorage.setItem("column_child_title", $(this).attr("data_title"));
                        window.location.assign("/Health_article.html");
                    });
                });
                $("#sprot-video-left img").attr("src", json.Result[sprotlast].article_image);
                $("#sprot-video-left").attr({ "data_id": json.Result[sprotlast].id, "data_title": json.Result[sprotlast].article_title });
                $("#sprot-video-left").click(function() {
                    localStorage.setItem("article_id", $(this).attr("data_id"));
                    localStorage.setItem("column_child", $("#sprot-video-").attr("data_id"));
                    localStorage.setItem("column_child_title", $(this).attr("data_title"));
                    window.location.assign("/Health_article.html");
                });
            },
            "json"
        );
    },
};
$(function() {
    data.article();
    data.hotart();
})