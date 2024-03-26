// Guess Who
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let backdrop;
let state = "start screen";

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if (state === "start screen") {
    background("black");
    showInstruction();
  }
  else if (state === "game") {
    background("blue");
    
  }
}

function showInstruction(){
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

function preload() {
  backdrop = loadImage("background.jpg");
}

function mousePressed() {
  if (state === "start screen") { //click within box
    if (mouseX > width/2 - 75 && mouseX < width/2 + 75 && mouseY > height/2 + 200 && mouseY < height/2 + 280) {
      state = "game";
    }
  }
}

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


