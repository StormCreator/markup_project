function coaches(){
    const coachesNumber = document.querySelectorAll('.coach__number');
    coachesNumber.forEach((coach, i) => {
        coach.innerHTML = `0${i+1}`;
    });
}

export default coaches;