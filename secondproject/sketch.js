let west;
let west2;
let h = 50;
let x;
let y;
let w;
let dx = 5;
let dy = 5;
function preload() {
  west = loadImage("assets/west1.png");
  west2 = loadImage("assets/west2.png");
  drake = loadImage("assets/drake.png");
  br = loadImage("assets/br.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 4
  y = height
  y1 = height / 2
  r = 100
  
  
}

function draw() {
  background('#FF69B4');
  x += dx;
  y1 += dy;

  if (x > width / 2 - r/2 || x < 0 + r/2) {
    dx *= -1
    }
  
  if (y1 > height - r/2 || y1 < 0 + r/2) {
    dy  /=  -1
  }

  image(drake, x, y1, 250, 250)
  imageMode(CENTER)
  
  if (keyIsPressed) {

  }
    if (key === 'w') {
      h -= 4;
      
         
    }
    if (key === 's') {
      h += 4;
    }
    
    if (key === 'd') {
      image(west2, 100, h);

        
      
    }
    else {
      image(west, 100, h);
    }
}
    


  
  
  

            

        
      
  
    
    
  
   












