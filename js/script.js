const btnMenu = document.querySelector(".bars-nav");
const btnMenu2 = document.querySelector("#barsMenu2");
const menuCollapse = document.querySelector(".menu-collapse");

btnMenu.addEventListener("click", () => {
  menuCollapse.classList.toggle("active");
});
btnMenu2.addEventListener("click", () => {
  menuCollapse.classList.toggle("active");
});

if (window.matchMedia("(min-width: 730px)").matches) {
  /* viewport de Note */
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 7,
    spaceBetween: 10,
    slidesPerGroup: 1,
    loop: false,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
} else if (window.matchMedia("(min-width: 425px)").matches) {
  /* viewport de tablet */
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 7,
    slidesPerGroup: 1,
    loop: false,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
} else {
  // Viewport de cell
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 5,
    slidesPerGroup: 1,
    loop: false,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
