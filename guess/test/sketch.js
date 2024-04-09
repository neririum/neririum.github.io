// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
}
// Gets user input
var name = prompt("What is your name?");
var num = prompt("What is your favorite number? ");

// Uses user input to print out information
println("Hello " + name + "!");
println(num + "?! That's my favorite number too!");

// Prints out the variable type
println("Name is a " + typeof name);
println("Num is a " + typeof num);
