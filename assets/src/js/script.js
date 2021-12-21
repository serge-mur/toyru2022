document.addEventListener("DOMContentLoaded", function(event) {

    const swiperMain = new Swiper(".swiper-main", {
        loop: true,
        grabCursor: true,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    /**/
    const swiperAge = new Swiper(".swiper-age", {
        slidesPerView: 2.5,
        slidesPerGroup: 1,
        spaceBetween: 5,
        freeMode: true,
        autoHeight: true,
        grabCursor: true,
        // navigation: {
        //     nextEl: '.swiper-reviews-nav .swiper-outside-button-next',
        //     prevEl: '.swiper-reviews-nav .swiper-outside-button-prev',
        // },
        breakpoints: {
            576: {
                slidesPerView: 6,
                slidesPerGroup: 6,
            },
            992: {
                slidesPerView: 6,
                slidesPerGroup: 6,
            },
        }
    });

    const swiperCategories = new Swiper(".swiper-categories", {
        loop: true,
        grabCursor: true,
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            576: {
                slidesPerView: 4,
                slidesPerGroup: 4,
            }
        }
    });

    const swiperPills = new Swiper(".swiper-pills", {
        slidesPerView: 1.5,
        // slidesPerGroup: 2,
        // slidesPerView: "auto",
        spaceBetween: 20,
        // freeMode: true,
        autoHeight: true,
        grabCursor: true,
        navigation: {
            nextEl: '.swipper-pills-nav .swiper-button-next',
            prevEl: '.swipper-pills-nav .swiper-button-prev',
        },
        breakpoints: {
            576: {
                // slidesPerView: 3,
                // slidesPerGroup: 3,
                // slidesPerView: "auto"
            },
            992: {
                slidesPerView: 3.5,
                slidesPerGroup: 3
                    // slidesPerView: "auto",
                    // slidesPerGroupAuto: true
            },
        }
    });

    const swiperCard = new Swiper(".swiper-card", {
        slidesPerView: 1,
        spaceBetween: 20,
        autoHeight: true,
        grabCursor: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            576: {
                slidesPerView: 4,
                slidesPerGroup: 4,
            },
            992: {
                slidesPerView: 4,
                slidesPerGroup: 4,
            },
        }
    });

    const swiperAction = new Swiper(".swiper-action", {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 20,
        autoHeight: true,
        grabCursor: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            576: {
                slidesPerView: 3,
                slidesPerGroup: 3,
            },
            992: {
                slidesPerView: 3,
                slidesPerGroup: 3,
            },
        }
    });

    const swiperCharacters = new Swiper(".swiper-characters", {
        slidesPerView: 2.5,
        // slidesPerGroup: 2,
        spaceBetween: 20,
        freeMode: true,
        autoHeight: true,
        grabCursor: true,
        navigation: {
            nextEl: '.swiper-characters-nav .swiper-outside-button-next',
            prevEl: '.swiper-characters-nav .swiper-outside-button-prev',
        },
        breakpoints: {
            576: {
                slidesPerView: 4,
                slidesPerGroup: 4,
            },
            992: {
                slidesPerView: 5,
                slidesPerGroup: 5,
            },
        }
    });

    const swiperReviews = new Swiper(".swiper-reviews", {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 20,
        // freeMode: true,
        autoHeight: true,
        grabCursor: true,
        navigation: {
            nextEl: '.swiper-reviews-nav .swiper-outside-button-next',
            prevEl: '.swiper-reviews-nav .swiper-outside-button-prev',
        },
        breakpoints: {
            576: {
                slidesPerView: 3,
                slidesPerGroup: 3,
            },
            992: {
                slidesPerView: 3,
                slidesPerGroup: 3,
            },
        }
    });

    const swiperBrands = new Swiper(".swiper-brands", {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20,
        // freeMode: true,
        grabCursor: true,
        grid: {
            fill: 'row',
            rows: 2,
        },
        navigation: {
            nextEl: '.swiper-brands-nav .swiper-outside-button-next',
            prevEl: '.swiper-brands-nav .swiper-outside-button-prev',
        },
        breakpoints: {
            576: {
                slidesPerView: 4,
                slidesPerGroup: 4,
                grid: {
                    fill: 'row',
                    rows: 2,
                },
            },
            992: {
                slidesPerView: 6,
                slidesPerGroup: 6,
                grid: {
                    fill: 'row',
                    rows: 2,
                },
            },
        }
    });

});