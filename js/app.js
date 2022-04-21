$(function() {
    $("#map-link").on("click", function() {
        $("#map").removeClass("hidden-map");
        $("#map").addClass("shown-map");
    });
    $("body").on("click", "#map-hide", function() {
        $("#map").removeClass("shown-map");
        $("#map").addClass("hidden-map");
    });
});