var op = {
    buy: function() {
        $(".buy_now").each(function(i) {
            $(".buy_now").eq(i).click(function() {
                window.location.assign("/product_details.html");
            });
        });
    },
};
$(function() {
    op.buy();
});