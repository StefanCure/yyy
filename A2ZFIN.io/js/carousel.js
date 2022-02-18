$(document).ready(function() {

    setDots();

    function setDots() {
        $(".owl-carousel .owl-dots").removeClass('disabled');
    }

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 100,
        dots: true,
        loop: true,
        stagePadding: 20,
        nav: true,
        autoplay: false,
        responsive: {
            0: {
                items: 1,
                margin: 30,
            },
            500: {
                items: 1,
                margin: 20,
            },
            600: {
                items: 1,
                margin: 30,
            },
            1100: {
                items: 2,
                margin: 50,
            },
            1400: {
                items: 2,
                margin: 50,
            },
            1500: {
                items: 2,
                margin: 40,
            }
        },
    })

    var swiper = new Swiper('.mobile-sc-carousel', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        speed: 400,
        autoplay: true,
        paginationType: "custom",
        cubeEffect: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
        },
        loop: true,
        infinite: true,
        slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        autoplay: {
            delay: 2000,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        slideNextClass: "swiper-button-next-unique"
    });






    // $(".owl-prev").on("click",".owl-item active",function(){
    //   var owlCarouselActive = document.getElementsByClassName("owl-item active");
    //   console.log(owlCarouselActive)
    // })
    // $(".owl-prev").click(function(){
    //   var owlCarouselActive = document.getElementsByClassName("owl-item active");
    //   setTimeout(function() {
    //     console.log(owlCarouselActive)
    //     var first = owlCarouselActive[0]; //get first item
    //     var last = owlCarouselActive[owlCarouselActive.length - 1]; //get last item
    //     first.style.opacity = 0.3;
    //     last.style.opacity = 0.3;
    //   },500)
    // })

    // $(".owl-next").click(function(){
    //   var owlCarouselActive = document.getElementsByClassName("owl-item active");
    //   setTimeout(function() {
    //     console.log(owlCarouselActive)
    //     var first = owlCarouselActive[0]; //get first item
    //     var last = owlCarouselActive[owlCarouselActive.length - 1]; //get last item
    //     first.style.opacity = 0.3;
    //     last.style.opacity = 0.3;
    //   },500)
    // })



    $('.main-carousel').flickity({
        // options
        draggable: true,
        cellAlign: 'left',
        contain: true,
        fade: true,
        wrapAround: true,
    });


    var swiper = new Swiper('.partner-carousel', {
        grabCursor: true,
        centeredSlides: true,
        speed: 1000,
        autoplay: false,
        infinite: false,
        paginationType: "custom",
        loop: true,
        initialSlide: 2,
        slidesPerView: 6,
        slidesPerGroup: 2,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        navigation: {
            nextEl: '.partner-button-next',
            prevEl: '.partner-button-prev',
        },
        slideNextClass: "swiper-button-next-unique",
        centeredSlides: true,
        breakpoints: {
            1200: {
                slidesPerView: 6,
            },
            960: {
                slidesPerView: 5,
            },
            720: {
                slidesPerView: 3,
            },
            540: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                initialSlide: 0,
            },
            320: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                initialSlide: 0,
            }
        }
    });
})
// swiper.slideTo(1, true,true);





var swiper = new Swiper('.partner-slider', {
    grabCursor: true,
    centeredSlides: true,
    speed: 1000,
    autoplay: false,
    infinite: false,
    paginationType: "custom",
    loop: true,
    initialSlide: 2,
    slidesPerView: 6,
    slidesPerGroup: 2,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    navigation: {
        nextEl: '.partner-button-next',
        prevEl: '.partner-button-prev',
    },
    slideNextClass: "swiper-button-next-unique",
    centeredSlides: true,
    breakpoints: {
        1200: {
            slidesPerView: 6,
        },
        960: {
            slidesPerView: 5,
        },
        720: {
            slidesPerView: 3,
        },
        540: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            initialSlide: 0,
        },
        320: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            initialSlide: 0,
        }
    }
});
swiper.slideTo(1, true, true);