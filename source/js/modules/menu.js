import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock/lib/bodyScrollLock.js';

var menu = {

    ready() {

        gsap.set($('div.drawer'), {

            autoAlpha: 0,
            yPercent: -100

        });

        gsap.set($('div.drawer__logo'), {

            autoAlpha: 0,
            yPercent: -20

        });

        gsap.set($('div.drawer__options ul li'), {

            autoAlpha: 0,
            yPercent: -20

        });

        gsap.set($('div.drawer__booking'), {

            autoAlpha: 0,
            yPercent: -20

        });

        $('div.menu button').on('click', function() {

            if($('div.menu').hasClass('menu--open')) {

                menu.close();

            } else {

                menu.open();

            }

        });

        $(document).keyup(function(e) {

            if(e.keyCode === 27 && $('div.menu').hasClass('menu--open')) menu.close();

        });

    },

    open() {

        disableBodyScroll(document.querySelector('div.drawer'));

        $('div.menu').addClass('menu--open');

        gsap.killTweensOf('div.drawer');

        gsap.set($('div.drawer'), {

            autoAlpha: 1

        });

        gsap.to($('div.drawer'), {

            duration: 0.5,
            yPercent: 0,
            ease: Power2.easeInOut

        });

        gsap.to($('div.drawer__logo'), {

            duration: 0.5,
            delay: 0.4,
            autoAlpha: 1,
            yPercent: 0,
            ease: Power2.easeOut

        });

        gsap.to($('div.drawer__options ul li'), {

            duration: 0.5,
            delay: 0.5,
            autoAlpha: 1,
            yPercent: 0,
            stagger: 0.05,
            ease: Power2.easeOut

        });

        gsap.to($('div.drawer__booking'), {

            duration: 0.5,
            delay: 0.7,
            autoAlpha: 1,
            yPercent: 0,
            ease: Power2.easeOut

        });

        gsap.to($('div.drawer-overlay'), {

            duration: 0.5,
            autoAlpha: 1,
            ease: Power2.easeInOut

        });

    },

    close() {

        clearAllBodyScrollLocks();

        $('div.menu').removeClass('menu--open');

        gsap.to($('div.drawer'), {

            duration: 0.5,
            yPercent: -100,
            ease: Power2.easeInOut,
            onComplete: function() {

                gsap.set($('div.drawer'), {

                    autoAlpha: 0,
                    yPercent: -100

                });

                gsap.set($('div.drawer__logo'), {

                    autoAlpha: 0,
                    yPercent: -20

                });

                gsap.set($('div.drawer__options ul li'), {

                    autoAlpha: 0,
                    yPercent: -20

                });

                gsap.set($('div.drawer__booking'), {

                    autoAlpha: 0,
                    yPercent: -20

                });

            }

        });

        gsap.to($('div.drawer-overlay'), {

            duration: 0.5,
            autoAlpha: 0,
            ease: Power2.easeInOut

        });

    }

};

export default menu;
