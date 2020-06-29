import 'gsap/dist/gsap.min.js';
import 'slick-carousel';

import FastClick from 'fastclick';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

import diagnosis from './modules/diagnosis';
import drawer from './modules/drawer';
import footer from './modules/footer';
import menu from './modules/menu';
import nav from './modules/nav';

$(document).ready(function() {

    FastClick.attach(document.body);

    diagnosis.ready();

    drawer.ready();

    footer.ready();

    menu.ready();

    nav.ready();

});

$(window).scroll(function() {

    nav.scroll();

});
