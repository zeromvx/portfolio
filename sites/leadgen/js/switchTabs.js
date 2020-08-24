const tabs = document.querySelectorAll('.attracting__tabs-item'),
    tabsContent = document.querySelectorAll('.tab');

tabs.forEach((tabHeader) => {
    tabHeader.addEventListener('click', switchTab);
});

function switchTab() {

    for (let item of tabsContent) {
        
        if (this.dataset['target'] != item.dataset['target']) {
            item.style.display = "none";
        } else {
            item.style.display = "block";
        }
    }

    for (let tab of tabs) {
        tab.classList.remove('attracting__tabs-item--active');
    }

    this.classList.add('attracting__tabs-item--active');
}
