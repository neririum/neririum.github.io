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
  else if (state === "guess who") {
    background(220);
    
  }
}

function showInstruction(){
  //fill("white");
  imageMode(CENTER);
  image(backdrop, width/2, height/2, width, height);
  textSize(42);
  textAlign(CENTER, CENTER);
  text("Guess Who - Alice in Wonderland", width/2, height/2 - 100);
  textSize(42);
  textAlign(CENTER, CENTER);
  text("Ask 3 questions before guessing the character!", width/2, height/2 );
}

function preload() {
  backdrop = loadImage("background.jpg");
}

function mousePressed(){
  if (state === "start screen"){
    state= "guess who";
  }
}

function characters(){
  let alice = {
    age: child,
    haircolour: blonde,
    gender: female,
    eyecolour: blue,
    race: human,

  };

  let heartQueen = {
    age: adult,
    haircolour: black,
    gender: female,
    eyecolour: black,
    race: playingCard,
  };

  let whiteQueen = {
    age: adult,
    haircolour: white,
    gender: female,
    eyecolour: brown,
    race: chessPiece,

  };

  let madHatter = {
    age: adult,
    haircolour: orange,
    gender: male,
    eyecolour: yellow,
    race: human,

  };

  let cheshireCat = {
    age: unknown,
    haircolour: purple,
    gender: male,
    eyecolour: yellow,
    race: cat,

  };
}


