$(function () {
    $(".btn").click(function () {
        $(this).toggleClass("change");
        $("header nav").toggleClass("click");
    });
});