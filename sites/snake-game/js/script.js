const canv = document.getElementById("canvas"); // canvas
const ctx = canv.getContext("2d"); // 2d context
const scoreBox = document.querySelector(".score"); // area for outputing score

let score = 0;

let xv = 0; // x motion
let yv = 0; // y motion
let cooldown = false; // cooldown for keys

let cellSize = 20; // 1 cell - 20px
let cellsCount = 20; // 400px - 20 * 20 cells

// apple obj, at 1 time, apples generating here ,then calling updateApple coords function
let apple = {
	x: Math.floor(Math.random() * cellsCount),
	y: Math.floor(Math.random() * cellsCount),
};

// snake objects array
let snake = [];
snake[0] = {
	x: 9,
	y: 9,
};

document.addEventListener("keydown", changeDirection);
let game = setInterval(drawGame, 1000 / 12.5); //

function drawGame() {
	// canvas settings
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, canv.clientWidth, canv.clientHeight);

	drawApple();

	updateSnakeCoords();
}

// drawing apple
function drawApple() {
	ctx.fillStyle = "#ff7979";

	ctx.fillRect(
		apple.x * cellsCount,
		apple.y * cellsCount,
		cellSize - 2,
		cellSize - 2
	);
}

// drawing snake
// snake coords is 0 - 19 for x and y axis`s.
// we have area 400x400. every update we get new snake`s coords, that changed on 1
// for drawing snake we multiply snake`s coords  on area`s cells count
// snake`s cell size is (cellSize - 2) needs for some distance between cells
function drawSnake() {
	
	for (let i = 0; i < snake.length; i++) {
		ctx.fillStyle = "#7ac57c";

		ctx.fillRect(
			snake[i].x * cellsCount,
			snake[i].y * cellsCount,
			cellSize - 2,
			cellSize - 2
		);
	}
}

// function for updating snake coords.
// if apple not eaten, delete elem of snake array from end and add new element to start
// if apple eaten, don`t delete elem and add new elem to start
// snake moves cuz we delete and add end and
function updateSnakeCoords() {
	let snakeX = snake[0].x;
	let snakeY = snake[0].y;

	// snake motions
	snakeX += xv;
	snakeY += yv;

	// teleports
	if (snakeX > cellsCount - 1) {
		snakeX = 0;
	}
	if (snakeY > cellsCount - 1) {
		snakeY = 0;
	}
	if (snakeX < 0) {
		snakeX = cellsCount - 1;
	}
	if (snakeY < 0) {
		snakeY = cellsCount - 1;
	}

	drawSnake();

	// check for apple eating
	if (snakeX == apple.x && snakeY == apple.y) {
		score++;
		updateAppleCoords();
		scoreBox.innerHTML = `Score: ${score}`; // updating scoreBox
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
	apple.x = Math.floor(Math.random() * cellsCount);
	apple.y = Math.floor(Math.random() * cellsCount);
}

function checkTailEat(head, body) {
	for (let i = 0; i < body.length; i++) {
		if (head.x == body[i].x && head.y == body[i].y) {
			clearInterval(game);
			ctx.fillStyle = "black";
			ctx.font = "24px Open-Sans";
			ctx.fillText("Game over", 7 * cellsCount, 9.5 * cellsCount);
			ctx.fillText(
				`Your score: ${score}`,
				6.5 * cellsCount,
				11 * cellsCount
			);
		}
	}
}

function changeDirection(e) {
	if (cooldown) {
		return false;
	}
	// left arrow
	if (e.keyCode == 37 && !(xv > 0)) {
		xv = -1;
		yv = 0;
	}
	// top arrow
	if (e.keyCode == 38 && !(yv > 0)) {
		xv = 0;
		yv = -1;
	}
	// right arrow
	if (e.keyCode == 39 && !(xv < 0)) {
		xv = 1;
		yv = 0;
	}
	// down arrow
	if (e.keyCode == 40 && !(yv < 0)) {
		xv = 0;
		yv = 1;
	}

	cooldown = true;

	setTimeout(function () {
		cooldown = false;
	}, 100);
}
