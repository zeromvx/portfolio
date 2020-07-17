const dataBox = document.querySelector(".data"); // list with tasks
const inputForm = document.forms.inputForm;
const inputData = inputForm.inputData;
const errorMessage = document.querySelector(".error-message");
const deleteErrorMessage = document.querySelector(".delete-error-message");

function createTask(name) {
	let newTask = document.createElement("li");

	newTask.dataset["done"] = false;
	newTask.innerHTML = `<label>
                            <input type="checkbox" class="toggle">
                            <span>${name}</span>
                        </label>
                        <button class='delete'></button>`;

	dataBox.prepend(newTask);
}

function deleteTask(target) {
	target.remove();
}

function changeTaskOption(target) {
	// every task has data-done attribute with an initial value of false
	let toDoEl = target.dataset.done;

	toDoEl == "false"
		? (target.dataset.done = "true")
		: (target.dataset.done = "false");

	target.classList.toggle("completed");
}

function renderTasks() {
	const data = localStorage.getItem("todo");

	if (data) {
		dataBox.innerHTML = data;
	}
}

function saveTasks() {
	// choose a selection of data that isn`t done
	const notCompletedTasks = document.querySelectorAll(
		'li[data-done="false"]'
	);
	let newDataBox = "";

	notCompletedTasks.forEach((item) => {
		newDataBox = newDataBox + item.outerHTML + "\n";
	});

	localStorage.setItem("todo", newDataBox);
}

inputForm.addEventListener("submit", (e) => {
	e.preventDefault();

	//checking input for text
	if (inputData.value === "") {
		errorMessage.classList.add("error-message__active");
		return;
	}

	createTask(inputData.value);
	inputData.value = "";
	saveTasks();
});

dataBox.addEventListener("click", (e) => {
	let elem = e.target;

	// delete button click or checkbox click
	if (elem.tagName === "BUTTON" && elem.classList.contains("delete")) {
		deleteTask(elem.parentNode);
		saveTasks();
	} else if (elem.tagName === "INPUT") {
		changeTaskOption(elem.parentNode.parentNode);
		saveTasks();
	}
});

deleteErrorMessage.addEventListener("click", (e) => {
	e.target.parentNode.remove();
});

document.addEventListener("DOMContentLoaded", () => {
	renderTasks();
});
