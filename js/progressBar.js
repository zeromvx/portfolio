const homeContent = document.querySelector(".home__content"),
	nav = document.querySelectorAll(".nav li a"), // nav list
	sections = document.querySelectorAll("section");

	
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


document.addEventListener("scroll", function () {
	let scroll = window.scrollY;
	let opacityScrollIndex = homeContent.offsetTop / scroll - 0.5; // then more window.scrollY then opacity near to 0

	sections.forEach(function (item) {
		let top = item.offsetTop - 100;
		let bottom = item.offsetHeight + top;
		let id = item.id;

		if (scroll > top && scroll < bottom) {
			reassignActiveLink(nav, id);
		}
	});

	// opacity for home__content when scrolling
	homeContent.style.opacity = opacityScrollIndex;
	homeContent.style.transform = `translateY(${scroll}px)`;

	if (scroll > (sections[0].offsetHeight / 2)) {
		homeContent.style.display = "none";
	} else {
		homeContent.style.display = "flex";
	}

	// end opacity for home__content when scrolling
});


