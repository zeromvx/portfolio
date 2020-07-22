const toggleBtn = document.querySelector(".toggle-icon"); // toggle button
const icon = document.querySelector(".toggle-icon");
const header = document.querySelector(".header"); // header section
const mainContent = document.querySelector(".main-content"); // main content section

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

