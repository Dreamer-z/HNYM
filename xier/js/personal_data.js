$("#datetimepicker3").on("click", function(e) {
    e.stopPropagation();
    $(this).lqdatetimepicker({
        css: 'datetime-day',
        dateType: 'D',
        selectback: function() {

        }
    });
});