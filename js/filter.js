const Shuffle = window.Shuffle,
    filterArea = document.querySelector(".portfolio__filter"), // filter section
    filterBtns = document.querySelectorAll(".filter__btn");

const myShuffle = new Shuffle(document.querySelector('.my-shuffle'), {
    itemSelector: '.work',
    sizer: null,
    columnWidth: 300,
    isCentered: true,
    gutterWidth: 30,
});

filterArea.addEventListener("click", function (e) {
    if (e.target.tagName == "BUTTON") {
        for (let i = 0; i < filterBtns.length; i++) {
            filterBtns[i].classList.remove("active");
        }
        e.target.classList.add("active");
    }
});

filterBtns.forEach((item) => {
    item.addEventListener('click', () => {

        if (item.dataset['filter'] != 'all') {
            myShuffle.filter(item.dataset['filter']);
        } else {
            myShuffle.filter(Shuffle.ALL_ITEMS);
        }
    });
});
