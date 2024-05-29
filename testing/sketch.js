// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let blocks = [];
let spawnBlocks;
let lastSpawned = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  spawnTiles();
}

function spawnTiles() {
  spawnBlocks = random(500, 2000);

  if (millis() > lastSpawned + spawnBlocks) {
    lastSpawned = millis();
    let theBlocks = new FallingBlocks(windowWidth/7*1+5, 0);
    blocks.push(theBlocks);
  }

  for (let theTiles of blocks) {
    if(theTiles.outsideScreen()) {
      let index = blocks.indexOf(theTiles);
      blocks.splice(index, 1);
    }
    else {
      theTiles.update();
      theTiles.display();
    }
  }
}

class FallingBlocks { //'Notes' falling over line
  constructor(x, y) {
    this.speed = random(5);
    this.width = windowWidth/7-10;
    this.height = windowHeight/10;
    this.x = x;
    this.y = y;
    this.dy = 5;
    this.color = color("white");
    this.glow = color("blue");
  }

  display() {
    noStroke();
    fill(this.color);
    drawingContext.shadowBlur = 32; //should make the tiles glow
    drawingContext.shadowColor= this.glow;
    rect(this.x, this.y, this.width, this.height);
    
    
  }

  update() {
    this.move();
    this.outsideScreen();
    // this.onLine();
    // this.offLine();
  }

  move() { //move tiles downward
    this.y += this.dy;
  }

  outsideScreen() {
    return this.y > windowHeight;
  }

  // onLine() {
  //   if (this.y > windowHeight/5*4 - this.height && this.y < windowHeight/5*4 + this.height) {
  //     //console.log("over line");
  //     return true;
      
  //   }
  //   else {
  //     return false;
  //   }
  // }

}
