document.addEventListener("DOMContentLoaded", function(event) {

    const swiperMain = new Swiper(".swiper-main", {
        loop: true,
        grabCursor: true,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-main .swiper-button-next',
            prevEl: '.swiper-main .swiper-button-prev',
        }
    });

    const swiperAge = new Swiper(".swiper-age", {
        slidesPerView: 2.5,
        slidesPerGroup: 1,
        spaceBetween: 5,
        // freeMode: true,
        autoHeight: true,
        grabCursor: true,
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
            nextEl: '.swiper-categories .swiper-button-next',
            prevEl: '.swiper-categories .swiper-button-prev',
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
        spaceBetween: 20,
        freeMode: true,
        autoHeight: true,
        grabCursor: true,
        navigation: {
            nextEl: '.swipper-pills-nav .swiper-button-next',
            prevEl: '.swipper-pills-nav .swiper-button-prev',
        },
        breakpoints: {
            576: {
                slidesPerView: 2.5,
                slidesPerGroup: 3
            },
            992: {
                slidesPerView: 3.5,
                slidesPerGroup: 3
            },
        }
    });

    const swiperCard = new Swiper(".swiper-card", {
        slidesPerView: 1,
        spaceBetween: 20,
        // autoHeight: true,
        grabCursor: true,
        navigation: {
            nextEl: '.swiper-card .swiper-button-next',
            prevEl: '.swiper-card .swiper-button-prev',
        },
        breakpoints: {
            576: {
                slidesPerView: 2,
                slidesPerGroup: 2,
            },
            992: {
                slidesPerView: 3,
                slidesPerGroup: 3,
            },
            1200: {
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
            nextEl: '.swiper-action .swiper-button-next',
            prevEl: '.swiper-action .swiper-button-prev',
        },
        breakpoints: {
            576: {
                slidesPerView: 3,
                slidesPerGroup: 1,
            },
            992: {
                slidesPerView: 3,
                slidesPerGroup: 1,
            },
        }
    });

    const swiperCharacters = new Swiper(".swiper-characters", {
        loop: true,
        slidesPerView: 2,
        centeredSlides: true,
        spaceBetween: 50,
        // autoHeight: true,
        grabCursor: true,
        navigation: {
            nextEl: '.characters-nav .swiper-button-next',
            prevEl: '.characters-nav .swiper-button-prev',
        },
        breakpoints: {
            576: {
                slidesPerView: 5,
                // slidesPerGroup: 5,

            },
            // 992: {
            //     slidesPerView: 5,
            //     slidesPerGroup: 5,
            // },
        }
    });

    swiperCharacters.slideTo(2, false, false);
    getCharacter();
    swiperCharacters.on('slideChange', function() {
        getCharacter();
    });

    function getCharacter() {
        let el = swiperCharacters.slides[swiperCharacters.activeIndex];
        let name = el.querySelector('.character-name').innerHTML;
        let description = el.querySelector('.character-description').innerHTML;
        document.querySelector('.characters-nav .characters-name').innerHTML = name;
        document.querySelector('.characters-nav .characters-description').innerHTML = description;
    }

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

const mediaQueryMobile = window.matchMedia('(max-width: 576px)')

function mediaChange(e) {
    if (e.matches) {
        console.log('mobile!')

        document.querySelectorAll('.footer-menu-title').forEach(function(el) {
            el.disabled = false
            el.parentNode.querySelector('.collapse').classList.remove('show')
        });

    } else {
        console.log('desktop!')

        document.querySelectorAll('.footer-menu-title').forEach(function(el) {
            el.disabled = true
            el.parentNode.querySelector('.collapse').classList.add('show')
        });
    }
}
mediaQueryMobile.addListener(mediaChange)
mediaChange(mediaQueryMobile)