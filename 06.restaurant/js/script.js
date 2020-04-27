$(function () {
    $("header,main,div.pickup,div.reservation,footer").hide();

    setTimeout(function () {
        $("header,main,div.pickup,div.reservation,footer").fadeIn(2000);
        $("div.loading").css("overflow-y", "visible");
    }, 2000);

    setTimeout(function () {
        $("div.loading").hide();
    }, 4000)

});

$(function () {
    $(".btn").click(function () {
        $(this).toggleClass("change");
        $("header nav").toggleClass("click");
    });
});