$(function(){
    $('.slider-top__inner').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        fade: true,
    });

});
$(function(){
    $('.slider-bottom__inner').slick({
        centerMode: true,
        centerPadding: 0,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        variableWidth: true ,
        
       
        prevArrow: '<button type="button" class="slick-prev"><img class="slick-arrow slick-prev" src="images/Shape 3 copy 2.png" alt="prev-arrow"></button>',
        nextArrow: '<button type="button" class="slick-next"><img class="slick-arrow slick-next" src="images/Shape 3 copy.png" alt="next-arrow"></button>',
        responsive: [
            {
              breakpoint: 1150,
              settings: {
                arrows: false,
                dots: true,
                centerMode: true,
                slidesToShow: 2,
                centerPadding: '60px',

              }
            },
            
          ]

    });

});

