let west;
let west2;
let h = 50;
let x;
let y;
let w;
function preload() {
  west = loadImage("assets/west1.png");
  west2 = loadImage("assets/west2.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2
  y = height
  
}

function draw() {
  background('#fae');

  if (keyIsPressed) {
    if (key === 'w') {
      h -= 4;
    }
    else if (key === 's') {
      h += 4;
    }
    else if (key === 'd') {
      
      image(west2, 100, h)  
      if (mouseIsPressed) {
        if (mouseButton === LEFT) {
          stroke(50);
          fill("red");
          ellipse(x, h, 50);
          y = y + random(-2, 2)
          x = x + 6;
          
            
          }
        }
      }
  
    
    //else if (keyCode === RIGHT_ARROW) {
  
   // }
  }

  imageMode(CENTER);
  image(west, 100, h);

}








