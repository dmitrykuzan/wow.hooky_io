export const mainSlider = () => {
  let mainSlider = new Swiper(".foundational__slider", {
    slidesPerView: 1,
    autoHeight: true,
    parallax: true,
    pagination: {
      el: ".foundational__pagination",
      type: "progressbar",
    },
    // pagination: {
    //   el: ".foundational__pagination-number",
    //   type: "fraction",
    // },
    navigation: {
      nextEl: ".foundational__button-next",
      prevEl: ".foundational__button-prev",
    },
  });
}