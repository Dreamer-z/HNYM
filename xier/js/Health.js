var column = localStorage.getItem("column");
var column_child;
var data = {
    // HotAricle: function() {
    //     $.ajax({
    //         type: "post",
    //         url: data_url,
    //         data: {
    //             "action": "GetHotAricle",
    //             "cloumnID": 24,
    //             "pagesize": 4
    //         },
    //         async: true,
    //         success: function(json) {
    //             var data = JSON.parse(json);
    //             $("#box-oneList").html($("#box-oneListTemplate").tmpl(data.Result));
    //             $("#box-oneList li").each(function(i) {
    //                 $("#box-oneList li").eq(i).click(function() {
    //                     localStorage.setItem("article_id", $(this).attr("data_id"));
    //                     localStorage.setItem("article_title", $(this).attr("data_title"));
    //                     if ($(this).attr("data_time") != "" || $(this).attr("data_time") != undefined) {
    //                         localStorage.setItem("article_time", $(this).attr("data_time"));
    //                     };
    //                     window.location.assign("/Health_article.html");
    //                 })
    //             })
    //         }
    //     })
    // },
    ChildInfo: function() {
        $.post(
            data_url, {
                "action": "GetChildInfo",
                "parentid": column,
                "pagesize": 4,
                "pid": 1
            },
            function(json) {
                // var foodlast, moodlast, healthlast, doctorlast;
                var sprot, food, mood, family, health, doctor, academic;
                $(".titele").each(function(i) {
                    $(".titele:eq(" + i + ") h5").html(json.Result[i].category_name);
                    $(".titele:eq(" + i + ") a").attr("colid", json.Result[i].id);
                });
                $(json.Result).each(function(i) {
                    if (json.Result[i].category_name == $(".sprot-health .titele h5").html()) {
                        sprot = json.Result[i].AricleList;
                        $(".sprot-health").attr("data_column", json.Result[i].category_name);
                        $(".sprot-health").attr("data_columnid", json.Result[i].id);
                    } else if (json.Result[i].category_name == $(".food .titele h5").html()) {
                        food = json.Result[i].AricleList;
                        $(".food").attr("data_column", json.Result[i].category_name);
                        $(".food").attr("data_columnid", json.Result[i].id);
                        // if (column_child == "" || column_child == undefined) {
                        //     localStorage.setItem("column_child", json.Result[i].id);
                        // };
                        // if (food.lenth > 0 && food.lenth >= 3) {
                        //     foodlast = 2;
                        // } else if (food.lenth > 0 && food.lenth < 3) {
                        //     foodlast = food.lenth - 1;
                        // } else {
                        //     foodlast = 0;
                        // };
                    } else if (json.Result[i].category_name == $(".mood .titele h5").html()) {
                        mood = json.Result[i].AricleList;
                        $(".mood").attr("data_column", json.Result[i].category_name);
                        $(".mood").attr("data_columnid", json.Result[i].id);
                        // if (mood.lenth > 0 && mood.lenth >= 5) {
                        //     moodlast = 4;
                        // } else if (mood.lenth > 0 && mood.lenth < 5) {
                        //     moodlast = mood.lenth - 1;
                        // } else {
                        //     moodlast = 0;
                        // };
                    } else if (json.Result[i].category_name == $(".family .titele h5").html()) {
                        family = json.Result[i].AricleList;
                        $(".family").attr("data_column", json.Result[i].category_name);
                        $(".family").attr("data_columnid", json.Result[i].id);
                    } else if (json.Result[i].category_name == $(".health .titele h5").html()) {
                        health = json.Result[i].AricleList;
                        $(".health").attr("data_column", json.Result[i].category_name);
                        $(".health").attr("data_columnid", json.Result[i].id);
                        // if (health.lenth > 0 && health.lenth >= 3) {
                        //     healthlast = 2;
                        // } else if (health.lenth > 0 && health.lenth < 3) {
                        //     healthlast = health.lenth - 1;
                        // } else {
                        //     healthlast = 0;
                        // };
                    } else if (json.Result[i].category_name == $(".doctor .titele h5").html()) {
                        doctor = json.Result[i].AricleList;
                        $(".doctor").attr("data_column", json.Result[i].category_name);
                        $(".doctor").attr("data_columnid", json.Result[i].id);
                        $(".doctor").css("display", "none");
                        // if (doctor.lenth > 0 && doctor.lenth >= 5) {
                        //     doctorlast = 4;
                        // } else if (doctor.lenth > 0 && doctor.lenth < 5) {
                        //     doctorlast = doctor.lenth - 1;
                        // } else {
                        //     doctorlast = 0;
                        // };
                    } else if (json.Result[i].category_name == $(".academic .titele h5").html()) {
                        academic = json.Result[i].AricleList;
                        $(".academic").attr("data_column", json.Result[i].category_name);
                        $(".academic").attr("data_columnid", json.Result[i].id);
                    }
                });
                $(".sprot").html($("#sprotTemplate").tmpl(sprot));

                $(sprot).each(function(i) {
                    if (sprot[i].article_video != "" && sprot[i].article_video != null && sprot[i].article_video != "http://39.108.189.233:8001/") {
                        $(".sprot .play").eq(i).css("display", "block");
                    };
                });

                $(".food-cont").html($("#food-contTemplate").tmpl(food));
                $(food).each(function(i) {
                    if (food[i].article_video != "" && food[i].article_video != null && food[i].article_video != "http://39.108.189.233:8001/") {
                        $(".food .balance-complication-left:(" + i + ") .play").css("display", "block");
                    };
                });

                $(".mood-cont").html($("#mood-contTemplate").tmpl(mood));
                $(mood).each(function(i) {
                    if (mood[i].article_video != "" && mood[i].article_video != null && mood[i].article_video != "http://39.108.189.233:8001/") {
                        $(".mood-cont .balance-complication-left:eq(" + i + ") .play").css("display", "block");
                    };
                });

                $(".family-cont").html($("#family-contTemplate").tmpl(family));
                $(family).each(function(i) {
                    if (family[i].article_video != "" && family[i].article_video != null && family[i].article_video != "http://39.108.189.233:8001/") {
                        $(".family-cont .play").eq(i).css("display", "block");
                    };
                });

                $(".health-cont").html($("#health-contTemplate").tmpl(health));
                $(health).each(function(i) {
                    if (health[i].article_video != "" && health[i].article_video != null && health[i].article_video != "http://39.108.189.233:8001/") {
                        $(".health .balance-complication-left:(" + i + ") .play").css("display", "block");
                    };
                });

                $(".doctor .doctor-cont").html($("#doctor-contTemplate").tmpl(doctor));
                $(doctor).each(function(i) {
                    if (doctor[i].article_video != "" && doctor[i].article_video != null && doctor[i].article_video != "http://39.108.189.233:8001/") {
                        $(".doctor .doctor-cont .balance-complication-left:(" + i + ") .play").css("display", "block");
                    };
                });

                $(".academic .doctor-cont").html($("#doctor-contTemplate").tmpl(academic));
                $(academic).each(function(i) {
                    if (academic[i].article_video != "" && academic[i].article_video != null && academic[i].article_video != "http://39.108.189.233:8001/") {
                        $(".academic .doctor-cont .balance-complication-left:(" + i + ") .play").css("display", "block");
                    };
                });
                $(".titele").each(function(i) {
                    $(".titele:eq(" + i + ")>a").click(function() {
                        localStorage.setItem("column_child", $(this).attr("colid"));
                        window.location.assign("/Health_column.html");
                    });
                });
                var artic_2 = document.getElementsByClassName("bt-rc");
                for (var i = 0; i < artic_2.length; i++) {
                    $clamp(artic_2[i], { clamp: 2 });
                };
                var artic_3 = document.getElementsByClassName("ba-cc");
                for (var i = 0; i < artic_3.length; i++) {
                    $clamp(artic_3[i], { clamp: 4 });
                };
                $(".sprot>li").each(function(i) {
                    $(".sprot>li").eq(i).click(function() {
                        localStorage.setItem("column_child_val", $(".sprot-health").attr("data_column"));
                        localStorage.setItem("column_child", $(".sprot-health").attr("data_columnid"));
                        localStorage.setItem("article_id", $(this).attr("data_id"));
                        localStorage.setItem("article_title", $(this).attr("data_title"));
                        if ($(this).attr("data_time") != "" || $(this).attr("data_time") != undefined) {
                            localStorage.setItem("article_time", $(this).attr("data_time"));
                        };
                        window.location.assign("/Health_article.html");
                    })
                });
                $(".food-cont>.balance-complication-left").each(function(i) {
                    $(".food-cont>.balance-complication-left").click(function() {
                        localStorage.setItem("column_child_val", $(".food").attr("data_column"));
                        localStorage.setItem("column_child_", $(".food").attr("data_columnid"));
                        localStorage.setItem("article_id", $(this).attr("data_id"));
                        localStorage.setItem("article_title", $(this).attr("data_title"));
                        if ($(this).attr("data_time") != "" || $(this).attr("data_time") != undefined) {
                            localStorage.setItem("article_time", $(this).attr("data_time"));
                        };
                        window.location.assign("/Health_article.html");
                    });
                });
                $(".food .balance-complication-right").click(function() {
                    localStorage.setItem("column_child_val", $(".food").attr("data_column"));
                    localStorage.setItem("column_child", $(".food").attr("data_columnid"));
                    localStorage.setItem("article_id", $(this).attr("data_id"));
                    localStorage.setItem("article_title", $(this).attr("data_title"));
                    if ($(this).attr("data_time") != "" || $(this).attr("data_time") != undefined) {
                        localStorage.setItem("article_time", $(this).attr("data_time"));
                    };
                    window.location.assign("/Health_article.html");
                });
                $(".mood-cont>li").each(function(i) {
                    $(".mood-cont>li").eq(i).click(function() {
                        localStorage.setItem("column_child_val", $(".mood").attr("data_column"));
                        localStorage.setItem("column_child", $(".mood").attr("data_columnid"));
                        localStorage.setItem("article_id", $(this).attr("data_id"));
                        localStorage.setItem("article_title", $(this).attr("data_title"));
                        if ($(this).attr("data_time") != "" || $(this).attr("data_time") != undefined) {
                            localStorage.setItem("article_time", $(this).attr("data_time"));
                        };
                        window.location.assign("/Health_article.html");
                    });
                });
                $(".mood .content-tow-right").click(function() {
                    localStorage.setItem("column_child_val", $(".mood").attr("data_column"));
                    localStorage.setItem("column_child", $(".mood").attr("data_columnid"));
                    localStorage.setItem("article_id", $(this).attr("data_id"));
                    localStorage.setItem("article_title", $(this).attr("data_title"));
                    if ($(this).attr("data_time") != "" || $(this).attr("data_time") != undefined) {
                        localStorage.setItem("article_time", $(this).attr("data_time"));
                    };
                    window.location.assign("/Health_article.html");
                });
                $(".family-cont>li").each(function(i) {
                    $(".family-cont>li").eq(i).click(function() {
                        localStorage.setItem("column_child_val", $(".family").attr("data_column"));
                        localStorage.setItem("column_child", $(".family").attr("data_columnid"));
                        localStorage.setItem("article_id", $(this).attr("data_id"));
                        localStorage.setItem("article_title", $(this).attr("data_title"));
                        if ($(this).attr("data_time") != "" || $(this).attr("data_time") != undefined) {
                            localStorage.setItem("article_time", $(this).attr("data_time"));
                        };
                        window.location.assign("/Health_article.html");
                    });
                });
                $(".health-cont .balance-complication-left").each(function(i) {
                    $(".health-cont .balance-complication-left").click(function() {
                        localStorage.setItem("column_child_val", $(".health").attr("data_column"));
                        localStorage.setItem("column_child", $(".health").attr("data_columnid"));
                        localStorage.setItem("article_id", $(this).attr("data_id"));
                        localStorage.setItem("article_title", $(this).attr("data_title"));
                        if ($(this).attr("data_time") != "" || $(this).attr("data_time") != undefined) {
                            localStorage.setItem("article_time", $(this).attr("data_time"));
                        };
                        window.location.assign("/Health_article.html");
                    });
                });
                $(".health .balance-complication-right").click(function() {
                    localStorage.setItem("column_child_val", $(".health").attr("data_column"));
                    localStorage.setItem("column_child", $(".health").attr("data_columnid"));
                    localStorage.setItem("article_id", $(this).attr("data_id"));
                    localStorage.setItem("article_title", $(this).attr("data_title"));
                    if ($(this).attr("data_time") != "" || $(this).attr("data_time") != undefined) {
                        localStorage.setItem("article_time", $(this).attr("data_time"));
                    };
                    window.location.assign("/Health_article.html");
                });
                $(".doctor .doctor-cont>li").each(function(i) {
                    $(".doctor .doctor-cont>li").eq(i).click(function() {
                        localStorage.setItem("column_child_val", $(".doctor").attr("data_column"));
                        localStorage.setItem("column_child", $(".doctor").attr("data_columnid"));
                        localStorage.setItem("article_id", $(this).attr("data_id"));
                        localStorage.setItem("article_title", $(this).attr("data_title"));
                        if ($(this).attr("data_time") != "" || $(this).attr("data_time") != undefined) {
                            localStorage.setItem("article_time", $(this).attr("data_time"));
                        };
                        window.location.assign("/Health_article.html");
                    });
                });
                $(".doctor .content-tow-right").click(function() {
                    localStorage.setItem("column_child_val", $(".doctor").attr("data_column"));
                    localStorage.setItem("column_child", $(".doctor").attr("data_columnid"));
                    localStorage.setItem("article_id", $(this).attr("data_id"));
                    localStorage.setItem("article_title", $(this).attr("data_title"));
                    if ($(this).attr("data_time") != "" || $(this).attr("data_time") != undefined) {
                        localStorage.setItem("article_time", $(this).attr("data_time"));
                    };
                    window.location.assign("/Health_article.html");
                });

                $(".academic .doctor-cont>li").each(function(i) {
                    $(".academic .doctor-cont>li").eq(i).click(function() {
                        localStorage.setItem("column_child_val", $(".academic").attr("data_column"));
                        localStorage.setItem("column_child", $(".academic").attr("data_columnid"));
                        localStorage.setItem("article_id", $(this).attr("data_id"));
                        localStorage.setItem("article_title", $(this).attr("data_title"));
                        if ($(this).attr("data_time") != "" || $(this).attr("data_time") != undefined) {
                            localStorage.setItem("article_time", $(this).attr("data_time"));
                        };
                        window.location.assign("/Health_article.html");
                    });
                });

                $(".academic .content-tow-right").click(function() {
                    localStorage.setItem("column_child_val", $(".academic").attr("data_column"));
                    localStorage.setItem("column_child", $(".academic").attr("data_columnid"));
                    localStorage.setItem("article_id", $(this).attr("data_id"));
                    localStorage.setItem("article_title", $(this).attr("data_title"));
                    if ($(this).attr("data_time") != "" || $(this).attr("data_time") != undefined) {
                        localStorage.setItem("article_time", $(this).attr("data_time"));
                    };
                    window.location.assign("/Health_article.html");
                });
                if (!food[2] || food[2] == "") {
                    $(".food .balance-complication-right img").css("display", "none");
                    // return;
                } else {
                    if (food[2].article_image == "" || food[2].article_image == null || food[2].article_image == undefined || food[2].article_image == "http://admin.tangph.com/") {
                        $(".food .balance-complication-right img").css("display", "none");
                    } else {
                        $(".food .balance-complication-right img").attr("src", food[2].article_image);
                    }

                    $(".food .balance-complication-right h4").html(food[2].article_title);
                    $(".food .balance-complication-right").attr({ "data_id": food[2].id, "data_title": food[2].article_title });
                    if (food[2].article_video != "" && food[2].article_video != null && food[2].article_video != "http://39.108.189.233:8001/") {
                        $(".food .balance-complication-right .play").css("display", "block");
                    };
                };
                if (!mood[4] || mood[4] == "") {
                    $(".mood .content-tow-right img").css("display", "none");
                    // return;
                } else {
                    if (mood[4].article_image == "" || mood[4].article_image == null || mood[4].article_image == undefined || mood[4].article_image == "http://admin.tangph.com/") {
                        $(".mood .content-tow-right img").css("display", "none");
                    } else {
                        $(".mood .content-tow-right img").attr("src", mood[4].article_image);
                    };
                    $(".mood .content-tow-right .threeTitele").html(mood[4].article_title);
                    $(".mood .content-tow-right").attr({ "data_id": mood[4].id, "data_title": mood[4].article_title });
                    if (mood[4].article_video != "" && mood[4].article_video != null && mood[4].article_video != "http://39.108.189.233:8001/") {
                        $(".mood .content-tow-right .play").css("display", "block");
                    };
                };
                if (!health[2] || health[2] == "") {
                    $(".health .balance-complication-right img").css("display", "none");
                    // return;
                } else {
                    if (health[2].article_image == "" || health[2].article_image == null || health[2].article_image == undefined || health[2].article_image == "http://admin.tangph.com/") {
                        $(".health .balance-complication-right img").css("display", "none");
                    } else {
                        $(".health .balance-complication-right img").attr("src", health[2].article_image);
                    };

                    $(".health .balance-complication-right h4").html(health[2].article_title);
                    $(".health .balance-complication-right").attr({ "data_id": health[2].id, "data_title": health[2].article_title });
                    if (health[2].article_video != "" && health[2].article_video != null && health[2].article_video != "http://39.108.189.233:8001/") {
                        $(".health .balance-complication-right .play").css("display", "block");
                    };
                };
                // if (!doctor[4] || doctor[4] == "") {
                //     return;
                // } else {
                //     if (doctor[4].article_image == ""|| doctor[4].article_image == null || doctor[4].article_image == undefined || doctor[4].article_image == "http://admin.tangph.com/") {
                //         (".doctor .content-tow-right img").css("display", "none");
                //     } else {
                //         $(".doctor .content-tow-right img").attr("src", doctor[4].article_image);
                //     };
                //     $(".doctor .content-tow-right .threeTitele").html(doctor[4].article_title);
                //     $(".doctor .content-tow-right").attr({ "data_id": doctor[4].id, "data_title": doctor[4].article_title });
                //     if (doctor[4].article_video != "" && doctor[4].article_video != null && doctor[4].article_video != "http://39.108.189.233:8001/") {
                //         $(".doctor .content-tow-right .play").css("display", "block");
                //     };
                // };
                if (!academic[4] || academic[4] == "") {
                    $(".academic .content-tow-right img").css("display", "none");
                    // return;
                } else {
                    if (academic[4].article_image == "" || academic[4].article_image == null || academic[4].article_image == undefined || academic[4].article_image == "http://admin.tangph.com/") {
                        $(".academic .content-tow-right img").css("display", "none");
                    } else {
                        $(".academic .content-tow-right img").attr("src", academic[4].article_image);
                    };
                    $(".academic .content-tow-right .threeTitele").html(academic[4].article_title);
                    $(".academic .content-tow-right").attr({ "data_id": academic[4].id, "data_title": academic[4].article_title });
                    if (academic[4].article_video != "" && academic[4].article_video != null && academic[4].article_video != "http://39.108.189.233:8001/") {
                        $(".academic .content-tow-right .play").css("display", "block");
                    };
                };
                $("video").each(function(i) {
                    if ($("video").eq(i).attr("src") == "" || $("video").eq(i).attr("src") == undefined) {
                        $("video").eq(i).remove();
                    } else {
                        $(".play").eq(i).css("display", "block");
                    };
                });

            },
            "json"
        );
    },
    getvideo: function() {
        column_child = localStorage.getItem("column_child");
        $.post(data_url, {
                "action": "GetGetVideoAricle",
                "ColumnId": column_child
            }, function(json) {
                if (json.Result == "" || json.Result == null) {
                    return;
                };
                $(".food .balance-complication-right").attr("data_id", json.Result.id);
                $(".food .balance-complication-right img").attr("src", json.Result.article_image);
                $(".food .balance-complication-right h4").html(json.Result.article_title);
                if (json.Result.article_video != "" && json.Result.article_video != null && json.Result.article_video != "http://39.108.189.233:8001/") {
                    $("#example_video_1").attr("src", json.Result.article_video);
                    document.getElementById("#example_video_1").volume = 0;
                    $(".food .balance-complication-right img").remove();
                    $(".food .balance-complication-right h4").remove();
                } else {
                    $("#example_video_1").remove();
                };
            },
            "json"
        );
    },

}
$(function() {
    // data.HotAricle();
    data.ChildInfo();
})