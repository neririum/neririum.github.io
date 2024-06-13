// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let state = "fun";

function setup() {
  createCanvas(windowWidth, windowHeight);
  if (state === "fun") {
    myButton = new Clickable();     //Create button
    myButton.locate(20, 20);        //Position Button
    myButton.onPress = function(){  //When myButton is pressed
      this.color = "#AAAAFF";       //Change button color
      alert("Yay!");     
  }
             //Show an alert message
}
}

function draw() {
  background("blue");
}

