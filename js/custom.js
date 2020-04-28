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
    $('.accordion .title').click(function () {
       $(this).parent().toggleClass('active');
    });
    $('.sale-timeout-counter').startTimer();

//    ios switch
    let switches = document.querySelectorAll('.ios-switch');
    for (var i = 0; i <= switches.length ; i++){
        switches[i].addEventListener('click',function (event) {
            if (this.classList.contains('active')){
                this.classList.remove('active');
                this.querySelector('input[type=checkbox]').checked = false;
            }else{
                this.classList.add('active');
                this.querySelector('input[type=checkbox]').checked = true;
            }


        })
    }

});


