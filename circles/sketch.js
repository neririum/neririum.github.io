// Arrays and Objects Notation
// Circles demo

let ballArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  spawnBall(width/2, height/2);

}

function draw() {
  background(220);
  moveBall();
  displayBall();
}

function moveBalls() {
  for (let ball of ballArray){
    ball.x += ball.dx;
    ball.y += ball.dy;
  }


 //teleport across screen if needed
  if(ball.y > windowHeight){
    ball.y = 0;
  }

  else if(ball.y < windowHeight){
    ball.y = 0;
  }
  

  if (ball.x > windowWidth) {
    ball.x = 0;
  }


}

function displayBalls() {
  for (let ball of ballArray) {
    fill(ball.color);
    circle(ball.x, ball.y, ball.radius*2);
  }
}

function spawnBall(initialX, intialY) {
  let ball = {
    x: initialX,
    y: intialY,
    radius: random(15,30),
    color: color(random(255), random(255), random(255)),
    dx: random(-5,5),
    dy: random(-5,5),
  };
  ballArray.push(ball);
}

function mousePressed() {
  spawnBall(mouseX, mouseY);
}

