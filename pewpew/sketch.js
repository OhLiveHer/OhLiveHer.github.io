let uzi;
let br;
let x;
let y;
let h = 50;
let w = 50;

function preload() {
  uzi = loadImage("assets/uzi.png");
  br = loadImage("assets/pewpew.jpg");
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height/2;
  //imageMode(Corner);
  background(0);
}

function draw() {
  uzi();
  if (keyIsPressed) {
    if (keyCode === 'w') {
      h -= 4;
    }
    if (keyCode === 's') {
      h += 4;
    }
    if (keyCode === 'd') {
      w += 4;
    }
    if (keyCode === 'a') {
      w -= 4;
  }
  
}

}
function uzi() {
  image(uzi, w, h, 50, 50);
}
    




  





