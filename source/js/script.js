import 'gsap/dist/gsap.min.js';

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

$(window).scroll(function() {

    nav.scroll();

});
