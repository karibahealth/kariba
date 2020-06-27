var footer = {

    ready() {

        $('div.footer__thanks a').on('click', function() {

            gsap.to(window, {

                duration: 0.9,
                ease: 'Power2.easeInOut',
                scrollTo: {

                    autoKill: false,
                    y: 0

                }

            });

        });

    }

};

export default footer;
