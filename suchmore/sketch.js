//normal = 30 clicks in 5 seconds or game over, hard is 50 clicks in 5 seconds


let state = "menu";
let r, g, b;
var score = 0;
let timer = 5;


function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height/2;
  r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {
  background("#fae");
  if (state === "menu") {
    showMenu();
    checkIfButtonClicked();

  }

  
  else if (state === "first") {
    rectMode(CENTER);
    strokeWeight(0);
    stroke(r, g, b);
    fill(r, g, b,);
    rect(x, y, 500, 250);
    
    fill('white');
    text(score, width/2, height - 600);
    text(timer, width/2 - 600, height - 700);
    if (frameCount % 60 == 0 && timer > 0) {
      timer -= 1;
    }
      if (timer = 0 && score != 30){
        state = "menu";
    }
      else if (timer = 0 && score === 30){
        textAlign(CENTER, CENTER);
        size(500);
        text("you win!");

    }


    





  }
  else if (state === "second") {
    text("Maybe this will have something too :)", width/2, height/2 - 100) 
    
    size(100)

  }
}
function mousePressed() {
  let d = dist(mouseX, mouseY, x, y);
  if (d < 100) {
    r = random(255);
    g = random(255);
    b = random(255);
    score += 1;
    
  }
}

function showMenu() {
  
  rectMode(CENTER);
  fill("black")
  rect(width/2, height/2 - 100, 400, 150);
  textAlign(CENTER, CENTER);
  textSize(50);
  fill(255);
  text("Normal", width/2, height/2 - 100)
  
  fill("black")
  rect(width / 2, height / 2 + 100, 400, 150);
  textSize(50);
  fill(255);
  text("Hard", width/2, height/2 + 100);
}
function checkIfButtonClicked() {
  if (mouseIsPressed) {
    if (mouseX > width / 2 - 200 && mouseX < width/2 + 200 &&
      mouseY > height/2 - 175 && mouseY < height/2 + 175) {
        state = "first";      
      }

    if (mouseX > width / 2 - 200 && mouseX < width/2 + 200 &&
      mouseY > height/2 + 100 - 75 && mouseY < height/2 + 100 +75) {
        state = "second";
    
    }
      
  }

}


