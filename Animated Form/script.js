$(document).ready(function() {
  $(".log-in").click(function() {
    $(".signIn").addClass("active").removeClass("inactive hidden");
    $(".signUp").addClass("inactive").removeClass("active");
    $(".signIn").prev().addClass("active");
    $(".signUp").prev().removeClass("active");
  });

  $(".back").click(function() {
    $(".signUp").addClass("active").removeClass("inactive");
    $(".signIn").addClass("inactive").removeClass("active");
    $(".signIn").prev().addClass("active");
    $(".signUp").prev().removeClass("active");
  });

  $(".form-btn.log-in").click(function() {
    $(".signIn").addClass("active").removeClass("inactive hidden");
    $(".signUp").addClass("inactive").removeClass("active");
    $(".signIn").prev().addClass("active");
    $(".signUp").prev().removeClass("active");
  });
});
