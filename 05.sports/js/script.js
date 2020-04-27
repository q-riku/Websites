$(function () {
    $(".btn").click(function () {
        $(this).toggleClass("change");
        $("div.navigation nav").toggleClass("click");
    });
});