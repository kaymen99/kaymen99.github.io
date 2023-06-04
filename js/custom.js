//
$(document).ready(function () {
  $("#fullpage").fullpage({
    verticalCentered: false,
    autoScrolling: false,
    css3: false,
    navigation: true,
    navigationPosition: "right",
  });
});

// wow
$(function () {
  new WOW().init();
  $(".rotate").textrotator();
});
