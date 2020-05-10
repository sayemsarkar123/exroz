$(function () {
  "use strict";

  // Smooth Scroll
  var scroll = new SmoothScroll('a[href*="#"]', {
	  speed: 999,
	  speedAsDuration: true
  });

  // Sticky Header
  $(window).on('scroll', function(){
  if($(window).scrollTop()){
    $('header').addClass('navbar-fixed');
  }
  else
  {
    $('header').removeClass('navbar-fixed');
  }
  });

  // wow JS
  new WOW().init();

})(jQuery);