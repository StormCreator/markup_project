function animation(){
    const titles = document.querySelectorAll('.title'),
            subtitles = document.querySelectorAll('.subtitle'),
            services = document.querySelectorAll('.service');


    console.log(services);

    titles.forEach(item => {
        item.classList.add('wow', 'animate__animated', 'animate__fadeInUp');
        item.style.setProperty('--animate-duration', '1.2s');
    });
    subtitles.forEach(item => {
        item.classList.add('wow', 'animate__animated', 'animate__fadeInUp');
        item.style.setProperty('--animate-delay', '.5s');
        item.style.setProperty('--animate-duration', '1.2s');
    });
    {
        let duration = 1.2;
        services.forEach(service => {
            service.classList.add('wow', 'animate__animated', 'animate__fadeInUpBig');
            service.style.setProperty('--animate-duration', `${duration}s`);
            duration += 0.3;
        });
    }
  
}

export default animation;