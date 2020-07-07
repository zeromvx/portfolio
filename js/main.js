const toggleBtn = document.querySelector('.toggle-icon'),
        header = document.querySelector('.header'),
        icon = document.getElementById('nav-icon3');

toggleBtn.addEventListener('click', () => {
    if (!toggleBtn.classList.contains('active')) {
        toggleBtn.classList.add("active");
        icon.classList.add("open");
        header.style.left = "0";
    } else {
        toggleBtn.classList.remove("active");
        icon.classList.remove("open");
        header.style.left = "-100%";
    }
});