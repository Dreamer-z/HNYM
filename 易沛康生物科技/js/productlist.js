$(".producttab .flex-item").on("click",function(){
    $(".producttab>.flex-item.current").removeClass("current");
    $(this).addClass("current");
})
// $(".search_input").on("blur",function(){
//     alert("当搜索完成之后，这里面发起数据请求");
// })
$(".stylespan .iconfont").on("click",function(){
    if($(this).attr("state")==0){
        $(this).removeClass("icon-liebiao").addClass("icon-liebiao1").attr("state","1");
        $(".productlist").addClass("style2");
    }else{
        $(this).removeClass("icon-liebiao1").addClass("icon-liebiao").attr("state","0");
        $(".productlist").removeClass("style2");
    }
})