const nav = document.getElementById('nav');
const navHeight = nav.getBoundingClientRect().height;


document.addEventListener('scroll', function() {
    if (pageYOffset > navHeight) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled')
    }
});
