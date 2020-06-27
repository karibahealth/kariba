import 'gsap/dist/gsap.min.js';

import AOS from 'aos';
import FastClick from 'fastclick';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

import drawer from './modules/drawer';
import footer from './modules/footer';
import menu from './modules/menu';
import nav from './modules/nav';

$(document).ready(function() {

    FastClick.attach(document.body);

    drawer.ready();

    footer.ready();

    menu.ready();

    nav.ready();

});

$(window).resize(function() {

    setTimeout(function() {

        AOS.refreshHard();

    }, 200);

});

$(window).scroll(function() {

    nav.scroll();

});

$(window).on('load', function() {

    AOS.init({

        duration: 600,
        easing: 'ease-out-cubic',
        offset: 0

    });

});
