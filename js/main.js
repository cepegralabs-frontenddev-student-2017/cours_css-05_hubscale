$(document).ready(function(){
  /* scrol nav */
  var link = $('.main_nav a');
  link.click(function(){
    var target = $(this.hash);
    $('html, body').animate({
      scrollTop: target.offset().top
  }, 1500);
  });

var nav = $('#nav');
  $(window).scroll(function(){
    if($(document).scrollTop() > 100) {
      nav.addClass('small');
    } else {
      nav.removeClass('small');
    }
  });
});
