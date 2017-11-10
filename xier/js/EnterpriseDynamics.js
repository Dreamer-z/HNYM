var column = localStorage.getItem("column");
var column_child = localStorage.getItem("column_child");
var column_child_init = localStorage.getItem("column_child_init")
var nowlay = 1;
var init = 0;
var init_val;
var page;
var content = {
    cc: function() {
        $.ajax({
            url: data_url,
            type: "post",
            dataType: "json",
            async: false,
            data: {
                "action": "GetCloumnList",
                "parentid": column
            },
            success: function(json) {
                $(".esli-box").html($("#esliTemplate").tmpl(json.Result));

                function a() {
                    $(".esli").each(function(i) {
                        if (column_child == $(".esli").eq(i).attr("data_id")) {
                            init = 1;
                            init_val = $(".esli").eq(i).html();
                        };
                        if (column_child == undefined || column_child == "" ||
                            column_child == null) {
                            init = 0;
                        };
                        if ($(".esli").eq(i).attr("data_id") == column_child) {
                            $(".esli").eq(i).siblings().removeClass("esli-c");
                            $(".esli").eq(i).addClass("esli-c");
                        }
                    });
                    if (init == 1) {
                        column_child_init = column_child;
                        localStorage.setItem("column_child", column_child);
                        content.loadcont();
                    } else if (init == 0) {
                        column_child = column_child_init;
                        localStorage.setItem("column_child", column_child_init);
                        content.loadcont();
                    };
                };
                a();
                $(".esli").each(function(i) {
                    $(".esli").eq(i).click(function() {
                        localStorage.setItem("column_child", $(this).attr("data_id"));
                        localStorage.setItem("column_child_val", $(this).html());
                        column_child = $(this).attr("data_id");
                        $(this).siblings().removeClass("esli-c");
                        $(this).addClass("esli-c");
                        nowlay = 1;
                        content.loadcont();
                    });
                });
            }
        });
    },
    health: function() {
        $.ajax({
            url: data_url,
            type: "post",
            dataType: "json",
            async: false,
            data: {
                "action": "GetHotAricle",
                "columnId": column_child
            },
            success: function(json) {
                if (json.Result == "" || json.Result == null) {
                    return;
                };
                $(".content-right-newtitle").html($("#content-right-newtitle").tmpl(json.Result));
                $(".content-right-newtitle").attr("data_col", column);
                $(".content-right-newtitle>li").each(function(i) {
                    $(".content-right-newtitle>li").eq(i).click(function() {
                        localStorage.setItem("column", $(".content-right-newtitle").attr("data_col"));
                        localStorage.setItem("article_id", $(this).attr("data_id"));
                        localStorage.setItem("article_title", $(this).attr("data_title"));
                        window.location.assign("/EnterpriseDynamics_article.html?" + $(this).attr("data_id"));
                    });
                });
            }
        });
    },
    loadcont: function() {
        // column_child = localStorage.getItem("column_child");
        var column_child_val = localStorage.getItem("column_child_val");
        if (column_child_val == null || column_child_val == "" || column_child_val == undefined) {
            column_child_val = init_val;
        };
        $.ajax({
            type: "post",
            url: data_url,
            async: false,
            data: {
                "action": "GetAricleList",
                "cloumnID": column_child,
                "pagesize": 6,
                "pid": nowlay
            },
            success: function(json) {
                var data = JSON.parse(json);
                page = data.PageCount;
                $(".esli").each(function(i) {
                    if ($(".esli").eq(i).attr("data_id") == column_child) {
                        localStorage.setItem("column_child", $(".esli").eq(i).attr("data_id"));
                        $(".esli").eq(i).siblings().removeClass("esli-c");
                        $(".esli").eq(i).addClass("esli-c");
                    };
                });
                $(".nowwr").html("&gt" + column_child_val);
                if (column_child == 55 || column_child_val == "自媒体平台") {
                    $(".content").fadeOut(10);
                    $(".page-turner").fadeOut(100);
                    $(".wx-wb").fadeIn(100);
                } else {
                    $(".content").fadeIn(100);
                    $(".page-turner").fadeIn(100);
                    $(".wx-wb").fadeOut(10);
                };
                $("#jq-newsList").html($("#jq-newsListTemplate").tmpl(data.Result));
                $("#jq-newsList li").each(function(i) {
                    $("#jq-newsList>li").eq(i).click(function() {
                        localStorage.setItem("column_child", $("#jq-newsList").attr("data_col"));
                        localStorage.setItem("article_id", $(this).attr("data_id"));
                        localStorage.setItem("article_title", $(this).attr("data_title"));
                        window.location.assign("/EnterpriseDynamics_article.html?" + $(this).attr("data_id"));
                    });
                });
                $("#jq-newsList").attr("data_col", column_child);
                $(data.Result).each(function(i) {
                    if (data.Result[i].article_video != null && data.Result[i].article_video != "" && data.Result[i].article_video != "http://39.108.189.233:8001/") {
                        $(".play").eq(i).css("display", "block");
                    };
                });
                var artic_1 = document.getElementsByClassName("rt-c");
                for (var t = 0; t < artic_1.length; t++) {
                    $clamp(artic_1[t], { clamp: 2 });
                };
                content.change();
                content.getvideo();
                content.health();
            }
        });
    },
    getvideo: function() {
        // column_child = localStorage.getItem("column_child");
        $.ajax({
            url: data_url,
            type: "post",
            dataType: "json",
            async: false,
            data: {
                "action": "GetGetVideoAricle",
                "ColumnId": column_child
            },
            success: function(json) {
                if (json.Result == "" || json.Result == null || json.Result == undefined) {
                    $("#example_video").remove();
                    $(".vd-b img").remove();
                    return;
                };
                $(".vd-b").attr("data_id", json.Result.id);
                if (json.Result.article_image == "" || json.Result.article_image == null || json.Result.article_image == undefined) {
                    $(".vd-b img").remove();
                } else {
                    $(".vd-b img").attr("src", json.Result.article_image);
                };
                if (json.Result.article_video == "" || json.Result.article_video == null || json.Result.article_video == "http://39.108.189.233:8001/" || json.Result.article_video == undefined) {
                    $("#example_video").remove();
                } else {
                    $("#example_video").attr("src", json.Result.article_video);
                    // document.getElementById("example_video").volume = 0.3;
                    $(".vd-b img").remove();
                };
            }
        });
    },
    min: function() {
        $.ajax({
            type: "post",
            url: data_url,
            datatype: "json",
            async: false,
            data: {
                "action": "getBanner",
            },
            success: function(json) {
                var data = JSON.parse(json);
                $(".swiper-wrapper").html($("#minTemplate").tmpl(data.Result));
                var mySwiper = new Swiper('.swiper-container', {
                    direction: 'horizontal',
                    loop: true,
                    speed: 1000,
                    // 如果需要分页器
                    pagination: '.swiper-pagination',
                    autoplay: 3000,
                    autoplayDisableOnInteraction: false,
                });
            }
        })
    },
    change: function() {
        $(".page-turner").pagination({
            currentPage: nowlay, // 当前页数
            totalPage: page, // 总页数
            isShow: true, // 是否显示首尾页
            count: page > 5 ? 5 : page, // 显示个数
            homePageText: "回到首页", // 首页文本
            endPageText: "跳到尾页", // 尾页文本
            prevPageText: "上一页", // 上一页文本
            nextPageText: "下一页", // 下一页文本
            callback: function(current) {
                // 回调,current(当前页数)
                nowlay = current;
                $.ajax({
                    type: "post",
                    url: data_url,
                    async: false,
                    data: {
                        "action": "GetAricleList",
                        "cloumnID": column_child,
                        "pagesize": 6,
                        "pid": nowlay
                    },
                    success: function(json) {
                        var data = JSON.parse(json);
                        $("#jq-newsList").html($("#jq-newsListTemplate").tmpl(data.Result));
                        $("#jq-newsList").attr("data_col", column_child);
                        $("#jq-newsList li").each(function(i) {
                            $("#jq-newsList>li").eq(i).click(function() {
                                localStorage.setItem("column_child", $("#jq-newsList").attr("data_col"));
                                localStorage.setItem("article_id", $(this).attr("data_id"));
                                localStorage.setItem("article_title", $(this).attr("data_title"));
                                window.location.assign("/EnterpriseDynamics_article.html?" + $(this).attr("data_id"));
                            });
                        });
                        var artic_1 = document.getElementsByClassName("rt-c");
                        for (var t = 0; t < artic_1.length; t++) {
                            $clamp(artic_1[t], { clamp: 2 });
                        };
                        $(data.Result).each(function(i) {
                            if (data.Result[i].article_video != null && data.Result[i].article_video != "" && data.Result[i].article_video != "http://39.108.189.233:8001/") {
                                $(".play").eq(i).css("display", "block");
                            };
                        });
                    }
                });
            }
        });
    }
}
$(function() {
    content.cc();
    content.min();
});