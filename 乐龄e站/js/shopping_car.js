var sp_car = {
    check_inp: function() {
        var state, th;
        $("input").click(function() {
            th = $(this);
            if ($(this).attr("state") == 0) {
                $(this).attr("state", "1");
                state = $(this).attr("state")
                select(th, state);
            } else {
                $(this).attr("state", "0");
                state = $(this).attr("state")
                select(th, state);
            };
        });

        function select(dom, num) {
            if (num == 1) {
                $(dom).removeClass("input-no-checked");
                $(dom).addClass("input-checked");
                $(dom).prop("checked", "checked");
            } else {
                $(dom).removeClass("input-checked");
                $(dom).addClass("input-no-checked");
                $(dom).removeProp("checked");
            }
        };
        document.getElementById("allinp").addEventListener("change", function() {
            if ($("#allinp").prop("checked") == true) {
                $(".ce-inp").each(function(i) {
                    $(".ce-inp").eq(i).attr("state", "1");
                    $(".ce-inp").eq(i).addClass("input-checked");
                    $(".ce-inp").eq(i).prop("checked", "checked");
                    select($(".ce-inp").eq(i), $(".ce-inp").eq(i).attr("state"));
                })
            } else {
                $(".ce-inp").each(function(i) {
                    $(".ce-inp").eq(i).attr("state", "0");
                    $(".ce-inp").eq(i).removeClass("input-checked");
                    $(".ce-inp").eq(i).removeProp("checked");
                    select($(".ce-inp").eq(i), $(".ce-inp").eq(i).attr("state"));
                })
            }
        });
    },
};
window.onload = function() {
    sp_car.check_inp();
};