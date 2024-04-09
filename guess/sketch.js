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
let state = "start screen";
let aliceInfo = [];
let cheshireCatInfo = [];
let madHatterInfo = [];
let heartQueenInfo = [];
let whiteQueenInfo = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  characters();
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
  else if (state === "question") {
    var question = prompt("What do you want to ask?");
    examinePrompt(question);
    //text(question, width/2, height/2);
  }
}

function  examinePrompt(userInput) {
  if (userInput === "eyes") {
    print(aliceInfo.eyecolour, width/2, height/2);
  }
}

function gameScreen() { //Game Screen
  //Alice image
  imageMode(CENTER);
  image(aliceImg, width/6, height/3, width/10, width/10);
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
  //TEXT 
  textSize(30);
  textAlign(CENTER, CENTER);
  text("Ask for either AGE, HAIR, EYES, GENDER, or RACE", width/2, height/3 *2);

  //ask player for input
  
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
  }
  else if (state === "game") {
    state = "question";

  }
}

function characters(){
  let alice = {
    age: "child",
    haircolour: "blonde",
    gender: "female",
    eyecolour: "blue",
    race: "human",
  };
  aliceInfo.push(alice);

  let heartQueen = {
    age: "adult",
    haircolour: "black",
    gender: "female",
    eyecolour: "black",
    race: "playingCard",
  };
  heartQueenInfo.push(heartQueen);

  let whiteQueen = {
    age: "adult",
    haircolour: "white",
    gender: "female",
    eyecolour: "brown",
    race: "chessPiece",
  };
  whiteQueenInfo.push(whiteQueen);

  let madHatter = {
    age: "adult",
    haircolour: "orange",
    gender: "male",
    eyecolour: "yellow",
    race: "human",
  };
  madHatterInfo.push(madHatter);

  let cheshireCat = {
    age: "unknown",
    haircolour: "purple",
    gender: "male",
    eyecolour: "yellow",
    race: "cat",

  };
  cheshireCatInfo.push(madHatter);
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


