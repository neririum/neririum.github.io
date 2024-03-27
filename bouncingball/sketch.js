// Bouncing ball demo
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let x;
let y;
let dy;
let dx;
let radius = 55;
let r = 0;
let g = 0;
let b = 0;
let state = "start screen";

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  dy = random(-5, 5);
  dx = random(-5, 5);
  changeColour();
  noStroke();
}

function changeColour() {
  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);
}

function drawCircle() {
  //display circle
  fill(r, g, b);
  circle(x, y, radius * 2);
}

function moveCircle() {
  // move circle
  y += dy;
  x += dx;
}

function bounce(){
  // bounce if needed
  if (y + radius >= height || y - radius <= 0) {
    dy = -1 * dy;
    changeColour();
  }
  if (x + radius >= width || x - radius <= 0) {
    dx = -1 * dx;
    changeColour();
  }
  
}

function keyTyped() {
  if (key === "") {
    dy = random(-5, 5);
    dx = random(-5, 5);
  }
  if (key === "c"){
    changeColour();
  }
}

function draw() {
  if (state === "start screen") {
    background("black");
    showInstruction();
  }
  else if (state === "bouncing ball") {
    background(220);
    drawCircle();
    moveCircle();
    bounce();
    
  }
}

function showInstruction(){
  fill("white");
  textSize(42);
  textAlign(CENTER, CENTER);
  text("Click Anywhere To Start", width/2, height/2);
}

function mousePressed(){
  if (state === "start screen"){
    state === "bouncing ball";
  }
}

