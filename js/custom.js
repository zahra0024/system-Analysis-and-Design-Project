$(document).ready(function () {
    $('.search-icon').click(function () {
        $('.search-icon').toggleClass('active');
        $('.search-wrapper').toggleClass('active');
    });
    $('.owl-carousel-0').owlCarousel({
        items:1,
        rtl: true,
        margin: 25,
        nav: true,
        loop: true,
        responsive: {
            o:{
                items:1
            },
            600:{
                items:2
            },
            800:{
                items:3
            },
            1200:{
                items:1
            }
        }
    })
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 4,
        rtl: true,
        margin: 25,
        nav: true,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            },
            1200:{
                items:4
            }
        }
    });

});

