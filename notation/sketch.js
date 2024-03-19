//notation
// circle moving with terrain

let terrain = [];
let numberOfRects;
let rectWidth;
let x;
let y;
let time = 0;
let deltTime = 0.003;

function setup() {
  createCanvas(windowWidth, windowHeight);
  numberOfRects = width;
  rectWidth = width / numberOfRects;
  generateTerrain();
}

function draw() {
  background(220);

  for (let someRect of terrain) {
    rect(someRect.x, someRect.y, someRect.w, someRect.h);
  }
}

function generateTerrain() {

  for (let x = 0; x < width; x += rectWidth) {
    let theHeight = noise(time) * height;
    spawnRectangle(x, theHeight);
    time += deltTime;

    for (let x = 0; x < width; x += rectWidth) {
      let theHeight = noise(time) * height;
      circle(x, theHeight, 50);
      time += 0.01;
    }
  }
}

function spawnRectangle(leftSide, rectHeight) {
  let thisRect = {
    x: leftSide,
    y: height - rectHeight,
    w: rectWidth,
    h: rectHeight,
  };
  terrain.push(thisRect);
}

function dCircle() {
  for (let x = 0; x < width; x += rectWidth) {
    let theHeight = noise(time) * height;
    circle(x, theHeight, 50);
    time += 0.01;
  }
}