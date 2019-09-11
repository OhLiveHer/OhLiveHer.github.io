// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
} 
function draw() {
  background(0);
  rotateX(frameCount * 0.03);
  rotateZ(frameCount * 0.03);
  fill('#fae');
  ellipsoid(100, 200, 300);
  stroke("black");

}




