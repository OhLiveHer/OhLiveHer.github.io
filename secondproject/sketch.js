let west;
let west2;
let h = 50;
let x;
let y;
let w;
function preload() {
  west = loadImage("assets/west1.png");
  west2 = loadImage("assets/west2.png");
  drake = loadImage("assets/drake.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width 
  y = height
  
}

function draw() {
  background('#fae');
  
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
      stroke(50);
      fill("red");
      ellipse(x, y, 50);
      x = x + 6
        
      
    }
    else {
      image(west, 100, h)
    }



      // if (mouseIsPressed) {
      //   if (mouseButton === LEFT) {
      //     stroke(50);
      //     fill("red");
      //     ellipse(x, y, 50, h)
      //     x = x + 6;
      // } 
   

            
          // }
        // }
      
  
    
    
  
   
   
   
   
   
   
}











