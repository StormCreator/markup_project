import hamburger from './modules/hamburger';
import slider from './modules/slider';
import animation from './modules/animation';
import scrolling from './modules/scrolling';

$(document).ready(function () {

    hamburger();
    slider();
    new WOW().init();
    animation();
    scrolling();
});



