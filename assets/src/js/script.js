document.addEventListener("DOMContentLoaded", function(event) {

    const swiperMain = new Swiper(".swiper-main", {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    const swiperAction = new Swiper(".swiper-action", {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 30,
        freeMode: true,
        autoHeight: true,
        navigation: {
            nextEl: '.swiper-action-nav .swiper-outside-button-next',
            prevEl: '.swiper-action-nav .swiper-outside-button-prev',
        },
    });

});