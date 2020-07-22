const homeContent = document.querySelector(".home__content");
const nav = document.querySelectorAll(".nav li a"); // nav list
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


