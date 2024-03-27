// Guess Who
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//NEXT STEPS
//SHOW ALL FIVE CHARACTERS ON SCREEN 
//YOU CAN CLICK EACH CHARACTER TO SEE THEIR PROFILE & CLICK ANYWHERE TO EXIT
//



let backdrop;
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
    background("blue");
    
  }
}

function showInstruction() { //INTRO SCREEN
  //Background
  imageMode(CENTER);
  image(backdrop, width/2, height/2, width, height);
  //Text box #1
  rect(width/2, height/2 -100, 750, 80, 20);
  rectMode(CENTER, CENTER);
  textSize(42);
  textAlign(CENTER, CENTER);
  text("Guess Who - Alice in Wonderland", width/2, height/2 - 100);
  // Text box #2
  rect(width/2, height/2 , 850, 80, 20);
  rectMode(CENTER, CENTER);
  textSize(42);
  textAlign(CENTER, CENTER);
  text("Ask 3 questions before guessing the character!", width/2, height/2 );
  //Start box
  rect(width/2, height/2 + 200, 150, 80, 20);
  rectMode(CENTER, CENTER);
  textSize(42);
  textAlign(CENTER, CENTER);
  text("Start", width/2, height/2 + 200);
}

function preload() { //LOAD INTRO SCREEN BG
  backdrop = loadImage("background.jpg");
}

function mousePressed() {
  if (state === "start screen") { //CLICK START BUTTON
    if (mouseX > width/2 - 75 && mouseX < width/2 + 75 && mouseY > height/2 + 200 && mouseY < height/2 + 280) {
      state === "game";
    }
  }
}








//POSSIBLE USE IN FUTURE IGNORE BRAIN TOO SMALL RN
// function startScreenBoxes() {
//   let startBox = {
//     x: width/2,
//     y: height/2 + 200,
//     w: 200,
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


