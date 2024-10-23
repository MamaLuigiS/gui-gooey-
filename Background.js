let bg
function setup() {
  createCanvas(600, 650);
  bg = loadImage("trees.jpg")
  
  
}

function draw() {
  background(bg)
  square(30, 20, 100, 20);
}
