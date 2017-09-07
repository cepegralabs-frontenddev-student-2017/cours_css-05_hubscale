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

  var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      // direction: 'horizontal',
      // // loop: true,
      autoplay: 3000,
      slidesPerView: 5,
      slidesPerGroup: 5,
      //spaceBetween: 30,
      //freeMode: true,
      // loop: true,
      //loopAdditionalSlides: 1,
      //keyboardControl: true,

      // If we need pagination
       pagination: '.swiper-pagination',
       paginationClickable: true

      // Navigation arrows
      // nextButton: '.swiper-button-next',
      // prevButton: '.swiper-button-prev'

      // And if we need scrollbar
      // scrollbar: '.swiper-scrollbar',
    });



});
