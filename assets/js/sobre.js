(() => {
  swiperInit();
})()

function swiperInit() {
  const swiper = new Swiper('.swiper', {
    spaceBetween: 10,
    // If we need pagination
    /*pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },*/
  });
}