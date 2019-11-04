//create a 5x5 grid with an image, then fill it with preset images (also include a random feature)
//they will have x amount of time (probably 5 seconds) to memorize it then the grid will go blank 
//you'll have x amount of time (probably 20ish seconds) to recreate it on the grid
//with the number keys (1-5) you'll pick the color then with the mouse you'll create the image 
//after the time limit is done you will get the percentage of how much you completed
//potentially create 3 modes (5x5, 7x7, 10x10) with 5 or so preset images in each but also a random feature
//timer will go up based off of the size of the grid
//make a creative name (100% necessary)
//ask if all the visual aspects should be in one function or in multiple, different for (grid, timer, colors, etc)


let grid;
let rows = 5;
let cols = 5;


function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = createArray(cols, rows);
}

function draw() {
  background('#fae');
  displayGrid(grid, rows, cols);
  displayGame()
  

}

function displayGrid(grid, windowWidth, windowHeight) {
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
      if (random(100) < 50) {
        randomGrid[x].push(1);
      }
      else {
        randomGrid[x].push(0);
      }
    }
  }
  return randomGrid;
}

function mousePressed() {
  let cellSize = 100;

  let xCoord = floor(mouseX / cellSize);
  let yCoord = floor(mouseY / cellSize);
  
  if (grid[yCoord][xCoord] === 1) {
    grid[yCoord][xCoord] = 0;
  }
  else {
    grid[yCoord][xCoord] = 1;
  }
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