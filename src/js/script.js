import hamburger from './modules/hamburger';
import slider from './modules/slider';
import animation from './modules/animation';

$(document).ready(function () {

    hamburger();
    slider();
    new WOW().init();
    animation();
});



