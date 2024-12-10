let balls = [];

function setup() {
  createCanvas(800, 600);
  noStroke();
}

function draw() {
  background(30);
  for (let ball of balls) {
    ball.move();
    ball.display();
  }
}

function mousePressed() {
  balls.push(new Ball(mouseX, mouseY));
}

class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = random(20, 70);
    this.xSpeed = random(-3, 3);
    this.ySpeed = random(-3, 3);
    this.color = color(random(100, 255), random(100, 255), random(100, 255));
  }

  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    // Bounce off walls
    if (this.x < 0 || this.x > width) {
      this.xSpeed *= -1;
    }
    if (this.y < 0 || this.y > height) {
      this.ySpeed *= -1;
    }
  }

  display() {
    fill(this.color);
    ellipse(this.x, this.y, this.size);
  }
}
