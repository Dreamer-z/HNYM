var nowlay = 1;
$(".page-turner").pagination({
    currentPage: nowlay, // 当前页数
    totalPage: 3, // 总页数
    isShow: true, // 是否显示首尾页
    count: 5, // 显示个数
    homePageText: "回到首页", // 首页文本
    endPageText: "跳到尾页", // 尾页文本
    prevPageText: "&lt", // 上一页文本
    nextPageText: "&gt", // 下一页文本
    callback: function(current) {
        // 回调,current(当前页数)
        nowlay = current;

    }
});