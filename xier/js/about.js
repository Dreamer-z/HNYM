var column = localStorage.getItem("column");
var column_child = localStorage.getItem("column_child");
var column_child_init = localStorage.getItem("column_child_init");
var num, dislay;
var nowlay = 1;
var init = 1;
var num;
var aboutfun = {
    changecol: function() {
        function a() {
            $(".aboutli").each(function(i) {
                if (column_child == undefined || column_child == "" ||
                    column_child == null) {
                    init = 0;
                }
                if (column_child == $(".aboutli").eq(i).attr("data_id")) {
                    init = 1;
                } else {
                    init = 0;
                };
            });
            if (init == 1) {
                localStorage.setItem("column_child", column_child);
            };
            if (init == 0) {
                localStorage.setItem("column_child", column_child_init);
            };
        };
        a();

        column_child = localStorage.getItem("column_child");
        aboutfun.list();
        aboutfun.da();
    },
    list: function() {
        column_child = localStorage.getItem("column_child");
        $.ajax({
            url: data_url,
            type: "post",
            dataType: "json",
            async: false,
            data: {
                "action": "GetChildInfo",
                "parentid": column,
                "pagesize": 10,
                "pid": nowlay
            },
            success: function(json) {
                $("#about-list").attr("data_col", column);
                $(json.Result).each(function(i) {
                    $(".aboutli:eq(" + i + ") span").html(json.Result[i].category_name);
                    $(".aboutli").eq(i).attr({ "data_id": json.Result[i].id, "data_title": json.Result[i].category_name });

                    if (column_child == 52) {
                        $("#article-main").css("display", "none");
                        $(".int-box").css("display", "none");
                        $(".art-list").css("display", "none");
                        $("#what-we-do").css("display", "block");
                        $("#map-box").css("display", "block");
                        aboutfun.map();
                    } else if (column_child == 46 || column_child == 47) {
                        $("#article-main").css("display", "none");
                        $(".int-box").css("display", "none");
                        $(".art-list").css("display", "block");
                        $("#what-we-do").css("display", "none");
                        $("#map-box").css("display", "none");
                    } else if (column_child == $(".aboutli").eq(i).attr("data_id")) {
                        $("#article-main").css("display", "block");
                        $(".int-box").css("display", "block");
                        $(".art-list").css("display", "none");
                        $("#what-we-do").css("display", "none");
                        $("#map-box").css("display", "none");
                    };
                });
                $(".nowadd").html("&gt" + localStorage.getItem("column_child_val"));

                $(".aboutli").each(function(i) {
                    if ($(".aboutli").eq(i).attr("data_id") == column_child) {
                        var num = i;
                        $(".aboutli").eq(num).siblings().animate({
                            "padding": "0 30px",
                            "margin-top": "0px",
                            "line-height": "58px"
                        }, 200);
                        $(".aboutli").eq(num).animate({
                            "padding": "0 40px",
                            "margin-top": "-22px",
                            "line-height": "80px"
                        }, 200);
                    };
                });
            }
        });
    },
    da: function() {
        column_child = localStorage.getItem("column_child");
        if (column_child != 52) {
            $.ajax({
                url: data_url,
                type: "post",
                dataType: "json",
                async: false,
                data: {
                    "action": "GetAricleList",
                    "cloumnID": column_child,
                    "pagesize": 9,
                    "pid": nowlay
                },
                success: function(json) {
                    if (json.PageCount >= 6) {
                        dislay = 5;
                    } else {
                        dislay = json.PageCount;
                    };
                    if (column_child == 46 || column_child == 47) {
                        $(".al-ul").html($("#alulTemplate").tmpl(json.Result));
                        var artic_1 = document.getElementsByClassName("al-li-cont");
                        for (var t = 0; t < artic_1.length; t++) {
                            $clamp(artic_1[t], { clamp: 8 });
                        };
                        $(".al-li").click(function() {
                            localStorage.setItem("article_id", $(this).attr("data_id"));
                            localStorage.setItem("article_title", $(this).attr("data_title"));
                            if ($(this).attr("data_time")) {
                                localStorage.setItem("article_time", $(this).attr("data_time"));
                            };
                            window.location.assign("/about_article.html");
                        });
                    } else {
                        $(".art-ul").html($("#contTemplate").tmpl(json.Result));
                    };
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
                            $.ajax({
                                url: data_url,
                                type: "post",
                                dataType: "json",
                                async: false,
                                data: {
                                    "action": "GetAricleList",
                                    "cloumnID": column_child,
                                    "pagesize": 9,
                                    "pid": nowlay
                                },
                                success: function(json) {
                                    $(document).scrollTop(500);
                                    if (column_child == 46 || column_child == 47) {
                                        $(".al-ul").html($("#alulTemplate").tmpl(json.Result));
                                        var artic_1 = document.getElementsByClassName("al-li-cont");
                                        for (var t = 0; t < artic_1.length; t++) {
                                            $clamp(artic_1[t], { clamp: 8 });
                                        };
                                        $(".al-li").click(function() {
                                            localStorage.setItem("article_id", $(this).attr("data_id"));
                                            localStorage.setItem("article_title", $(this).attr("data_title"));
                                            if ($(this).attr("data_time")) {
                                                localStorage.setItem("article_time", $(this).attr("data_time"));
                                            };
                                            window.location.assign("/about_article.html");
                                        });
                                    } else {
                                        $(".art-ul").html($("#contTemplate").tmpl(json.Result));
                                    };
                                }
                            });
                        }
                    });
                }
            });
        };
    },
    change: function() {
        $(".aboutli").click(function() {
            localStorage.setItem("column_child", $(this).attr("data_id"));
            localStorage.setItem("column_child_val", $(this).attr("data_title"));
            aboutfun.list();
            aboutfun.da();
        });
    },
    map: function() {
        //--------------------- 百度地图API功能
        var map = new BMap.Map("map");
        var point = new BMap.Point(112.979501, 28.099255);
        map.centerAndZoom(point, 18);
        // 创建地址解析器实例
        var myGeo = new BMap.Geocoder();
        // map.enableScrollWheelZoom(); //启用滚轮放大缩小，默认禁用
        map.enableContinuousZoom(); //启用地图惯性拖拽，默认禁用
        // 将地址解析结果显示在地图上,并调整地图视野
        myGeo.getPoint("湖南省长沙市天心区书院路9号保利国际广场B1栋2921", function(point) {
            if (point) {
                map.centerAndZoom(point, 16);
                var marker = new BMap.Marker(point); // 创建标注
                map.addOverlay(marker); // 将标注添加到地图中
                marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
            } else {
                alert("您选择地址没有解析到结果!");
            }
        }, "长沙市");
        //--------------------- 百度地图API功能
    },
    td: function() {
        var op = "left";
        num = $(".td-center").index();
        var d;

        $(".td-lr").css("cursor", "pointer");
        d = $(".td-center").index();
        $(".td-li:eq(" + d + ")").css({ "position": "absolute", "top": "0", "left": 50 + "%", "margin-left": "-400px", "z-index": "999", "transfrom": "scale(1)" });
        $(".td-li:gt(" + d + ")").each(function(i) {
            $(".td-li:gt(" + d + ")").eq(i).css({ "position": "absolute", "top": "0", "left": (50 + (i + 1) * 50) + "%", "margin-left": "-400px", "z-index": 900 - (i + 1) * 100, "transfrom": "scale(" + 1 - (i + 1) * 0.1 + ")" });
        });
        $(".td-li:lt(" + d + ")").each(function(i) {
            $(".td-li:lt(" + d + ")").eq(i).css({ "position": "absolute", "top": "0", "left": (50 - (d - i) * 50) + "%", "margin-left": "-400px", "z-index": 900 - (d - i) * 100, "transfrom": "scale(" + 1 - (d - i) * 0.1 + ")" });
        });

        function tdchange() {
            if (op == "left") {
                if (num == 1) {
                    num = $(".td-li").length - 1;
                    $(".td-li").each(function(i) {
                        $(".td-li").eq(i).removeClass("td-center");
                        $(".td-li").eq(num).addClass("td-center");
                    });
                    $(".td-li:eq(" + num + ")").css({ "position": "absolute", "top": "0", "left": 50 + "%", "margin-left": "-400px", "z-index": "999", "transfrom": "scale(1)" });
                    $(".td-li:gt(" + num + ")").each(function(i) {
                        $(".td-li:gt(" + num + ")").eq(i).css({ "position": "absolute", "top": "0", "left": (50 + (i + 1) * 50) + "%", "margin-left": "-400px", "z-index": 900 - (i + 1) * 100, "transfrom": "scale(" + 1 - (i + 1) * 0.1 + ")" });
                    });
                    $(".td-li:lt(" + num + ")").each(function(i) {
                        $(".td-li:lt(" + num + ")").eq(i).css({ "position": "absolute", "top": "0", "left": (50 - (num - i) * 50) + "%", "margin-left": "-400px", "z-index": 900 - (num - i) * 100, "transfrom": "scale(" + 1 - (num - i) * 0.1 + ")" });
                    });
                };
                num--;
            };
            if (op == "right") {
                num++;
                if (num == ($(".td-li").length - 1)) {
                    num = 0;
                    $(".td-li").each(function(i) {
                        $(".td-li").eq(i).removeClass("td-center");
                        $(".td-li").eq(num).addClass("td-center");
                    });
                    $(".td-li:eq(" + num + ")").css({ "position": "absolute", "top": "0", "left": 50 + "%", "margin-left": "-400px", "z-index": "999", "transfrom": "scale(1)" });
                    $(".td-li:gt(" + num + ")").each(function(i) {
                        $(".td-li:gt(" + num + ")").eq(i).css({ "position": "absolute", "top": "0", "left": (50 + (i + 1) * 50) + "%", "margin-left": "-400px", "z-index": 900 - (i + 1) * 100, "transfrom": "scale(" + 1 - (i + 1) * 0.1 + ")" });
                    });
                    $(".td-li:lt(" + num + ")").each(function(i) {
                        $(".td-li:lt(" + num + ")").eq(i).css({ "position": "absolute", "top": "0", "left": (50 - (num - i) * 50) + "%", "margin-left": "-400px", "z-index": 900 - (num - i) * 100, "transfrom": "scale(" + 1 - (num - i) * 0.1 + ")" });
                    });
                    num++;
                };

            };
            d = num;
            $(".td-li").each(function(i) {
                $(".td-li").eq(i).removeClass("td-center");
                $(".td-li").eq(d).addClass("td-center");
            });
            $(".td-li:eq(" + d + ")").animate({ "position": "absolute", "top": "0", "left": 50 + "%", "margin-left": "-400px", "z-index": "999", "transfrom": "scale(1)" }, 600);
            $(".td-li:gt(" + d + ")").each(function(i) {
                $(".td-li:gt(" + d + ")").eq(i).animate({ "position": "absolute", "top": "0", "left": (50 + (i + 1) * 50) + "%", "margin-left": "-400px", "z-index": 900 - (i + 1) * 100, "transfrom": "scale(" + 1 - (i + 1) * 0.1 + ")" }, 600);
            });
            $(".td-li:lt(" + d + ")").each(function(i) {
                $(".td-li:lt(" + d + ")").eq(i).animate({ "position": "absolute", "top": "0", "left": (50 - (d - i) * 50) + "%", "margin-left": "-400px", "z-index": 900 - (d - i) * 100, "transfrom": "scale(" + 1 - (d - i) * 0.1 + ")" }, 600);
            });
        };
        $(".td-l").click(function() {
            op = "left";
            tdchange();
        });
        $(".td-r").click(function() {
            op = "right";
            tdchange();
        });

        function zd() {
            var time = setInterval(function() {
                op = "right";
                tdchange();
            }, 5000);
            $(".td-lr").mouseenter(function() {
                clearInterval(time);
            });
            $(".td-lr").mouseout(function() {
                time = setInterval(function() {
                    op = "right";
                    tdchange();
                }, 5000);
            });
        };
        zd();
    }
};

$(function() {
    aboutfun.changecol();
    aboutfun.change();
    aboutfun.td();

});