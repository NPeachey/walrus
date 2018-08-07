$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });
  // $(".click-in").click(function() {
  //   $("#seal-fadeIn").fadeIn();
  // });
  $(".click-out").click(function() {
   $("#seal-fadeOut").fadeOut();
   });

  $(".click-in").click(function() {
   $("#seal-fadeIn").fadeIn();
   });

});
