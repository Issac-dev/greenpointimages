$(document).ready(function () {
    if ($(window).width() < 500) {
        $(document).scroll(function () {
            var box_width = $("#pic-2").width();
            $("#pic-1").fadeIn(10000).slideDown(900);
            $("#pic-2").animate({ width: '85%' }, 10000).slideDown(900);
            $("#pic-3").slideDown(10000);
            $("#pic-4").animate({ width: '85%' }, 10000).slideDown(900);
            $("#text-1").fadeIn(10000);
            $("#pic-5").slideDown(10100);
            $("#text-2").fadeIn(12000);
            $("#text-3").fadeIn(14000);
            $("#pic-6").animate({ width: '85%' }, 16000).slideDown(900);
            $("#text-4").fadeIn(16000);
        });
    }
});