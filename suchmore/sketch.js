//normal = 50 clicks in 10 seconds or game over, hard is 90 clicks in 10 seconds


let state = "menu";
let r, g, b;
var score = 0;
let timer = 10;
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

  //first = normal mode which is 50 clicks in 10 seconds
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
    
    //a simple timer
    if (millis() > lastTimeCountedDown + 1000) {
      lastTimeCountedDown = millis();
      timer = timer - 1;
      
    }
//if you win the timer will be removed and you will be show text to congratulate you and you will be shown a second number displaying your CPS
//(clicks per second), and after 5 seconds you will be returned to the title screen.      
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
//if you fail you will be given text to belittle you for not being able to click, then after 5 seconds pass you will be returned to the title screen
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



//hard mode (90 clicks in 10 seconds)
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

        
    //the exact same thing as normal but 90
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
    //the exact same thing as normal but 90
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
//the clicker, stating that when you click within a certain area +1 score will be added and the rectangle will switch color everytime it is clicked.
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
//basic menu
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
//menu buttons
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


