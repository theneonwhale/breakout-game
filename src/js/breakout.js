//canvas and ball
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 1;
let dy = -1;
const ballRadius = 10;
const randomColor = randomColorRGB();

//paddle
const paddleHeight = 10;
const paddleWidth = 60;
let paddleX = (canvas.width - paddleWidth) / 2;
let rightPressed = false;
let leftPressed = false;

//ball
function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = randomColor;
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawPaddle();

  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
    randomColorRGB();
  }

  if (
    y + dy > canvas.height - ballRadius - paddleHeight ||
    y + dy < ballRadius
  ) {
    dy = -dy;
    randomColorRGB();
  }

  x += dx;
  y += dy;

  if (rightPressed && paddleX < canvas.width - paddleWidth) {
    paddleX += 5;
  } else if (leftPressed && paddleX > 0) {
    paddleX -= 5;
  }
}

//paddle
function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = randomColor;
  ctx.fill();
  ctx.closePath();
}

function randomColorRGB() {
  const random = (min, max) => Math.round(Math.random() * (max - min) + min);

  const r = random(0, 255);
  const g = random(0, 255);
  const b = random(0, 255);

  ctx.fillStyle = `rgb(${r},${g},${b})`;

  // return `rgb(${r},${g},${b})`;
}

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

function keyDownHandler(e) {
  if (e.keyCode == 39) {
    rightPressed = true;
  } else if (e.keyCode == 37) {
    leftPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.keyCode == 39) {
    rightPressed = false;
  } else if (e.keyCode == 37) {
    leftPressed = false;
  }
}

const intervalId = setInterval(draw, 10);
