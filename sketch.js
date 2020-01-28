
var noiseoff = 0.0;
var coloroff = 0.0;

let snake;
let rez = 20;
let food;
let w;
let h;

function setup() {
  createCanvas(400, 400);
  w = floor(width / rez);
  h = floor(height / rez);
  frameRate(5);
  snake = new Snake();
  foodLocation();
     for (var x = 0; x < width; x += 20){
    	line(x, 0, x, height);
		 	for (var y = 0; y < height; y += 20) {
    		line(0, y, width, y);
		 }
  	}
}

function foodLocation() {
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y);

}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    snake.setDir(-1, 0);
    background("green");
  } else if (keyCode === RIGHT_ARROW) {
    snake.setDir(1, 0);
    background("blue");
  } else if (keyCode === DOWN_ARROW) {
    snake.setDir(0, 1);
    background("red")
  } else if (keyCode === UP_ARROW) {
    snake.setDir(0, -1);
    background("yellow");
  } else if (key == ' ') {
    snake.grow();
  }


}

function draw() {

  noiseoff += 0.3;
  scale(rez);
  background(noise(coloroff) * 255);
  if (snake.eat(food)) {
    foodLocation();
  }
  snake.update();
  snake.show();

  ref = noise(noiseoff);


  if (snake.endGame()) {
    print("END GAME");
    background(255, 0, 0);
    noLoop();
  }


  noStroke();
  fill(255, 0, 0);
  rect(food.x, food.y, 1, 1);
  coloroff += 0.1;
}