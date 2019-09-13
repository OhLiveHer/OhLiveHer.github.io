let west;
let west2;
let h = 50;

function preload() {
  west = loadImage("assets/west1.png");
  west2 = loadImage("assets/west2.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
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
      west =  
      image(west2, 100, h)  
  
    }
    //else if (keyCode === RIGHT_ARROW) {
  
   // }
  }

  imageMode(CENTER);
  image(west, 100, h);

}



