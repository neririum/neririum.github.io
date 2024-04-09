// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let backdrop;
let aliceSquare = [];
let cheshireSquare = [];
let hatterSquare = [];
let qHeartsSquare = [];
let wQueenSquare = [];
let state = "start screen";

function setup() {
  createCanvas(windowWidth, windowHeight);
  createAlice(width/6, height/3);
  createCheshire(width/6 *2, height/3);
  // createHatter(width/6 *3, height/3);
  // createQHearts(width/6 *4, height/3);
  // createWQueen(width/6 *5, height/3);
}

function draw() {
  //load screens for game
  if (state === "start screen") { //SHOW INTRO SCREEN
    background("black");
    showInstruction();
  }
  else if (state === "game") { //SHOW GAME SCREEN
    background(168, 218, 220);
    displayAlice();
    displayCheshire();
    // displayHatter();
    // displayQHearts();
    // displayWQueen();
  }
  //DESCRIPTIONS SCREENS
  // else if (state === "aliceInfo") {
  //   background("yellow");
  // }
  // else if (state === "cheshireCatInfo") {
  //   background("purple");
  // }
  // else if (state === "madHatterInfo") {
  //   background("green");
  // }
  // else if (state === "heartQueenInfo") {
  //   background("red");
  // }
  // else if (state === "whiteQueenInfo") {
  //   background("white");
  // }
}

function displayAlice(){
  imageMode(CENTER);
  image(aliceImg, aliceSquare.x, aliceSquare.y, aliceSquare.side, aliceSquare.side);
}

function createAlice(width, height) {
  let aliceSize = {
    x: width,
    y: height,
    side: windowWidth/10,
    leftX: width - windowWidth/20,
    rightX: width + windowWidth/20,
    upY: height - windowWidth/20,
    downY: height + windowWidth/20,
  };
  aliceSquare.push(aliceSize);
}

function displayCheshire(){
  imageMode(CENTER);
  image(cheshireCatImg, cheshireSquare.x, cheshireSquare.y, cheshireSquare.side, cheshireSquare.side);
}

function createCheshire(width, height) {
  let cheshireSize = {
    x: width,
    y: height,
    side: windowWidth/10,
    leftX: width - windowWidth/20,
    rightX: width + windowWidth/20,
    upY: height - windowWidth/20,
    downY: height + windowWidth/20,
  };
  cheshireSquare.push(cheshireSize);
}

function showInstruction() { //INTRO SCREEN
  //Background
  imageMode(CENTER);
  image(backdrop, width/2, height/2, width, height);
  //Text box #1
  rect(width/2, height/2 -100, 750, 80, 20);
  rectMode(CENTER);
  textSize(42);
  textAlign(CENTER, CENTER);
  text("Guess Who - Alice in Wonderland", width/2, height/2 - 100);
  // Text box #2
  rect(width/2, height/2 , 850, 80, 20);
  rectMode(CENTER);
  textSize(42);
  textAlign(CENTER, CENTER);
  text("Ask 3 questions before guessing the character", width/2, height/2 );
  //Start box
  rect(width/2, height/2 + 200, 150, 80, 20);
  rectMode(CENTER);
  textSize(42);
  textAlign(CENTER, CENTER);
  text("Start", width/2, height/2 + 200);
}

function mousePressed() {
  if (state === "start screen") { //CLICK START BUTTON
    if (mouseX > width/2 - 75 && mouseX < width/2 + 75 && mouseY > height/2 + 160 && mouseY < height/2 + 240) {
      state = "game";
    }
  }
}
      

function preload() { //LOAD IMAGES
  backdrop = loadImage("background.jpg");
  aliceImg = loadImage("alice.png");
  madHatterImg = loadImage("madhatter.png");
  cheshireCatImg = loadImage("cheshirecat.png");
  queenHeartsImg = loadImage("queenhearts.jpg");
  whiteQueenImg = loadImage("whitequeen.jpg");
}
