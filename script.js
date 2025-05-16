const propertySlider = new Swiper(".swiper.p-images", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 2,
  spaceBetween: 16,
  allowTouchMove: false, 

  navigation: {
    nextEl: ".swiper-btn-next",
    prevEl: ".swiper-btn-prev",
  },
});
