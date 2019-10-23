let shapes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#fae');
} 


function draw() {
  for (let i = shapes.length - 1; i > 0; i++) {

    if (shapes[i].y - shapes[i].r > height) {
      shapes.splice(i, 1);

    }
    else {
      shapes[i].y += shapes[i].dy;
      //noStroke();
      fill(shapes[i].color);
      ellipse(shapes[i].x, shapes[i].y, shapes[i].r*2, shapes[i].r*2)

    }
  }

}

function mouseClicked() {
  let someShape = {
    x: mouseX,
    y: mouseY,
    r: random(10, 200),
    color: color(random(255), random(255), random(255), random(100)),
    dy: random(1, 20)
  };
  
  shapes.push(someShape);
}
  