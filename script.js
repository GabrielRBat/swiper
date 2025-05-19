const propertySlider = new Swiper(".swiper.p-images", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 2,
  spaceBetween: 16,
  allowTouchMove: false,

  zoom: {
    maxRatio: 3, // você pode ajustar esse valor conforme preferir
  },

  navigation: {
    nextEl: ".swiper-btn-next",
    prevEl: ".swiper-btn-prev",
  },
});
