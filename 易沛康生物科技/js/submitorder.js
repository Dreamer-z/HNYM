var amount = parseInt($(".info2 .amount").val());
var amountspan = parseInt($(".amountspan").html());
var pricespan = parseInt($(".pricespan").html());
$(".info2>.right button").on("click",function(){
    amount = parseInt($(".info2 .amount").val());
    amountspan = parseInt($(".amountspan").html());
    if($(this).attr("state")==0){
        if(amount>0){
            amount = amount - 1;
            $(".info2 .amount").val(amount);
            changeAmount();
        }else{
            $(".info2 .amount").val(amount);
            changeAmount();
        }
    }else{
        if(amount<9999){
            amount = amount + 1;
            $(".info2 .amount").val(amount);
            changeAmount();
        }else{
            $(".info2 .amount").val(amount);
            changeAmount();
        } 
    }
});
var changeAmount = function(){
    $(".amountspan").html(amount);
    $(".pricespan").html(pricespan*amount);
}
$(function(){
    changeAmount();
    var amountval = document.getElementById("amount");
    //addEventListener：绑定函数 
    amountval.addEventListener("change",function(){
        amount = parseInt($(".info2 .amount").val());
        amountspan = parseInt($(".amountspan").html());
        changeAmount();
    });
})