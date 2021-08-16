(function ($) {
  'use strict';

  var self;

  /**
   * Main functionality should be in an 'init' function
   */
  var homepageHeroInit = function () {
    self = $(this);

    var $slidesCount = $('.cc--home-page-hero-item').length;

    /* eslint no-undef: "off" */
    /* eslint no-unused-vars: "off" */
    var mySwiper = new Swiper('.cc--home-page-hero .swiper-container', {
      slidesPerView: 1,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      watchOverflow: true,
      a11y: true,
      loop: $slidesCount > 1,
      simulateTouch: false,
      navigation: {
        nextEl: $('.swiper-button-next', self)[0],
        prevEl: $('.swiper-button-prev', self)[0]
      },
      on: {
        imagesReady: function () {
          $('.swiper-slide:not(.swiper-slide-active)', self).attr('aria-hidden', true);
          $('.swiper-slide:not(.swiper-slide-active)', self).attr('tabindex', '-1');
          $('.swiper-slide:not(.swiper-slide-active)', self).find('a, button').attr({
            'aria-hidden': true,
            'tabindex': -1
          });
          $('.swiper-slide-active', self).attr('aria-hidden', false);
          $('.swiper-slide-active', self).attr('tabindex', '0');
        },
        slideChangeTransitionEnd: function () {
          $('.swiper-slide:not(.swiper-slide-active)', self).attr('aria-hidden', true);
          $('.swiper-slide:not(.swiper-slide-active)', self).attr('tabindex', '-1');
          $('.swiper-slide:not(.swiper-slide-active)', self).find('a, button').attr({
            'aria-hidden': true,
            'tabindex': -1
          });
          $('.swiper-slide-active', self).attr('aria-hidden', false);
          $('.swiper-slide-active', self).attr('tabindex', '0');
          $('.swiper-slide-active', self).find('a, button').attr({
            'aria-hidden': false,
            'tabindex': 0
          });
        }
      }
    });
  };

  /**
   * This is boilerplate: add a behavior to window.DP.behaviors
   */
  window.DP.behaviors.homepageHero = {
    attach: function (context) {
      $(context).find('.cc--home-page-hero').once('homepageHero').each(function () {
        homepageHeroInit.apply(this);
      });
    }
  };

}(jQuery));
