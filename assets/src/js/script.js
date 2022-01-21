document.addEventListener("DOMContentLoaded", function(event) {

    let menuElements = document.querySelectorAll('.catalog-menu>ul>li')
    menuElements.forEach(function(el) {
        el.addEventListener("mouseover", function() {
            menuElements.forEach(function(el) {
                el.classList.remove('active');
            });
            el.classList.add('active');
            // console.log(el)
        }, false);
    });



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
        freeMode: true,
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
            nextEl: '.swiper-categories-wrapper .swiper-button-next',
            prevEl: '.swiper-categories-wrapper .swiper-button-prev',
        },
        breakpoints: {
            576: {
                slidesPerView: 3,
                slidesPerGroup: 3,
            },
            992: {
                slidesPerView: 4,
                slidesPerGroup: 4
            },
        }
    });

    const swiperPills = new Swiper(".swiper-pills", {
        slidesPerView: 1.5,
        spaceBetween: 20,
        // freeMode: true,
        autoHeight: true,
        grabCursor: true,
        watchSlidesProgress: true,
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

    const swiperTrends = new Swiper(".swiper-trends", {
        slidesPerView: 1,
        loop: true,
        grabCursor: true,
        spaceBetween: 15,
        navigation: {
            nextEl: '.swipper-trends-nav .swiper-button-next',
            prevEl: '.swipper-trends-nav .swiper-button-prev',
        },
        thumbs: {
            swiper: swiperPills,
        },
    });

    const discountsSwiperCard = new Swiper(".discounts .swiper-card", {
        slidesPerView: 1,
        spaceBetween: 20,
        // autoHeight: true,
        grabCursor: true,
        navigation: {
            nextEl: '.discounts .swiper-card-wrapper .swiper-button-next',
            prevEl: '.discounts .swiper-card-wrapper .swiper-button-prev',
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

    const noveltySwiperCard = new Swiper(".novelty .swiper-card", {
        slidesPerView: 1,
        spaceBetween: 20,
        // autoHeight: true,
        grabCursor: true,
        navigation: {
            nextEl: '.novelty .swiper-card-wrapper .swiper-button-next',
            prevEl: '.novelty .swiper-card-wrapper .swiper-button-prev',
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

    const matchedSwiperCard = new Swiper(".matched-for-you .swiper-card", {
        slidesPerView: 1,
        spaceBetween: 20,
        // autoHeight: true,
        grabCursor: true,
        navigation: {
            nextEl: '.matched-for-you .swiper-card-wrapper .swiper-button-next',
            prevEl: '.matched-for-you .swiper-card-wrapper .swiper-button-prev',
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
            nextEl: '.swiper-action-wrapper .swiper-button-next',
            prevEl: '.swiper-action-wrapper .swiper-button-prev',
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
                spaceBetween: 50,
                // slidesPerGroup: 5,

            },
            // 992: {
            //     slidesPerView: 5,
            //     slidesPerGroup: 5,
            // },
        }
    });
    if (document.querySelector(".swiper-characters")) {
        swiperCharacters.slideTo(2, false, false);
        getCharacter();
    }

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
            nextEl: '.swiper-reviews-wrapper .swiper-button-next',
            prevEl: '.swiper-reviews-wrapper .swiper-button-prev',
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
            nextEl: '.swiper-brands-wrapper .swiper-button-next',
            prevEl: '.swiper-brands-wrapper .swiper-button-prev',
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

// category

const swiperTags = new Swiper(".swiper-tags", {
    slidesPerView: 1.5,
    spaceBetween: 20,
    // freeMode: true,
    autoHeight: true,
    grabCursor: true,
    watchSlidesProgress: true,
    navigation: {
        nextEl: '.tags-block .swipper-tags-nav .swiper-button-next',
        prevEl: '.tags-block .swipper-tags-nav .swiper-button-prev',
    },
    breakpoints: {
        576: {
            slidesPerView: 3.5,
            slidesPerGroup: 3
        },
        992: {
            slidesPerView: 4.5,
            slidesPerGroup: 3
        },
    }
});

const swiperAdvantage = new Swiper(".swiper-advantage", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 60,
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
            slidesPerView: 6,
            slidesPerGroup: 6,
            spaceBetween: 60,
        },
    }
});

if (document.querySelector('.mob-filters-toggle')) {
    document.querySelector('.mob-filters-toggle').addEventListener('click', function() {
        document.body.style.overflow = 'hidden';
        document.querySelector('.filters-block').style.display = 'block';
    });
    document.querySelector('.filters-block .offcanvas-header').addEventListener('click', function() {
        document.body.style.overflow = 'auto';
        document.querySelector('.filters-block').style.display = 'none';

    });
}


// product

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        let specificationLink = document.querySelector('.specification-link');
        if (anchor == specificationLink) {
            let specificationTriggerEl = document.querySelector('#pills-specification-tab');
            let specificationTab = new bootstrap.Tab(specificationTriggerEl);
            specificationTab.show();
        }

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

if (document.querySelector('.counter-block')) {

    let numEl = document.querySelector('.number-product');
    let num = parseInt(numEl.value);

    document.querySelector('.counter-block .btn-decrease').addEventListener('click', function() {
        num--;
        numEl.value = num;
        ifNum(num);
    });

    document.querySelector('.counter-block .btn-increase').addEventListener('click', function() {
        num++;
        numEl.value = num;
        ifNum(num);
    });

    function ifNum(num) {
        console.log(num);
        if (num == 2) {
            document.querySelector('.counter-block .btn-decrease').removeAttribute("disabled");
        } else if (num == 1) {
            document.querySelector('.counter-block .btn-decrease').setAttribute("disabled", "true");
        } else if (num == 9) {
            document.querySelector('.counter-block .btn-increase').setAttribute("disabled", "true");
        }
    }

}


const swiperProductThumbs = new Swiper(".swiper-product-thumbs", {
    direction: "vertical",
    slidesPerView: 6,
    slidesPerGroup: 6,
    spaceBetween: 20,
    freeMode: true,
    autoHeight: true,
    grabCursor: true,
    watchSlidesProgress: true,
    // breakpoints: {
    //     576: {
    //         slidesPerView: 6,
    //         slidesPerGroup: 3
    //     },
    //     992: {
    //         slidesPerView: 6,
    //         slidesPerGroup: 3
    //     },
    // }
});
const swiperProduct = new Swiper(".swiper-product", {
    // loop: true,
    autoHeight: true,
    grabCursor: true,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-main .swiper-button-next',
        prevEl: '.swiper-main .swiper-button-prev',
    },
    thumbs: {
        swiper: swiperProductThumbs,
    },
});