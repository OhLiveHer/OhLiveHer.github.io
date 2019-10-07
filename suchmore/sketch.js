//normal = 50 clicks in 10 seconds or game over, hard is 90 clicks in 10 seconds


let state = "menu";
let r, g, b;
var score = 0;
let timer = 10;

// let lesstime = 1000;
let lastTimeCountedDown = 0;



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
    fill('black')
    text(timer, width/2 - 600, height - 700);
    
    
    if (millis() > lastTimeCountedDown + 1000) {
      lastTimeCountedDown = millis();
      timer = timer - 1;
      
    }

      if (timer <= 0 && score >= 50){
        
        
        fill('#fae')
        rect(width/2 - 600, height - 700, 100, 100);
        textAlign(CENTER, CENTER);
        textSize(50);
        fill(255);
        text(score /10, width/2, height - 200);
        textAlign(CENTER, CENTER);
        textSize(70);
        fill(0);
        text("CONGRATULATIONS YOU HAVE CLICKED!!!!!!!!", width/2, height/2);
        if (timer === -5){
          state = "menu";
        } 
      }

      else if (timer <= 0 && score < 50){
        
        
        fill('#fae')
        rect(width/2 - 600, height - 700, 100, 100);
        textAlign(CENTER, CENTER);
        textSize(50);
        fill(255);
        text(score /10, width/2, height - 200);
        textAlign(CENTER, CENTER);
        textSize(70);
        fill(0);
        text("silly boy you cannot click :( ", width/2, height/2);
        if (timer === -5){
          state = "menu";
        } 
      }

      

 

    }



  
  else if (state === "second") {
    rectMode(CENTER);
    strokeWeight(0);
    stroke(r, g, b);
    fill(r, g, b,);
    rect(x, y, 500, 250);
    
    fill('white');
    text(score, width/2, height - 600);
    fill('black')
    text(timer, width/2 - 600, height - 700);
    
    
    if (millis() > lastTimeCountedDown + 1000) {
      lastTimeCountedDown = millis();
      timer = timer - 1;
      
    }

        
    
      if (timer <= 0 && score >= 90){
        fill('#fae')
        rect(width/2 - 600, height - 700, 100, 100);
        textAlign(CENTER, CENTER);
        textSize(50);
        fill(255);
        text(score /10, width/2, height - 200);
        textAlign(CENTER, CENTER);
        textSize(70);
        fill(0);
        text("CONGRATULATIONS YOU HAVE CLICKED!!!!!!!!", width/2, height/2);
        if (timer === -5){
          state = "menu";
        } 
      }

      else if (timer <= 0 && score < 90){
        
        
        fill('#fae')
        rect(width/2 - 600, height - 700, 100, 100);
        textAlign(CENTER, CENTER);
        textSize(50);
        fill(255);
        text(score /10, width/2, height -200);
        textAlign(CENTER, CENTER);
        textSize(70);
        fill(0);
        text("silly boy you cannot click :( ", width/2, height/2);
        if (timer === -5){
          state = "menu";
        } 
      } 
  }
}
function mousePressed() {
  let d = dist(mouseX, mouseY, x, y);
  if (mouseButton === LEFT){
    if (d < 100) {
      r = random(255);
      g = random(255);
      b = random(255);
      score += 1;
      
    }
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

  textSize(50);
  fill(255);
  text("Normal (50 clicks in 10s) Hard (90 clicks in 10s)", width/2, height/2 -300);
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


