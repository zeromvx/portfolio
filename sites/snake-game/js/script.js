const canv = document.getElementById("canvas"); // canvas
const ctx = canv.getContext("2d"); // 2d context
const scoreBox = document.querySelector(".score");

const appleImg = new Image(32, 32);
appleImg.src = "img/apple.png";

let boxSize = 32; // width & height 1 cell
let score = 0;

let xv = 0; // x motion
let yv = 0; // y motion
let cooldown = false; // cooldown for keys

let apple = {
	x: Math.floor(Math.random() * 19 + 1) * boxSize,
	y: Math.floor(Math.random() * 18 + 2) * boxSize,
}; // apple obj, at 1 time, apples generating here ,then calling updateApple coords function

let snake = []; // snake objects array
snake[0] = {
	x: Math.floor(canv.clientWidth / 2),
	y: Math.floor(canv.clientHeight / 2),
};

document.addEventListener("keydown", changeDirection);
let game = setInterval(drawGame, 100); // 30 fps

function drawGame() {
	// canvas settings
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, canv.clientWidth, canv.clientHeight);

	// drawing apple image
	ctx.drawImage(appleImg, apple.x, apple.y);

	updateSnakeCoords();
}

// function for updating snake coords.
// if apple not eaten, delete elem of snake array from end and add new element to start
// if apple eaten, don`t delete elem and add new elem to start
// snake moves cuz we delete and add end and
function updateSnakeCoords() {
	let snakeX = snake[0].x;
	let snakeY = snake[0].y;

	snakeX += xv;
	snakeY += yv;

	// teleports, 32 cuz first string for outputing scores
	if (snakeX > canv.clientWidth) {
		snakeX = 0;
	}
	if (snakeY > canv.clientHeight) {
		snakeY = 0;
	}
	if (snakeX < 0) {
		snakeX = canv.clientWidth;
	}
	if (snakeY < 0) {
		snakeY = canv.clientHeight;
	}

	// drawing snake
	for (let i = 0; i < snake.length; i++) {
		ctx.fillStyle = "grey";
		ctx.fillRect(snake[i].x, snake[i].y, boxSize, boxSize);
	}

	// check for apple eating
	if (snakeX == apple.x && snakeY == apple.y) {
		score++;
		updateAppleCoords();
		scoreBox.innerHTML = score; // updating scoreBox
	} else {
		snake.pop();
	}

	let newSnakeHead = {
		x: snakeX,
		y: snakeY,
	};

	checkTailEat(newSnakeHead, snake);

	snake.unshift(newSnakeHead);
}

// updating apple coords when it called
function updateAppleCoords() {
	apple.x = Math.floor(Math.random() * 19 + 1) * boxSize;
	apple.y = Math.floor(Math.random() * 18 + 2) * boxSize;
}

function checkTailEat(head, body) {
	for (let i = 0; i < body.length; i++) {
		if (head.x == body[i].x && head.y == body[i].y) {
			clearInterval(game);
		}
	}
}

function changeDirection(e) {
	if (cooldown) {
		return false;
	}
	// left arrow
	if (e.keyCode == 37 && !(xv > 0)) {
		xv = -boxSize;
		yv = 0;
	}
	// top arrow
	if (e.keyCode == 38 && !(yv > 0)) {
		xv = 0;
		yv = -boxSize;
	}
	// right arrow
	if (e.keyCode == 39 && !(xv < 0)) {
		xv = boxSize;
		yv = 0;
	}
	// down arrow
	if (e.keyCode == 40 && !(yv < 0)) {
		xv = 0;
		yv = boxSize;
	}

	cooldown = true;

	setTimeout(function () {
		cooldown = false;
	}, 100);
}
