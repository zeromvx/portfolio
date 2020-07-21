// toggle button
const toggleBtn = document.querySelector(".toggle-icon"); // toggle button
const icon = document.querySelector(".toggle-icon");
const header = document.querySelector(".header"); // header section
const homeContent = document.querySelector(".home__content");
const mainContent = document.querySelector(".main-content"); // main content section
const nav = document.querySelectorAll(".nav li a"); // nav list

const filterArea = document.querySelector(".portfolio__filter"); // filter section
const filterBtns = document.querySelectorAll(".filter__btn");

const mixer = mixitup(".container"); // mixitup activate

// nav progress bar
const sections = document.querySelectorAll("section");

document.addEventListener("scroll", function () {
	let scroll = window.scrollY;

	sections.forEach(function (item) {
		let top = item.offsetTop - 100;
		let bottom = item.offsetHeight + top;
		let id = item.id;

		if (scroll > top && scroll < bottom) {
			reassignActiveLink(nav, id);
		}
	});

	// opacity for home__content when scrolling

	let opacityScrollIndex = homeContent.offsetTop / scroll - 0.5; // then more window.scrollY then opacity near to 0
	homeContent.style.opacity = opacityScrollIndex;

	homeContent.style.transform = `translateY(${scroll}px)`;

	if (scroll > (sections[0].offsetHeight / 2)) {
		homeContent.style.display = "none";
	} else {
		homeContent.style.display = "flex";
	}

	// end opacity for home__content when scrolling
});

function reassignActiveLink(arr, id) {
	arr.forEach(function (item) {
		if (item.classList.contains("active")) {
			item.classList.remove("active");
		}
		if (item.getAttribute("href") == "#" + id) {
			item.classList.add("active");
		}
	});
}

// nav progress bar end


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

