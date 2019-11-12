
// OOP Bullet

let theFireworks = [];
let r, g, b;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  for (let i = theFireworks.length - 1; i >= 0; i--) {
    theFireworks[i].move();
    if (theFireworks[i].isDone()) {
      theFireworks.splice(i, 1);
    }
    theFireworks[i].display();
  }

  // If you want to spam the screen when holding down the mouse, use this...

  // if (mouseIsPressed) {
  //   let myBullet = new Bullet(mouseX, mouseY, random(-3,3), random(-3, 3), 10);
  //   theBullets.push(myBullet);
  // }

}

function mouseDragged() {
  r = random(255);
  g = random(255);
  b = random(255);
  for (let i = 0; i < 444; i++) {
    let myFirework = new Particle(mouseX, mouseY, random(-5, 5), random(-5, 5), 10);
    theFireworks.push(myFirework);
  }

}

class Particle {
  constructor(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.alpha = 255;
    this.gravity = 0.1;
  }

  display() {
    noStroke();
    fill(r, g, b, this.alpha);
    circle(this.x, this.y, this.radius * 2);
  }

  move() {
    this.dy += this.gravity;
    this.x += this.dx;
    this.y += this.dy;
    this.alpha -= 1;
  }
  isDone() {
    return this.alpha <= 0;
  }

}
