var column = localStorage.getItem("column");
var column_child = localStorage.getItem("column_child");
var column_val = localStorage.getItem("column_val");
var column_child_val = localStorage.getItem("column_child_val");
var column_url = localStorage.getItem("column_url");
var column_child_url = localStorage.getItem("column_child_url");
var child2_column = localStorage.getItem("child2_column");
var child2_column_val = localStorage.getItem("child2_column_val");
var child2_column_init = localStorage.getItem("child2_column_init");
var child2_column_val_init = localStorage.getItem("child2_column_val_init");
var nowlay = 1;
var lay, dislay, init;
var data = {
    childlist: function() {
        child2_column = localStorage.getItem("child2_column");
        $.ajax({
            type: "post",
            url: data_url,
            dataType: "json",
            data: {
                "action": "GetAricleList",
                "cloumnID": child2_column,
                "pagesize": 8,
                "pid": nowlay
            },
            async: false,
            success: function(json) {
                function a() {
                    lay = Number(json.PageCount);
                    return b(lay)
                };
                a();

                function b() {
                    data.ad();
                    data.hotarticle();
                    data.oneart();
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
                    $("#lastli").html("&gt" + child2_column_val)
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
                            window.location.assign("/balance_article.html");
                        });
                    });
                    $(".ba-l-li").each(function(i) {
                        if ($(".ba-l-li").eq(i).children("a").attr("data_id") == child2_column) {
                            $(".ba-l-li").eq(i).siblings().removeClass("thr-c");
                            $(".ba-l-li").eq(i).addClass("thr-c");
                        }
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
                                    "cloumnID": child2_column,
                                    "pagesize": 8,
                                    "pid": nowlay
                                },
                                function(json) {
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
                                            window.location.assign("/balance_article.html");
                                        });
                                    });
                                    $(".ba-l-li").each(function(i) {
                                        if ($(".ba-l-li").eq(i).children("a").attr("data_id") == child2_column) {
                                            $(".ba-l-li").eq(i).siblings().removeClass("thr-c");
                                            $(".ba-l-li").eq(i).addClass("thr-c");
                                        }
                                    });
                                    $(".ba-art-li").each(function(i) {
                                        $(".ba-art-li").eq(i).dotdotdot();
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
    cli: function() {
        child2_column = localStorage.getItem("child2_column");
        $.post(data_url, {
                "action": "GetCloumnList",
                "parentid": column_child
            },
            function(json) {
                $(".ba-l-ui").html($("#childtmlp").tmpl(json.Result));
                var ind;
                $(".ba-l-li").each(function(i) {
                    if (child2_column == "" || child2_column == undefined || !child2_column || child2_column == null) {
                        // localStorage.setItem("child2_column", child2_column_init);
                        // localStorage.setItem("child2_column_val", child2_column_val_init);
                        // data.childlist();
                        init = 0;
                    } else if (child2_column == $(".ba-l-li").eq(i).children("a").attr("data_id")) {
                        // localStorage.setItem("child2_column", child2_column);
                        // localStorage.setItem("child2_column_val", child2_column_val);
                        // data.childlist();
                        init = 1;
                    };
                });
                if (init == 0) {
                    localStorage.setItem("child2_column", child2_column_init);
                    localStorage.setItem("child2_column_val", child2_column_val_init);
                    data.childlist();
                };
                if (init == 1) {
                    localStorage.setItem("child2_column", child2_column);
                    localStorage.setItem("child2_column_val", child2_column_val);
                    data.childlist();
                };
                $(".ba-l-li").click(function() {
                    localStorage.setItem("child2_column", $(this).children("a").attr("data_id"));
                    if (child2_column == $(this).children("a").attr("data_id")) {
                        $(this).siblings().removeClass("thr-c");
                        $(this).addClass("thr-c");
                        nowlay = 1;
                        data.childlist();
                    };
                });
                setTimeout(function() {
                    localStorage.setItem("child2_column", "");
                }, 20);
            },
            "json"
        );
    },
    hotarticle: function() {
        $.post(data_url, {
                "action": "GetHotAricle",
                "columnId": child2_column
            },
            function(json) {
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
                        window.location.assign("/balance_article.html");
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
                "ColumnId": child2_column
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
                "ColumnId": child2_column
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
    data.cli();
})