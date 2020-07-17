const search = document.querySelector(".search");
const items = document.querySelectorAll(".data li");
const container = document.querySelector(".container");
const searchBtn = document.querySelector(".btn");

// When we input data, it checks all list`s elements and compare list`s elements with inputed data
search.addEventListener("input", () => {
	let val = search.value;

	if (val != "") {
		items.forEach((item) => {
			let str = item.innerText;

			if (str.indexOf(val) === -1) {
				item.style.display = "none";
				item.innerHTML = item.innerText;
			} else {
				item.style.display = "block";
				container.style.display = "block";
				item.innerHTML = insertMark(str, str.indexOf(val), val.length);
			}
		});
	} else {
		container.style.display = "none";
	}
});

// function for marking matches in text
function insertMark(str, pos, len) {
	return (
		str.slice(0, pos) +
		"<strong>" +
		str.slice(pos, pos + len) +
		"</strong>" +
		str.slice(pos + len)
	);
}

container.addEventListener("click", (event) => {
	if (event.target.tagName !== "LI") return;
	search.value = event.target.innerText;
});

searchBtn.addEventListener("click", () => {
	window.open(`https://yandex.ru/search/?text=${search.value}`, "_blank");
});
