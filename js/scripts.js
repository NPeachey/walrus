$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });
  // $(".click-in").click(function() {
  //   $("#seal-fadeIn").fadeIn();
  // });
  $(".click-toggle").click(function() {
    $("#seal-fadeIn").fadeToggle();
    $("#seal-fadeOut").fadeToggle();
  });
  //
  // $(".click-out").click(function() {
  //  $("#seal-fadeOut").slideUp();
  //  });

  // $(".click-in").click(function() {
  //  $("#seal-fadeIn").slideDown();
  //  });

});
