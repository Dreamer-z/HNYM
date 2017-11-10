$("#headbox").load("/header.html");
$("#divfooter").load("/footer.html");

// function GetColumn() {
//     //获取头部列表数据
//     var url = data_url;
//     var data = { "action": "GetCloumnAndChild" };
//     $.post(url, data, function(json) {
//         $(".nav-first").html($("#navTemplate").tmpl(json.Result));
//         for (var i = 0; i < $(".nav-first-li").length; i++) {
//             $(".nav-first-li").eq(i).click(function() {
//                 var column = $(this).attr("data_id");
//                 localStorage.setItem("column", column);
//                 localStorage.setItem("column_val", $(this).children("a").html());
//                 localStorage.setItem("column_url", $(this).children("a").attr("href"));
//             });
//             for (var j = 0; j < $(".nav-first-li:eq(" + i + ") .nav-second-li").length; j++) {
//                 $(".nav-first-li:eq(" + i + ") .nav-second-li").eq(j).click(function() {
//                     var ind = i;
//                     var column_child = $(this).attr("data_id");
//                     localStorage.setItem("column", $(".nav-first-li").eq(ind).attr("data_id"));
//                     localStorage.setItem("column_child", column_child);
//                     localStorage.setItem("column_val", $(".nav-first-li").eq(ind).children("a").html());
//                     localStorage.setItem("column_url", $(".nav-first-li").eq(ind).children("a").attr("href"));
//                     localStorage.setItem("column_child_val", $(this).children("a").html());
//                     localStorage.setItem("column_child_url", $(this).children("a").attr("href"));
//                 });
//             }
//         };
//         $(".search").click(function(ev) {
//             var e = ev || window.ev;
//             e.stopPropagation();
//             e.cancelBubble = true;
//             $("#search-box").css("display", "block");
//             $("#search-box").animate({ "right": 0 }, 500);
//             $(document).click(function(ev) {
//                 if (ev.target == $("#search-box")[0] || ev.target == $(".searchinp ")[0] || ev.target == $(".searchbtn")[0] || ev.target == $("#search-content")[0] || ev.target == $("#search-choose")[0] || ev.target == $(".sc-li")[0] || ev.target == $(".sc-li")[1] || ev.target == $(".sc-li")[2]) {
//                     return;
//                 };
//                 $("#search-box").animate({ "right": -150 + "%" }, 200);
//                 $("#search-box").fadeOut(200);
//             })
//         });
//         $(".searchbtn").click(function() {
//             if ($(".searchinp").val() == "") {
//                 return;
//             };
//             localStorage.setItem("keyword", $(".searchinp").val());
//             window.location.assign("/search-result.html");
//         });
//         $(".searchinp").focus(function(ev) {
//             var e = ev || window.ev;
//             e.stopPropagation();
//             e.cancelBubble = true;
//             $("#search-choose").fadeIn(200);
//             $(document).click(function(ev) {
//                 if (ev.target == $("#search-box")[0] || ev.target == $(".searchinp ")[0] || ev.target == $(".searchbtn")[0] || ev.target == $("#search-content")[0] || ev.target == $("#search-choose")[0]) {
//                     return;
//                 };
//                 $("#search-choose").fadeOut(200);
//             });
//             $(".sc-li").each(function(i) {
//                 $(".sc-li").eq(i).click(function() {
//                     localStorage.setItem("search_type", $(this).html());
//                     $("#search-choose").fadeOut(200);
//                 });
//             })
//         });
//     }, "json");
//     //加载尾部
// };
// GetColumn();