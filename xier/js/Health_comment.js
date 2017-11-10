var laynum = 9 / 9;
$(".page-turner").pagination({
    currentPage: 1, // 当前页数
    totalPage: laynum + 1, // 总页数
    isShow: true, // 是否显示首尾页
    count: 6, // 显示个数
    homePageText: "回到首页", // 首页文本
    endPageText: "跳到尾页", // 尾页文本
    prevPageText: "上一页", // 上一页文本
    nextPageText: "下一页", // 下一页文本
    callback: function(current) {
        // 回调,current(当前页数)
    }
});
var article_id = localStorage.getItem("article_id");