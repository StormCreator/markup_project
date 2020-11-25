function slider(){

    $(".slider").on("init", function(event, slick){
        // $(".counter").text(parseInt(slick.currentSlide + 1) + ' of ' + slick.slideCount);
        $(".slick-count").text(`${parseInt(slick.currentSlide + 1)} of ${slick.slideCount}`);

    });
    
    $(".slider").on("afterChange", function(event, slick, currentSlide){
        $(".slick-count").text(`${parseInt(slick.currentSlide + 1)} of ${slick.slideCount}`);
    });


    $('.slider').slick({
        slidesToShow: 2,
        arrows: false,
        // prevArrow: '<button type="button" class="slick-prev"><img src="../images/slider/prev-arrow.png"></button>',
        // nextArrow: '<button type="button" class="slick-next"><img src="../images/slider/next-arrow.png"></button>',
        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    centerMode: true,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    centerPadding: '100px',
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    centerMode: true,
                    dots: true,
                    dotsClass: "mydots",
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    centerMode: true,
                    dots: true,
                    dotsClass: "mydots",
                }
            }
        ]
    });

    $('.slick-next').on('click', function() {
        $('.slider').slick('slickNext');
    });
    $('.slick-prev').on('click', function() {
        $('.slider').slick('slickPrev');
    });
}

export default slider;