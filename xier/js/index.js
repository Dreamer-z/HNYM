var indexFun = {
    //获取文章
    GetIndexAricle: function() {
        $.ajax({
            type: "post",
            url: data_url,
            data: {
                "action": "GetIndexAricle",
                "pagesize": 10
            },
            success: function(json) {
                var data = JSON.parse(json);
                $("#new-center").html($("#newTemplate").tmpl(data.Result));
                var mySwiper = new Swiper('.swiper-container', {
                    direction: 'horizontal',
                    // loop: true,
                    slidesPerView: 4,
                    freeMode: true,
                    grabCursor: true,
                    // 如果需要分页器
                    // pagination: '.swiper-pagination',
                    // autoplay: 3000,
                    // autoplayDisableOnInteraction: false,
                    prevButton: '.swiper-button-prev',
                    nextButton: '.swiper-button-next',
                });
                var artic_1 = document.getElementsByClassName("new-article-content");
                for (var i = 0; i < artic_1.length; i++) {
                    $clamp(artic_1[i], { clamp: 3 });
                };
                $(".newcenterli").each(function(i) {
                    $(".newcenterli").eq(i).click(function() {
                        localStorage.setItem("column", $("#new-center>.newcenterli").eq(i).attr("data_id"));
                        localStorage.setItem("article_title", $("#new-center>.newcenterli").eq(i).attr("data_title"));
                        localStorage.setItem("article_id", $("#new-center>.newcenterli").eq(i).attr("data_id"));
                        window.location.assign("/index_article.html");
                    });
                });

            }
        });
    }
}

$(function() {
    indexFun.GetIndexAricle();
    // $("#jiathis_webchat img").attr("src", "/images/ewm.jpg");
});