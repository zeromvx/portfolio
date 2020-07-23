const slider = document.querySelector('.swiper-container');

var mySwiper = new Swiper (slider, {
    // Optional parameters
    direction: 'horizontal',
    spaceBetween: 30,
    slidesPerView: 1,
    loop: true,
    centeredSlides: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        600: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        700: {
            slidesPerView: 2,
            spaceBetween: 30
          },
        1024: {
            slidesPerView: 3,
            spaceBetween: 40
          }
    }
})
  