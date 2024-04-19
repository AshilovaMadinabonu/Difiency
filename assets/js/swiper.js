(function() {
  
    var slidesPerView = new Swiper('.js-swiper-slides-per-view', {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: '.js-swiper-slides-per-view-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.js-swiper-slides-per-view-button-next',
        prevEl: '.js-swiper-slides-per-view-button-prev',
      },
    });
  })()