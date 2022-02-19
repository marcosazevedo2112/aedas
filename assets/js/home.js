(() => {
  swiperInit();
})()

function swiperInit() {
  const swiper = new Swiper('.swiper', {
    spaceBetween: 0,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}