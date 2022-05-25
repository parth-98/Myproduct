$(document).ready(function(){
    $('.menu-icon').on("click",function(){
        $('body').toggleClass('menu-active');
        $(this).toggleClass('menu-active');
        $('.top-menu').toggleClass('menu-active');
    });
    $('#strategie_slider').owlCarousel(
        {
            loop:false,
            dots:true,
            items:3,
            smartSpeed:1000,
            responsive:{
                0:{
                    items:1
                },
                576:{
                    items:2
                },
                992:{
                    items:3
                }
            }
        }
    );
});