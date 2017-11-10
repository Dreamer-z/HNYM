var nowlay = 1;
window.onload = function() {
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        speed: 2000,

        // 如果需要分页器
        pagination: '.swiper-pagination',

        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',

        // 如果需要滚动条
        // scrollbar: '.swiper-scrollbar',
        autoplay: 3000,
        autoplayDisableOnInteraction: false,
    });
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
};