function hamburger(){
    const hamburgerBtn = document.querySelector('.hamburger-btn__burger'),
            menu = document.querySelector('.header__navigation');
    let isOpen = false;

    hamburgerBtn.addEventListener('click', () => {
        if(!isOpen){
            hamburgerBtn.classList.add('open');
            menu.classList.add('mobile-menu');
            isOpen = true;
        }
        else{
            hamburgerBtn.classList.remove('open');
            menu.classList.remove('mobile-menu');
            isOpen = false;
        }
    });

    // hamburger.addEventListener('click', () => {
    //     // if(menu.classList.contains('header__menu-hide')){
    //     //     menu.classList.remove('header__menu-hide');
    //     // }
    //     // menu.classList.remove('header__menu');
    //     overlay.style.left = "0";
    //     menu.style.left = "0";
    //     menu.classList.add('header__menu-mobile');
    // });

    // closeButton.addEventListener('click', () => {
    //     menu.style.left = "-200%";
    //     menu.classList.remove('header__menu-mobile');
    //     overlay.style.left = "-200%";
    // });

    // navLinks.forEach(link => {
    //     link.addEventListener('click', () => {
    //         if(menu.classList.contains('header__menu-mobile')){
    //             overlay.style.left = "-200%";
    //             menu.style.left = "-200%"
    //             menu.classList.remove('header__menu-mobile');
    //         }
    //     });
    // });
}

export default hamburger;