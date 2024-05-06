// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let points = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  let somePoint = new MovingPoint();
  points.push(somePoint);
}

function draw() {
  background(220);
  for (let point of points) {
    point.display();
  }
}

class MovingPoint {
  constructor() {
    this.radius = 15;
    this.x = 0;
    this.y = 0;
    this.xTime = random(1000);
    this.yTime = random(1000);
    this.deltaTime = 0.01;
    this.color = color(random(255), random(255), random(255),);
  }

  display() {
    noStroke();
    fill(this.color);
    circle(this.x, this.y, this.radius*2);
    
  }
}
