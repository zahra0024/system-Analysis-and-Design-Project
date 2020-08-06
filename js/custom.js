$(document).ready(function () {
    $('.search-icon').click(function () {
        $('.search-icon').toggleClass('active');
        $('.search-wrapper').toggleClass('active');
    });
    $('.input-group input').keyup(function () {
        if($(this).val().length > 0){
            $(this).parent().addClass('active');
        }else{
            $(this).parent().removeClass('active');
        }

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
                items:1
            },
            800:{
                items:1
            },
            1200:{
                items:1
            }
        }
    });
    let owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 5,
        rtl: true,
        margin: 25,
        nav: true,
        loop: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            },
            1200:{
                items:5
            }
        }
    });
    // start of loader
    setTimeout(function () {
        $('.loader-wrapper').fadeOut(1000);
    },1000);
    // end of loader

    $('.accordion .title').click(function () {
       $(this).parent().toggleClass('active');
    });
    $('.sale-timeout-counter').startTimer();

//    ios switch
    let switches = document.querySelectorAll('.ios-switch');
    for (let i = 0; i <= switches.length ; i++){
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


