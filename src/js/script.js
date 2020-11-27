import hamburger from './modules/hamburger';
import slider from './modules/slider';
import animation from './modules/animation';
import scrolling from './modules/scrolling';
import coaches from './modules/coaches';

$(document).ready(function () {

    hamburger();
    coaches();
    slider();
    animation();
    scrolling();
    new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 100
    }).init();
});



