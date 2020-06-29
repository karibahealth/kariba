var nav = {

    ready() {

        $('div.nav__options ul li a').on('click', function() {

            nav.anchor($(this).data('anchor'));

        });

    },

    scroll() {

        if($(window).scrollTop() > 0) {

            $('div.nav').addClass('nav--slim');

        } else {

            $('div.nav').removeClass('nav--slim');

        }

    },

    anchor(anchor) {

        var myAnchor = $('div.' + anchor);

        if(myAnchor.length) {

            gsap.to(window, {

                duration: 0.75,
                ease: 'Power2.easeInOut',
                scrollTo: {

                    autoKill: false,
                    y: myAnchor.offset().top - 90

                }

            });

        }

    }

};

export default nav;
