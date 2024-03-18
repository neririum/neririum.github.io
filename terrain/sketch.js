// Terrain Generation
// Object notation and arrays demo

let terrain = [];
let numberOfRects;
let rectWidth;

function setup() {
  createCanvas(windowWidth, windowHeight);
  numberOfRects = 20;
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
  let time = 0;
  let deltaTime = 0.01;

  for (let x = 0; x < width; x += rectWidth) {
    let theHeight = noise(time) *height;
    spawnRectangles(x, theHeight);
  }

}

function spawnRectangles(leftSide, rectHeight) {
  let thisrect = {
    x: leftSide,
    y: height-rectHeight,
    w: rectWidth,
    h: rectHeight,
  }
  terrain.push(thisrect);
}
