const propertySlider = new Swiper(".swiper.p-images", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 16,

  // // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-btn-next",
    prevEl: ".swiper-btn-prev",
  },
});
