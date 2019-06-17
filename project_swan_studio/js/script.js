    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:20,
        dots: false,
        autoplay:true,
        autoplayTimeout:3000,
        autoplaySpeed: 1500,
        // autoplayHoverPause:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            350:{
                items:2
            },
            550:{
                items:3
            },
            768:{
                items:3,
                margin:20
            },
            992:{
                items:4,
                margin:25
            },
            1200:{
                items:4,
                margin:30
            }
        }
    })