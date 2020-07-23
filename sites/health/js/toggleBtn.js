const menuToggle = document.querySelector('#menu-toggle');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', function () {
    menuToggle.classList.toggle('menu-icon-active');

    if (navbar.style.display == "" || navbar.style.display == "none") {
        navbar.style.display = "block"
    } else {
        navbar.style.display = "none"
    }
});
