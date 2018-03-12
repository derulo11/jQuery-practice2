$( document ).ready( function () {
console.log("now");
  $("#Colors dt").click(function (e) {
   console.log("hello");
    if ( $("#Colors dd").css("display") == "none") {
        $("#Colors dd").css("display", "block");
    } else {
      $("#Colors dd").css("display", "none");
    }

  });
});
