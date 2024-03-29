let grid;
let rows = 5;
let cols = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = createRandom2dArray(cols, rows);
}

function draw() {
  background('#fae');
  displayGrid(grid, rows, cols);
}
function keyIsPressed() {
  if (key === 'r'){
    grid = createRandom2dArray(cols, rows);
  }
  if (key === 'c'){
    for (let x = 0; x < cols; x++) {
      for(let y = 0; y < rows; y++) {
        grid[y][x] = 1;
      }
    }
  }
}

function mousePressed() {
  let cellSize = width/cols;

  let xCoord = floor(mouseX / cellSize);
  let yCoord = floor(mouseY / cellSize);
  
  if (grid[yCoord][xCoord] === 1) {
    grid[yCoord][xCoord] = 0;
  }
  else {
    grid[yCoord][xCoord] = 1;
  }
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

function createRandom2dArray(cols, rows) {
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