let cannonX;
let r, g, b;
let cannonY;
let cannonWidth;
let cannonLength; 
let cannonAngle;
let bullets = [];
function setup() {
  createCanvas(windowWidth, windowHeight);

  cannonX = width/2;
  cannonY = height/2;
  cannonWidth = 100000;
  cannonLength = 100000;
  cannonAngle = 0;
}

function draw() {
  background('#fae');
  displayCannon();
  updateBullets();
}

function displayCannon() {
  push();
  translate(cannonX, cannonY);
  cannonAngle = atan2(mouseY - cannonY, mouseX - cannonX);
  rotate(cannonAngle);
  fill('black');
  rect(0, -cannonWidth/2, cannonLength, cannonWidth);
  fill('black');
  circle(width/2 + 900, height/2 + 900, cannonWidth + 20);
  pop();
}

function mouseDragged() {
  r = random(255);
  g = random(255);
  b = random(255);
  fire();
}

function fire() {
  let thisBullet = {
    x: cannonX,
    y: cannonY,
    r: cannonWidth,
    angle: cannonAngle,
    speed: 2
  };
  bullets.push(thisBullet);
}

function updateBullets() {
  for (let thisBullet of bullets) {
    thisBullet.x += thisBullet.speed * cos(thisBullet.angle);
    thisBullet.y += thisBullet.speed * sin(thisBullet.angle);
    noStroke();
    fill(r, g, b);
    circle(thisBullet.x, thisBullet.y, thisBullet.r);
  }
}