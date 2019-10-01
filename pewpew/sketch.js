// Project Title
// Your Name
// Date
//
// Extra for Experts:
// Kanye West shoots out random objects from his mouth at drake... 
//except theres a random object that moves in the center of the screen that can block them...
let trav;
let aaa;
function preload(){
  trav = loadImage("assets/trav.jpg")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}


function draw() {
  background('#fae');
  aaa = makeGrayscale(trav);
  
  image(aaa, 0, 0)
}

function makeGrayscale(sourceImage) {
  let img = createImage(sourceImage.width, sourceImage.height);

  img.loadPixels();
  sourceImage.loadPixels();
  
  for (let x = 0; x < sourceImage.width; x++) {
    for (let y = 0; y < sourceImage.height; y++) {
      let p = sourceImage.get(x, y);
      let r = red(p);
      let g = green(p);
      let b = blue(p);
      
      let average = (r + g + b) / 3;
      
      if  (dist(mouseX, mouseY, x, y) > 100){
        img.set(x, y, color(average, average, average));
      }
      else img.set(x, y, color(r, g, b));
    }
  }
  img.updatePixels();
  return img;
}







  





