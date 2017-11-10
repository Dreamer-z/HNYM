var column = localStorage.getItem("column");
var column_child = localStorage.getItem("column_child");
var column_val = localStorage.getItem("column_val");
var column_child_val = localStorage.getItem("column_child_val");
var column_url = localStorage.getItem("column_url");
var column_child_url = localStorage.getItem("column_child_url");
var nowlay = 1;
var lay, dislay;
var data = {
    columnchildlist: function() {
        $.ajax({
            type: "post",
            url: data_url,
            dataType: "json",
            data: {
                "action": "GetAricleList",
                "cloumnID": column_child,
                "pagesize": 8,
                "pid": nowlay
            },
            async: false,
            success: function(json) {
                if (json.Result == "" || json.Result == null) {
                    return;
                };

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
                    $("#firstlist").html("首页");
                    $("#firstlist").attr("href", "/index.html");
                    $("#secendlist").html(column_val);
                    $("#secendlist").attr("href", column_url);
                    $("#nowlist").html("&gt" + column_child_val);
                    $("#balance-article-left").html($("#balance-article-lefttml").tmpl(json.Result));
                    var artic_1 = document.getElementsByClassName("ba-art-li");
                    for (var t = 0; t < artic_1.length; t++) {
                        $clamp(artic_1[t], { clamp: 2 });
                    };
                    $(json.Result).each(function(i) {
                        if (json.Result[i].article_video != null && json.Result[i].article_video != "" && json.Result[i].article_video != "http://39.108.189.233:8001/") {
                            $(".play").eq(i).css("display", "block");
                        };
                    });
                    $("#balance-article-left>li").each(function(i) {
                        $("#balance-article-left>li").eq(i).click(function() {
                            localStorage.setItem("article_id", $(this).attr("data_id"));
                            localStorage.setItem("article_title", $(this).attr("data_title"));
                            if ($(this).attr("data_time")) {
                                localStorage.setItem("article_time", $(this).attr("data_time"));
                            };
                            window.location.assign("/Health_article.html");
                        });
                    });
                    $(".page-turner").pagination({
                        currentPage: nowlay, // 当前页数
                        totalPage: lay, // 总页数
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
                                    if (json.Result == "" || json.Result == null) {
                                        return;
                                    };
                                    $("#balance-article-left").html($("#balance-article-lefttml").tmpl(json.Result));
                                    var artic_1 = document.getElementsByClassName("balance-article-left-content");
                                    for (var t = 0; t < artic_1.length; t++) {
                                        $clamp(artic_1[t], { clamp: 2 });
                                    };
                                    $(json.Result).each(function(i) {
                                        if (json.Result[i].article_video != null && json.Result[i].article_video != "" && json.Result[i].article_video != "http://39.108.189.233:8001/") {
                                            $(".play").eq(i).css("display", "block");
                                        };
                                    });
                                    $("#balance-article-left>li").each(function(i) {
                                        $("#balance-article-left>li").eq(i).click(function() {
                                            localStorage.setItem("article_id", $(this).attr("data_id"));
                                            localStorage.setItem("article_title", $(this).attr("data_title"));
                                            if ($(this).attr("data_time")) {
                                                localStorage.setItem("article_time", $(this).attr("data_time"));
                                            };
                                            window.location.assign("/Health_article.html");
                                        });
                                    });
                                },
                                "json"
                            );
                        }
                    });
                };
            }
        });
    },
    hotarticle: function() {
        $.post(data_url, {
                "action": "GetHotAricle",
                "columnId": column_child
            },
            function(json) {
                if (json.Result == "" || json.Result == null) {
                    return;
                };
                $("#hot-articleli").html($("#hotarticletmlp").tmpl(json.Result));
                // $("#balance-article-right-two ul").html($("#kxarticletmlp").tmpl(json.Result));
                $("#hot-articleli").attr("column_child", column_child);
                $("#hot-articleli>li").each(function(i) {
                    $("#hot-articleli>li").eq(i).click(function() {
                        localStorage.setItem("article_id", $(this).attr("data_id"));
                        localStorage.setItem("article_title", $(this).attr("data_title"));
                        if ($(this).attr("data_time")) {
                            localStorage.setItem("article_time", $(this).attr("data_time"));
                        };
                        window.location.assign("/Health_article.html");
                    });
                });
            },
            "json"
        );
    },
    ad: function() {
        $.ajax({
            url: data_url,
            type: "post",
            dataType: "json",
            data: {
                "action": "GetCloumnAd",
                "ColumnId": column_child
            },
            async: false,
            success: function(json) {
                if (json.Result == "" || json.Result == null) {
                    return;
                };
                $("#balance-article-right-three>a").attr("src", json.Result.ad_url);
                $("#balance-article-right-three>a>img").attr("src", json.Result.ad_imgurl);
                $("#balance-article-right-three>a>img").attr("ad_id", json.Result.id);
                $("#balance-article-right-three>a>img").attr("title", json.Result.ad_name);
            }
        })
    },
    oneart: function() {
        $.ajax({
            url: data_url,
            type: "post",
            dataType: "json",
            data: {
                "action": "GetGetVideoAricle",
                "ColumnId": column_child
            },
            async: false,
            success: function(json) {
                if (json.Result == "" || json.Result == null) {
                    return;
                };
                $("#balance-article-right-one").attr("data_id", json.Result.id);
                $("#balance-article-right-one img").attr("src", json.Result.article_image);
                if (json.Result.article_video != "" && json.Result.article_video != null && json.Result.article_video != "http://39.108.189.233:8001/") {
                    $("#balance-article-right-one video").attr("src", json.Result.article_video);
                    $("#balance-article-right-one img").remove();
                    document.getElementById("example_video").volume = 0.3;
                    // $(".balance-complication-right .play").click(function() {
                    //     $(".balance-complication-right .play").css("display", "none");
                    //     $("#example_video_1").get(0).play();
                    //     $("#example_video_1").click(function() {
                    //         $(".balance-complication-right .play").css("display", "block");
                    //         $("#example_video_1").get(0).pause();
                    //     })
                    // })
                } else {
                    $("#balance-article-right-one video").remove();
                };
            }
        })
    }
};
$(function() {
    data.columnchildlist();
    data.hotarticle();
    data.ad();
    data.oneart();
})