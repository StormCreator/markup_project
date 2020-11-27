function hamburger(){
    const hamburgerBtn = document.querySelector('.hamburger-btn__burger'),
            menu = document.querySelector('.header__navigation'),
            headerLinks = document.querySelectorAll('.header__link');
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

    headerLinks.forEach(link => {
        link.addEventListener('click', () => {
            if(isOpen){
                hamburgerBtn.classList.remove('open');
                menu.classList.remove('mobile-menu');
                isOpen = false;
            }
        });
    });
}

export default hamburger;