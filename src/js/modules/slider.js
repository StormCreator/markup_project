function slider(){


    $(".slider").on("init", function(event, slick){
        $(".slick-count").text(`${parseInt(slick.currentSlide + 1)} of ${slick.slideCount/2}`);
    });

    $(".slider").on("afterChange", function(event, slick, currentSlide){
        if(currentSlide == 2){
            $(".slick-count").text(`${parseInt(slick.currentSlide)} of ${slick.slideCount/2}`);
        }else{
            $(".slick-count").text(`${parseInt((slick.currentSlide/2) + 1)} of ${slick.slideCount/2}`);
        }
    });


    $('.slider').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        infinite: false,
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