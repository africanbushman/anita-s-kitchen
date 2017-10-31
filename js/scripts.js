$(document).ready(function() {
  $("#nav").hover(
    function() {
      $("hr").css({
        "transition-duration": " 2s",
        "transform": "rotate(360deg)"
      });
      $(".links").css("display", "block");
    },
    function() {
      $("hr").css({
        "transition-duration": " 0s",
        "transform": "rotate(0deg)"
      });
      $(".links").css("display", "none");
    }


  );

  // $("hr").mouseenter({"transition-duration":" 2s","transform":"rotate(360deg)"}).
  // mouseleave({"transition-duration":"0","transform":"rotate(0deg)"});

});
