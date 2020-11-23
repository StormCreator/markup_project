function slider(){
    $('.slider').slick({
        slidesToShow: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                centerMode: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
                }
            }
            
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
}

export default slider;