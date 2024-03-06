// Interactive Scene - Pacman
// Jessica
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let pacman;
let scalar = 1.0;
let x;
let y;

function preload() {
  pacman = loadImage("pacman.png");
}

function setup() {
  createCanvas(800,400);
  x = 400;
  y = 250;
}

function draw() {
  background("black");
  //line(windowWidth/2, 0, windowWidth/2, windowHeight);
  //line(0, windowHeight/2, windowWidth, windowHeight/2);
  drawMaze();
  //display pacman
  image(pacman, x, y);
}

function drawMaze(){
  fill("black");
  stroke("blue");
  strokeWeight(4);
  rect(290, 160, 20, 75); //ghost box middle
  rect(490, 160, 20, 75);
  rect(310, 215, 180, 20);
  rect(290, 75, 220, 20); //long bar top middle
  rect(290, 300, 220, 20); //long bar bottom middle
  rect(150, 150, 80, 20); //short bars on left
  rect(150, 225, 80, 20);
  rect(575, 150, 80, 20); //short bars on right
  rect(575, 225, 80, 20);
  rect(75, 50, 20, 300); //long bar on left
  rect(705, 50, 20, 300); //long bar on right
  rect(150, 0, 80, 95); //boxes on left
  rect(150, 305, 80, 95);
  rect(575, 0, 80, 95); //boxes on left
  rect(575, 305, 80, 95);
  rect(290, 0, 220, 20); //boxes middle top and bottom
  rect(290, 380, 220, 20);
}