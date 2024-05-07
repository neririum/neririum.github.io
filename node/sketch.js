// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let points = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  let somePoint = new MovingPoint(width/2, height/2);
  points.push(somePoint);
}

function draw() {
  background("black");

  //draw the line first
  for (let point of points) {
    point.update();
    point.connectTo(points);
    point.display();
  }
  for (let point of points) {
    point.display();
  }
}

//draw the circle after so theyre on top
function mousePressed() {
  let somePoint = new MovingPoint(mouseX, mouseY);
  points.push(somePoint);
}


class MovingPoint {
  constructor(x, y) {
    this.speed = 5;
    this.radius = 15;
    this.maxRadius = 50;
    this.minRadius = 15;
    this.reach = 150;
    this.x = x;
    this.y = y;
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

  update() {
    this.move();
    this.wrapAround();
    this.adjustSize();
  }

  connectTo(pointArray) {
    for (let otherPoint of pointArray) {
      //avoid drawing line to the same point
      if (this !== otherPoint) {
        let pointDistance = dist(this. x, this.y, otherPoint.x, otherPoint.y);
        if (pointDistance < this.reach) {
          stroke(this.color);
          line(this.x, this.y, otherPoint.x, otherPoint.y);
        }
      }
    }
  }
  

  adjustSize() {
    //ajust size with mouse
    let mouseDistance = dist(this.x, this.y, mouseX, mouseY);
    if (mouseDistance < this.reach) {
      let theSize = map(mouseDistance, 0, this.reach, this.maxRadius, this.minRadius);
      this.radius = theSize;
    }
    else {
      this.radius = this.minRadius;
    }
  }

  move() {
    //pick random direction of movement
    let dx = noise(this.xTime);
    let dy = noise(this.yTime);

    //scale the movement speed
    this.dx = map(dx, 0, 1, -this.speed, this.speed);
    this.dy = map(dy, 0, 1, -this.speed, this.speed);

    //move point
    this.x += this.dx;
    this.y += this.dy;

    //move on the graph
    this.xTime += this.deltaTime;
    this.yTime += this.deltaTime;
  }

  wrapAround() {
    //wrap around the screen if you fall off
    if (this.x > width) {
      this.x -= width;
    }
    if (this.x < 0) {
      this.x += width;
    }
    if (this.y < 0) {
      this.y += height;
    }
    if (this.y > height) {
      this.y -= height;
    }
  }
}