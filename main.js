// IMAGE SLIDER
const swiper = new Swiper('.swiper', {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});
// BUTTON CLICK 
document.querySelector('.brand').onclick = function () {
  document.querySelector('.brands').style.display = 'flex'
}
document.querySelector('.sb').onclick = function () {
  document.querySelector('.brands').style.display = 'flex'
}
document.querySelector('.fa-window-close').onclick = function () {
  document.querySelector('.brands').style.display = 'none'
}
// STICKY NAV with Jquery
$(document).ready(function () {
  $('.textbox').waypoint(function (direction) {
    if (direction == "down") {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  }, {
    offset: '60px'
  });
  // SMOOTH SCROLL
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function () {
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              return false;
            } else {
              $target.attr('tabindex', '-1');
              $target.focus();
            };
          });
        }
      }
    });
  // Animations on scroll
  $('.js--wp-1').waypoint(function (direction) {
    $('.js--wp-1').addClass('animate__animated animate__fadeInLeft');
  })
  $('.js--wp-1i').waypoint(function (direction) {
    $('.js--wp-1i').addClass('animate__animated animate__fadeInLeft');
  })
  $('.js--wp-2').waypoint(function (direction) {
    $('.js--wp-2').addClass('animate__animated animate__fadeInRight');
  })
  // mobile navigation
  $('.js--nav-icon').click(function () {
    var nav = $('.js--mainNav');
    var icon = $('.js--nav-icon i');
    nav.slideToggle(200);
  })

})










