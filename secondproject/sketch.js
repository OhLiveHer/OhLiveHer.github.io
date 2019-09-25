let west;
let west2;
let br;
let h = 50;
let x;
let y;
let w;
let dx = 5;
let dy = 5;
let w2 = 200;
cer = true;

function preload() {
  west = loadImage("assets/west1.png");
  west2 = loadImage("assets/west2.png");
  drake = loadImage("assets/drake.png");
  br = loadImage("assets/br.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 4
  y = height
  y1 = height / 2
  r = 100
  x1 = width / 4
  
  
  
}

function draw() {
  imageMode(CORNER);
  background(br);
  //drake randomly moves
  x += dx;
  y1 += dy;

  if (x > width / 2 - r/2 || x < 0 + r/2) {
    dx *= -1
    }
  
  if (y1 > height - r/2 || y1 < 0 + r/2) {
    dy  /=  -1
  }
  //decreases size of shot(by 10)
  if (mouseIsPressed){
    if (mouseButton === LEFT){
      w2 = w2 -= 10;

    }
  }

  

  
  imageMode(CENTER)
  image(drake, x, y1, 250, 250)
  
  if (keyIsPressed) {
//movement
  }
    if (key === 'w') {
      h -= 4;
      
         
    }
    if (key === 's') {
      h += 4;
      
    }
    
    if (key === 'd') {
      image(west2, 100, h);
      if (cer = true)
        circle(x1, h + 50, w2)
        fill('red')
        x1 = x1 *= 1.03;
        (cer = false)
        if (x1 > windowWidth){
          cer = true;
        
      }


        
      
    }
    else {
      image(west, 100, h);
    }
}
    


  
  
  

            

        
      
  
    
    
  
   












