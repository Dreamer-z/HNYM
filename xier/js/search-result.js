var column = localStorage.getItem("column");
var column_child = localStorage.getItem("column_child");
var keyword = localStorage.getItem("keyword");
var nowlay = 1;
if (!column || column == "" || column == undefined) {
    column = $(".nav-first-li").eq(0).attr("data_id");
};
var content = {
    health: function() {
        $.post(data_url, {
                "action": "GetHotAricle",
                "cloumnID": column
            },
            function(json) {
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
            },
            "json"
        );
    },
    loadcont: function() {
        $.ajax({
            type: "post",
            url: data_url,
            data: {
                "action": "GetAricleList",
                "keywords": keyword,
                "pagesize": 8,
                "pid": nowlay
            },
            async: true,
            success: function(json) {
                var data = JSON.parse(json);
                if (data.Result.length == 0) {
                    $(".content-left>h3").css("display", "block");
                    return;
                };
                $("#jq-newsList").html($("#jq-newsListTemplate").tmpl(data.Result));
                $("#jq-newsList li").each(function(i) {
                    $("#jq-newsList>li").eq(i).click(function() {
                        localStorage.setItem("column", $("#jq-newsList").attr("data_col"));
                        localStorage.setItem("article_id", $(this).attr("data_id"));
                        localStorage.setItem("article_title", $(this).attr("data_title"));
                        window.location.assign("/EnterpriseDynamics_article.html?" + $(this).attr("data_id"));
                    });
                });
                $("#jq-newsList").attr("data_col", column);
                $(data.Result).each(function(i) {
                    if (data.Result[i].article_video != null && data.Result[i].article_video != "" && data.Result[i].article_video != "http://39.108.189.233:8001/") {
                        $(".play").eq(i).css("display", "block");
                    };
                });
                $(".page-turner").pagination({
                    currentPage: nowlay, // 当前页数
                    totalPage: data.PageCount, // 总页数
                    isShow: true, // 是否显示首尾页
                    count: data.PageCount > 5 ? 5 : data.PageCount, // 显示个数
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
                            data: {
                                "action": "GetAricleList",
                                "keywords": keyword,
                                "pagesize": 8,
                                "pid": nowlay
                            },
                            success: function(json) {
                                var data = JSON.parse(json);
                                $("#jq-newsList").html($("#jq-newsListTemplate").tmpl(data.Result));
                                $("#jq-newsList").attr("data_col", column);
                                var laynum = data.Result.length / 5;
                                $(data.Result).each(function(i) {
                                    if (data.Result[i].article_video != null && data.Result[i].article_video != "" && data.Result[i].article_video != "http://39.108.189.233:8001/") {
                                        $(".play").eq(i).css("display", "block");
                                    };
                                });
                                $("#jq-newsList li").each(function(i) {
                                    $("#jq-newsList>li").eq(i).click(function() {
                                        localStorage.setItem("column", $("#jq-newsList").attr("data_col"));
                                        localStorage.setItem("article_id", $(this).attr("data_id"));
                                        localStorage.setItem("article_title", $(this).attr("data_title"));
                                        window.location.assign("/EnterpriseDynamics_article.html?" + $(this).attr("data_id"));
                                    });
                                });
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
        });
    },
    getvideo: function() {
        column_child = localStorage.getItem("column_child");
        $.post(data_url, {
                "action": "GetGetVideoAricle",
                "ColumnId": column_child
            }, function(json) {
                if (json.Result == "" || json.Result == null) {
                    $(".vd-b video").remove();
                    return;
                };
                $(".vd-b").attr("data_id", json.Result.id);
                $(".vd-b img").attr("src", json.Result.article_image);
                if (json.Result.article_video != "" && json.Result.article_video != null && json.Result.article_video != "http://39.108.189.233:8001/") {
                    $(".vd-b video").attr("src", json.Result.article_video);
                    document.getElementById("#example_video_1").volume = 0;
                    $(".vd-b img").remove();
                } else {
                    $(".vd-b video").remove();
                };
            },
            "json"
        );
    },
    min: function() {
        $.ajax({
            type: "post",
            url: data_url,
            datatype: "json",
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
    }
}
$(function() {
    content.min();
    content.health();
    content.getvideo();
    content.loadcont();
});