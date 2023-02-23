$("button").click(function() {
  $('html,body').animate({
      scrollTop: $(".wrapper").offset().top},
      'slow');
});