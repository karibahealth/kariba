var diagnosis = {

    ready() {

        $('div.diagnosis__slides').not('.slick-initialized').slick({

            arrows: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ],
            slidesToScroll: 3,
            slidesToShow: 3,
            speed: 250,
            touchMove: false

        });

        $('div.diagnosis__control--next a').on('click', function() {

            $('div.diagnosis__slides').slick('slickNext');

        });

        $('div.diagnosis__control--previous a').on('click', function() {

            $('div.diagnosis__slides').slick('slickPrev');

        });

    }

};

export default diagnosis;
