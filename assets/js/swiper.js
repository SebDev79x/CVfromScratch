const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  mousewheel: true,
  breakpoints: {
   
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 5
    },
    // when window width is >= 1281px
    1281: {
      slidesPerView: 3,
      spaceBetween: 5
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar'
  },
});