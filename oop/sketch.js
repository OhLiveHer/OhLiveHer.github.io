let pablo;
let juan;

let r, g, b;



function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  r = random(255);
  g = random(255);
  b = random(255);
  pablo = new Walker();
  juan = new Walker();
}


function draw() {
  pablo.move();
  pablo.display();
  juan.move();
  juan.display();

  
}

class Walker {
  constructor() {
    this.x = width/2;
    this.y = height/2;
    this.fillColor = color(r, g, b); 
    this.stepSize = 12;
    this.radius = 3;

  }
  display() {
    noStroke();
    circle(this.x, this.y, this.radius * 2);
  }
  move() {
    let choice = random(100);
    if (choice < 25) {
      this.y -= this.stepSize;
      r = random(255);
      g = random(255);
      b = random(255);
      
    }
    else if (choice < 50) {
      this.y += this.stepSize;
      r = random(255);
      g = random(255);
      b = random(255);
    }
    else if (choice < 75) {
      this.x -= this.stepSize;
      r = random(255);
      g = random(255);
      b = random(255);
    }
    else {
      this.x += this.stepSize
      r = random(255);
      g = random(255);
      b = random(255);
    } 

  }
}

function mousePressed();
r = random(255);
g = random(255);
b = random(255);
