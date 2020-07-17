const currencyA = document.querySelector(".converter__item-1"); // select box of currency on top
const currencyB = document.querySelector(".converter__item-2"); // select box of currency on bottom
const countA = document.querySelector(".converter__input-1"); // input of currency`s count on top
const countB = document.querySelector(".converter__input-2"); // input of currency`s count on bottom

const changeBtn = document.querySelector(".change-btn");
const rateBox = document.querySelector(".rate"); // box for outputing data

function calc() {
	const valueA = currencyA.value;
	const valueB = currencyB.value;

	// Sending query to API

	fetch(`https://api.exchangerate-api.com/v4/latest/${valueA}`)
		.then((res) => res.json())
		.then((data) => {
			const rate = data.rates[`${valueB}`];
			rateBox.textContent = `1 ${valueA} = ${rate.toFixed(4)} ${valueB}`;
			countB.value = (countA.value * rate).toFixed(2);
		});
}

// When we clicking on buttons, triggered calc function that send query to api and update data

function listeners() {
	currencyA.addEventListener("change", calc);
	currencyB.addEventListener("change", calc);
	countA.addEventListener("input", calc);
	countB.addEventListener("input", calc);
	// variable for rotating switcher
	let degIndex = 1;

	changeBtn.addEventListener("click", () => {
		[currencyA.value, currencyB.value] = [currencyB.value, currencyA.value];

		changeBtn.style.transform = `rotate(${180 * degIndex}deg)`;
		degIndex === 1 ? (degIndex = 0) : degIndex++;

		calc();
	});
}

document.addEventListener("DOMContentLoaded", () => {
	listeners();
	calc();
});
