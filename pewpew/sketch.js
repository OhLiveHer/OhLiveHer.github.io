// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
//<img src="west.png" id="image" onclick="rotate();"></img>
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
} 
function draw() {
  background(0);
  rotateX(frameCount * 0.2);
  rotateZ(frameCount * 0.2);
  //cone(150, 210);
  //ellipsoid(200, 300, 300);
  //<img src="west.png" alt="west" width="60" height="35"></img>
  //fill('#fae')
  

}
<button id="button">Click me!</button>
<div id="west">
  <img src="west.png" id="image" onclick="rotate();"></img>
</div> 



