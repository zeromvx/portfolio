const numbers = document.querySelectorAll('.counter-list__number--content'),
    counterSection = document.querySelector('.counter'),
    counterSectionTop = counterSection.getBoundingClientRect().top,
    counterSectionHeight = counterSection.clientHeight,
    time = 10,
    step = 1;


window.addEventListener('scroll', function onScroll() {

    if (window.pageYOffset >  counterSectionTop - window.innerHeight / 1.5) {
        this.removeEventListener('scroll', onScroll, false);

        for (let i = 0; i < numbers.length; i++) {
            outNum(numbers[i]);
        }
    }
})


function outNum(elem) {
    let interval = setInterval(() => {
        let num = +elem.innerText;
        elem.innerText = num + step;

        if (num === +elem.dataset['max']) {
            clearInterval(interval);
        }
    }, time);
}
