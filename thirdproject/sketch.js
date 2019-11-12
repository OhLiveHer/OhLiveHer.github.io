//create a 5x5 grid with an image, then fill it with preset images (also include a random feature)
//they will have x amount of time (probably 5 seconds) to memorize it then the grid will go blank 
//you'll have x amount of time (probably 20ish seconds) to recreate it on the grid
//with the number keys (1-5) you'll pick the color then with the mouse you'll create the image 
//after the time limit is done you will get the percentage of how much you completed
//potentially create 3 modes (5x5, 7x7, 10x10) with 5 or so preset images in each but also a random feature
//timer will go up based off of the size of the grid
//make a creative name (100% necessary)



let grid;
let rows = 5;
let cols = 5;
let state = "menu";
let w = width / 2;
let h = height / 2;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#fae');
  grid = createArray(cols, rows);
}

function draw() {
  //change menu to game atm
  if (state === "menu"); {
    displayGrid(grid, rows, cols);
    displayGame()
  }
  

}

function displayGrid(grid, w, h) {
  let cellSize = 100;
  for (let y = 0; y < cols; y++) {
    for (let x = 0; x < rows; x++) {
      if (grid[y][x] === 0) {
        fill(255);
      }
      else {
        fill(255);
      }
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}

function createArray(cols, rows) {
  let randomGrid = [];
  for (let x = 0; x < cols; x++) {
    randomGrid.push([]);
    for (let y = 0; y < rows; y++) {
      if (random(100) < 20) {
        randomGrid[x].push('Blue');
      }
      if (random(100) < 40) {
        randomGrid[x].push('Red');
      }
      if (random(100) < 60) {
        randomGrid[x].push('Green');
      }
      if (random(100) < 80) {
        randomGrid[x].push('Yellow');
      }
     if (random(100) < 99) {
        randomGrid[x].push('black');
      }

    }
  }
  return randomGrid;
}



function displayGame() {
  //------------------------------------------
  fill('Blue');
  ellipse(width/2 + 500, height/2 - 300, 75);
  fill('Red');
  ellipse(width/2 + 500, height/2 - 200, 75);
  fill('Green');
  ellipse(width/2 + 500, height/2 - 100, 75);
  fill('Yellow');
  ellipse(width/2 + 500, height/2, 75);
  fill('Black');
  ellipse(width/2 + 500, height/2 + 100, 75);
  //------------------------------------------
}
//buttons
function mousePressed() {
  let d = dist(mouseX, mouseY, width/2 + 500, height/2 - 300);
  if (d < 37) {
    console.log("inside1!")
    
  }
  let d1 = dist(mouseX, mouseY, width/2 + 500, height/2 - 200);
  if (d1 < 37) {
    console.log("inside!2")
    
  }
  let d2 = dist(mouseX, mouseY, width/2 + 500, height/2 - 100);
  if (d2 < 37) {
    console.log("inside3!")
    
  }
  let d3 = dist(mouseX, mouseY, width/2 + 500, height/2);
  if (d3 < 37) {
    console.log("inside4!")
    
  }
  let d4 = dist(mouseX, mouseY, width/2 + 500, height/2 + 100);
  if (d4 < 37) {
    console.log("inside5!")
    
  }
}