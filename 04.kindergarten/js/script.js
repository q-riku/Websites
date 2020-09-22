$(function () {
    function loading() {
        $(".loading").fadeOut(600);
    }
    setTimeout(loading,2500);
});

$(function () {
    $(".btn").click(function () {
        $(this).toggleClass("change");
        $("header nav").slideToggle();
    });
});
