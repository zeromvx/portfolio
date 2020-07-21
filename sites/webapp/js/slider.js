"use strict";

var slider = document.querySelector('.swiper-container');
var mySwiper = new Swiper(slider, {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    425: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    }
  }
});