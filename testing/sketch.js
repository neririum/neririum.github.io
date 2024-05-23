// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  drawCircle();
}

function drawCircle() {
  drawingContext.shadowBlur = 100;
  drawingContext.shadowColor = color(0);
  ellipse(mouseX, mouseY, 200, 200);
}