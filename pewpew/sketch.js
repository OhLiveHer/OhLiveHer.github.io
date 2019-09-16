// Project Title
// Your Name
// Date
//
// Extra for Experts:
// Kanye West shoots out random objects from his mouth at drake... 
//except theres a random object that moves in the center of the screen that can block them...
let x;
let y;
let r;
let dx = 5;
let dy = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height/2;
  r = 100;

} 
function draw() {
  background(255);

  x += dx;
  y += dy

  if (x > width - r/2 || x < 0 + r/2) {
    dx *= -1
  }

  if (y > height - r/2 || y < 0 + r/2) {
    dy  /=  -1

  }

  fill(0);
  circle(x, y, r);
}





  





