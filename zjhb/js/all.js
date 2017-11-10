var mySwiper;

function banner(obj) {
    mySwiper = new Swiper(obj, {
        direction: 'horizontal',
        loop: true,
        speed: 1000,
        // 如果需要分页器
        pagination: '.swiper-pagination',
        autoplay: 3000,
        autoplayDisableOnInteraction: false,
    });
};