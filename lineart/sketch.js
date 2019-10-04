let shapes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#fae');
} 


function draw() {
  for (let i = 0; i < shapes.length; i++) {
    shapes[i].y += shapes[i].dy;
    //noStroke();
    fill(shapes[i].color);
    ellipse(shapes[i].x, shapes[i].y, shapes[i].r*2, shapes[i].r*2)
  }

}

function mousePressed() {
  let someShape = {
    x: mouseX,
    y: mouseY,
    r: random(10, 200),
    color: color(random(255), random(255), random(255), random(100)),
    dy: random(1, 20)
  };
  
  shapes.push(someShape);
}
  