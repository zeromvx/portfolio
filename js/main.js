
// toggle button 
const toggleBtn = document.querySelector('.toggle-icon'),
        header = document.querySelector('.header'),
        icon = document.getElementById('nav-icon3'),
        mainContent = document.querySelector(".main-content");

toggleBtn.addEventListener('click', () => {
    if (!toggleBtn.classList.contains('active')) {
        toggleBtn.classList.add('active');
        icon.classList.add('open');
        header.style.left = '0';
    } else {
        toggleBtn.classList.remove('active');
        icon.classList.remove('open');
        header.style.left = '-100%';
    }
});

mainContent.addEventListener("click", () => {
    if (toggleBtn.classList.contains('active')) {
        toggleBtn.classList.remove('active');
        icon.classList.remove('open');
        header.style.left = '-100%';
    }
});
// toggle button end


// wow.js activate
new WOW().init();

// mixitup activate
const mixer = mixitup('.container');

// portfolio filter buttons
const btnArea = document.querySelector('.portfolio__filter');
const portfBtns = document.querySelectorAll('.filter__btn')
btnArea.addEventListener('click', (e) => {
    if (e.target.tagName == 'BUTTON') {
            for (let i = 0; i < portfBtns.length; i++){
                portfBtns[i].classList.remove('active');
            }
            e.target.classList.add('active');
    }
});

// nav progress bar

const nav = document.querySelectorAll('.nav li a');

document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');

    sections.forEach((item, i) => {
        let top = item.offsetTop - 100;
        let bottom = item.offsetHeight + top;
        let scroll = pageYOffset;
        let id = item.id;

        if (scroll > top && scroll < bottom) {
            reassignActiveLink(nav, id);
        }
    });
});

function reassignActiveLink(arr, value) {
    arr.forEach((item, i) => {
        if (item.classList.contains('active')) {
            item.classList.remove('active');
        }

        if (item.getAttribute('href') == '#' + value) {
            item.classList.add('active');
        }
    });
}