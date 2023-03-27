AOS.init({
  duration: 1500,
});

$(document).ready(function () {
  $("#menu-expand-collapse").click(function () {
    $("#responsive-menu-list").slideToggle();
  });

  $(".menu-link").click(function () {
    $(this).addClass("active").siblings("a").removeClass("active");
  });
});

const date = new Date().getFullYear();
$(".date").html(new Date().getFullYear());

setTimeout(function () {
  $(".messages").html(8000);
  $(".therapists").html(2200);
  $(".people").html(5000);
}, 1000);
