$(document).ready(function () {
    $('.partners-slider').slick({
        centerMode: true,
        centerPadding: '7.5%',
        slidesToShow: 6,
        appendArrows: $('.arrows'),
        swipe: false,
        responsive: [
            {
                breakpoint: 1441,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 1
                }
            },

        ]
    });
});
