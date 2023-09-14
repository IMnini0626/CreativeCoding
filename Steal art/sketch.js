const Y_AXIS = 1;
const X_AXIS = 2;
let gc1, gc2

function setup() {
  createCanvas(400, 400);
  gc1 = color(185, 229, 237)
  gc2 = color(139, 203, 232)
  angleMode(DEGREES);
  ellipseMode(CENTER);
  rectMode(CENTER);
  strokeWeight(2)
}

function draw() {
  background(255);

  //gradient background
  //https://p5js.org/examples/color-linear-gradient.html
  setGradient(0, 0, 400, 150, gc1, gc2, Y_AXIS);

  stroke(0)
  //table
  fill(194, 173, 155)
  rect(200, 350, 500, 400);
  
  //plate
  fill(255);
  ellipse(240, 270, 250, 120);

  //peaches
  fill(247, 241, 183);
  circle(200, 230, 105, 100);
  fill(242, 197, 160);
  circle(300, 240, 120, 125);
  fill(242, 220, 160);
  circle(250, 140, 120, 125);

  fill(0);
  circle(254, 132, 10, 10);
  ellipse(280, 240, 10, 15);

  //lime
  fill(112, 156, 118);
  translate(90, 170);
  rotate(-45);
  ellipse(0, 0, 130, 90);
  
}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
}
