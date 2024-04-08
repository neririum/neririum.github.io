// Guess Who
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let backdrop;
let aliceImg;
let madHatterImg;
let cheshireCatImg;
let queenHeartsImg;
let whiteQueenImg;
let aliceScreen = [];
let hatterScreen = [];
let cheshireScreen = [];
let qHeartsScreen = [];
let wQueenScreen = [];
let state = "start screen";

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if (state === "start screen") { //SHOW INTRO SCREEN
    background("black");
    showInstruction();
  }
  else if (state === "game") { //SHOW GAME SCREEN
    background(168, 218, 220);
    gameScreen();
  }
  else if (state === "aliceInfo") {
    background("white");
  }
}

function gameScreen() { //Game Screen
  //Alice image
  imageMode(CENTER);
  image(aliceImg, aliceScreen.x, aliceScreen.y, aliceScreen.side, aliceScreen.side);
  //Mad Hatter image
  imageMode(CENTER);
  image(madHatterImg, width/6 *2, height/3, width/10, width/10);
  //Cheshire cat image
  imageMode(CENTER);
  image(cheshireCatImg, width/6 *3, height/3, width/10, width/10);
  //Queen of Hearts image
  imageMode(CENTER);
  image(queenHeartsImg, width/6 *4, height/3, width/10, width/10);
  //White queen image
  imageMode(CENTER);
  image(whiteQueenImg, width/6 *5, height/3, width/10, width/10);

  //ask player for input
}

function showAliceImg(){
  let aliceSize = {
    x: windowWidth/6,
    y: windowHeight/3,
    side: windowWidth/10,
    leftX: x - windowWidth/5,
    rightX: x + windowWidth/5,
    upY: y - windowWidth/5,
    downY: y + windowWidth/5,
  };
  aliceScreen.push(aliceSize);
}

function showHatterImg(){
  let hatterSize = {
    x: windowWidth/6*2,
    y: windowHeight/3,
    side: windowWidth/10,
    leftX: x - windowWidth/5,
    rightX: x + windowWidth/5,
    upY: y - windowWidth/5,
    downY: y + windowWidth/5,
  };
  hatterScreen.push(hatterSize);
}

function showCheshireImg(){
  let cheshireSize = {
    x: windowWidth/6*3,
    y: windowHeight/3,
    side: windowWidth/10,
    leftX: x - windowWidth/5,
    rightX: x + windowWidth/5,
    upY: y - windowWidth/5,
    downY: y + windowWidth/5,
  };
  cheshireScreen.push(cheshireSize);
}

function showQHeartsImg(){
  let qHeartsSize = {
    x: windowWidth/6*4,
    y: windowHeight/3,
    side: windowWidth/10,
    leftX: x - windowWidth/5,
    rightX: x + windowWidth/5,
    upY: y - windowWidth/5,
    downY: y + windowWidth/5,
  };
  qHeartsScreen.push(qHeartsSize);
}

function showWQueenImg(){
  let wQueenSize = {
    x: windowWidth/6*5,
    y: windowHeight/3,
    side: windowWidth/10,
    leftX: x - windowWidth/5,
    rightX: x + windowWidth/5,
    upY: y - windowWidth/5,
    downY: y + windowWidth/5,
  };
  wQueenScreen.push(wQueenSize);
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

function preload() { //LOAD IMAGES
  backdrop = loadImage("background.jpg");
  aliceImg = loadImage("alice.png");
  madHatterImg = loadImage("madhatter.png");
  cheshireCatImg = loadImage("cheshirecat.png");
  queenHeartsImg = loadImage("queenhearts.jpg");
  whiteQueenImg = loadImage("whitequeen.jpg");


}

function mousePressed() {
  if (state === "start screen") { //CLICK START BUTTON
    if (mouseX > width/2 - 75 && mouseX < width/2 + 75 && mouseY > height/2 + 160 && mouseY < height/2 + 240) {
      state = "game";
    }
  else if (state === "game") { // CLICK ON IMAGES FOR INFO
    if (mouseX > aliceScreen.leftX && mouseX < rightX && mouseY > upY && mouseY < downY) {
      state = "aliceInfo";
    }
  }
  }
}



//POSSIBLE USE IN FUTURE IGNORE BRAIN TOO SMALL RN
// function startScreenBoxes() {
//   let startBox = {
//     x: width/2,
//     y: height/2 + 200,
//     w: 150,
//     h: 80,
//     cornerCurve: 20,
//   };
//   let nameBox = {
//     x: width/2,
//     y: height/2 - 100,
//     w: 750,
//     h: 80,
//     cornerCurve: 20,
//   };
//   let ruleBox = {
//     x: width/2,
//     y: height/2,
//     w: 850,
//     h: 80,
//     cornerCurve: 20,
//   };
// }

// function characters(){
//   let alice = {
//     age: child,
//     haircolour: blonde,
//     gender: female,
//     eyecolour: blue,
//     race: human,

//   };

//   let heartQueen = {
//     age: adult,
//     haircolour: black,
//     gender: female,
//     eyecolour: black,
//     race: playingCard,
//   };

//   let whiteQueen = {
//     age: adult,
//     haircolour: white,
//     gender: female,
//     eyecolour: brown,
//     race: chessPiece,

//   };

//   let madHatter = {
//     age: adult,
//     haircolour: orange,
//     gender: male,
//     eyecolour: yellow,
//     race: human,

//   };

//   let cheshireCat = {
//     age: unknown,
//     haircolour: purple,
//     gender: male,
//     eyecolour: yellow,
//     race: cat,

//   };
// }


