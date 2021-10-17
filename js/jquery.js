$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

$(function(){
    $('[data-toggle="tooltip"]').tooltip({placement: "bottom", offset: 150, 
                        delay: {show:1000}});
});
