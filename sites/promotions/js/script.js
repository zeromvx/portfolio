const promotionSections = document.querySelectorAll('.promotion__list');    // promotion`s block
const allPromotions = document.querySelector('.promotion--all');        // promotions for all users
const forNewCustomers = document.querySelector('.promotion--new');      // promotions for new users
const switchBtns = document.querySelectorAll('.tab');                   // btn for switch tabs
const preloader = document.querySelector('.preloader');

document.addEventListener("DOMContentLoaded", render);

switchBtns.forEach(item => {
    item.addEventListener('click', changeContent);
});

function render() {

    fetch('https://run.mocky.io/v3/00f6d282-f4ab-4281-b115-d5a7a00fff19')
        .then( res => {

            if (res.ok) {
                preloader.style.display = "none";
                return res.json();
            }
        })
        .then( data => {
            for (let i = data.length - 1; i > -1; i--) {
                
                let promotion = document.createElement('li');   // create new promotion
                promotion.classList.add('promotion');

                promotion.innerHTML = `
                <div class="promotion__logo">
                    <img src="${data[i].heroImageUrl}" alt="logo"/>
                </div>
                <h2 class="promotion__title"> ${data[i].name} </h2>
                <p class="promotion__descr"> ${data[i].description} </p>
                <div class="btn-area"> 
                    <button class="btn btn--term"> ${data[i].termsAndConditionsButtonText} </button>
                    <button class="btn btn--join"> ${data[i].joinNowButtonText} </button>
                </div>`;
                
                allPromotions.innerHTML += promotion.outerHTML;

                //check for promotions for new customers
                if (data[i].onlyNewCustomers) {
                    forNewCustomers.innerHTML += promotion.outerHTML;
                }
            }
        });
}

function changeContent(e) {

    for (let section of promotionSections) {
        
        if (this.dataset['section'] !=  section.dataset['section']) {
            section.style.display = "none";
        } else {
            section.style.display = "block";
        }
    }

    for (let btn of switchBtns) {
        btn.classList.remove('tab--active');
    }

    e.target.classList.add('tab--active');
}