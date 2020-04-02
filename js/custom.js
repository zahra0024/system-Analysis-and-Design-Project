$(document).ready(function () {
    $('.search-icon').click(function () {
        $('.search-icon').toggleClass('active');
        $('.search-wrapper').toggleClass('active');
    });
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items:4,
        rtl:true,
        margin:25,
        nav:true,
        loop:true,
        responsive: {
            0:{
                items: 1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });
});

