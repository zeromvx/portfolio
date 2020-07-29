const toggleBtn = document.querySelector(".toggle-btn"); // toggle button
const icon = document.querySelector(".toggle-icon");
const mainContent = document.querySelector(".main"); // main content section
const navList = document.querySelector('.nav__list'); 

function addActiveClasses() {
	toggleBtn.classList.add("active");
	icon.classList.add("open");
	navList.classList.add("nav__list--active");
}

function removeActiveClasses() {
	toggleBtn.classList.remove("active");
	icon.classList.remove("open");
	navList.classList.remove("nav__list--active");
}

toggleBtn.addEventListener("click", function () {
	if (!toggleBtn.classList.contains("active")) {
		addActiveClasses();
	} else {
		removeActiveClasses();
	}
});


// removing header on click outside the header
mainContent.addEventListener("click", function () {
	if (toggleBtn.classList.contains("active")) {
		removeActiveClasses();
	}
});

// removing header on nav links click
navList.addEventListener('click', (e) => {
	if (e.target.tagName === "A"){
		removeActiveClasses();
	}
});