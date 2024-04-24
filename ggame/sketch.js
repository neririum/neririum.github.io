// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let grid = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ,1 ,1], //MAIN SCREEN
  [1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 2, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 2, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 2, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1 ,1 ,1]];

let maze = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //MAZE GAME
  [1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1],
  [1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1],
  [1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1],
  [1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1],
  [1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];
let cellSize;
const GRID_SIZE = 20;
const PLAYER = 9;
const OPENTILE = 0;
const IMPASSIBLE = 1;
const KEY = 2;
const LOCK = 4;
let player = {
  x: 10,
  y: 19,
};
let pathImg;
let wallImg;
let fogImg;
let chestBg;
let mazeBg;
let quizBg;
let replicateBg;
let keyImg;
let lockImg;
let state = "mainRoom";
            
function setup() {
  //make the canvas the largest square that you can...
  if (windowWidth < windowHeight) {
    createCanvas(windowWidth, windowWidth);
  }
  else {
    createCanvas(windowHeight, windowHeight);
  }

  cellSize= height/grid.length;

  //add player to MAIN SCREEN
  grid[player.y][player.x] = PLAYER;
}

function draw() {
  //CHANGE SCREEN DEPENDING ON STATE
  if (state === "mainRoom") { 
    background(220);
    displayGrid();
  }
  else if (state === "mazeRoom") {
    image(mazeBg,0, 0, windowWidth, windowHeight);
  }
  else if (state === "chestRoom") {
    image(chestBg, 0, 0, windowWidth, windowHeight);
  }
  else if (state === "quizRoom") {
    image(quizBg, 0, 0, windowWidth, windowHeight);
  }
  else if (state === "replicateRoom") {
    image(replicateBg, 0, 0, windowWidth, windowHeight);
  }
}

function preload() {
  pathImg = loadImage("tile.png");
  wallImg = loadImage("brick.png");
  fogImg = loadImage("shadow.jpg");
  mazeBg = loadImage("maze_background.png");
  chestBg = loadImage("chest_background.jpg");
  quizBg = loadImage("quiz_background.jpg");
  replicateBg = loadImage("replicate_background.jpg");
  keyImg = loadImage("key.png");
  lockImg = loadImage("lock.png");
}

function windowResized() {
  //make the canvas the largest square that you can...
  if (windowWidth < windowHeight) {
    resizeCanvas(windowWidth, windowWidth);
  }
  else {
    resizeCanvas(windowHeight, windowHeight);
  }

  cellSize = height/grid.length;
}

function displayGrid() { //MAIN SCREEN GRID
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === IMPASSIBLE){
        fill("black");
        image(wallImg, x * cellSize, y * cellSize, cellSize);
      }
      else if(grid[y][x] === OPENTILE) {
        fill("white");
        image(pathImg, x * cellSize, y * cellSize, cellSize);
      }
      else if (grid[y][x] === PLAYER) {
        fill("red");
        square(x * cellSize, y * cellSize, cellSize);
      }
      else if(grid[y][x] === KEY) {
        image(keyImg, x*cellSize, y*cellSize, cellSize);
      }
      else if(grid[y][x] === LOCK) {
        image(lockImg, x*cellSize, y*cellSize, cellSize);
      }
    }
  }
}

function keyPressed() {
  //MOVE PLAYER
  if (key === "w") {
    movePlayer(player.x + 0, player. y - 1); //0 on x-axis, -1 on y-axis
  }

  if (key === "s") {
    movePlayer(player.x + 0,  player. y + 1); //0 on x-axis, 1 on y-axis
  }

  if (key === "d") {
    movePlayer(player.x + 1, player. y + 0); //1 on x-axis, 0 on y-axis
  }

  if (key === "a") {
    movePlayer(player.x - 1,  player. y + 0); //-1 on x-axis, 0 on y-axis
  }

}

function movePlayer(x, y) {

  //dont move off the grid and only move into open tiles
  if (x < GRID_SIZE && y < GRID_SIZE &&
    x >= 0 && y >= 0 && grid[y][x] === OPENTILE) {
    //previous player location
    let oldX = player.x;
    let oldY = player.y;

    //move the player
    player.x = x;
    player.y = y;

    //reset old location to be an empty tile
    grid[oldY][oldX] = OPENTILE;

    grid[player.y][player.x] = PLAYER;
  }

}


            