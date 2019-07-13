$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 1500,
    // autoplayHoverPause:true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 2
        },
        350: {
            items: 2
        },
        550: {
            items: 3
        },
        768: {
            items: 4,
            margin: 10
        },
        992: {
            items: 5,
            margin: 15
        },
        1200: {
            items: 6,
            margin: 20
        }
    }
})
