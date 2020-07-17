// toggle button
const toggleBtn = document.querySelector(".toggle-icon"); // toggle button
const header = document.querySelector(".header"); // header section
const icon = document.querySelector(".toggle-icon");

const mainContent = document.querySelector(".main-content"); // main content section
const nav = document.querySelectorAll(".nav li a"); // nav list

const filterArea = document.querySelector(".portfolio__filter"); // filter section
const filterBtns = document.querySelectorAll(".filter__btn");

const mixer = mixitup(".container"); // mixitup activate

// adaptive menu listeners
toggleBtn.addEventListener("click", function () {
	if (!toggleBtn.classList.contains("active")) {
		toggleBtn.classList.add("active");
		icon.classList.add("open");
		header.style.left = "0";
	} else {
		toggleBtn.classList.remove("active");
		icon.classList.remove("open");
		header.style.left = "-100%";
	}
});

mainContent.addEventListener("click", function () {
	if (toggleBtn.classList.contains("active")) {
		toggleBtn.classList.remove("active");
		icon.classList.remove("open");
		header.style.left = "-100%";
	}
});
// adaptive menu listeners end

filterArea.addEventListener("click", function (e) {
	if (e.target.tagName == "BUTTON") {
		for (let i = 0; i < filterBtns.length; i++) {
			filterBtns[i].classList.remove("active");
		}
		e.target.classList.add("active");
	}
});

// nav progress bar

document.addEventListener("scroll", function () {
	const sections = document.querySelectorAll("section");

	sections.forEach(function (item, i) {
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
	arr.forEach(function (item, i) {
		item.classList.toggle("active");
	});
}

// nav progress bar end
