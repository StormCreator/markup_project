function slider(){
    $('.slider').slick({
        slidesToShow: 2,
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
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    centerMode: true,
                }
            }
        ]
    });
}

export default slider;