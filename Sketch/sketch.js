function setup() {
  createCanvas(400, 400);
  //background
  background(255, 255, 255);
  stroke(37, 18, 3);
  rectMode(CENTER);
  fill(193, 226, 233);
  strokeWeight(4);
  rect(200, 200, 350);

  //hair
  strokeWeight(3);
  fill(37, 18, 3);
  rect(200, 200, 170, 190, 110, 110, 60, 60);

  //body
  fill(255, 215, 232);
  rect(200, 334, 180, 130, 110, 110, 0, 0);

  //neck
  fill(255, 240, 208)
  rect(200, 250, 40, 80, 30);

  //face
  // bezier(133, 180, 133, 180, 150, 280, 200, 280);
  // bezier(267, 180, 267, 180, 250, 280, 200, 280);

  ellipse(200, 190, 125, 150)

  //eyes
  strokeWeight(2);
  fill(255, 255, 255);
  ellipse(171, 190, 28, 18);
  ellipse(229, 190, 28, 18);
  fill(146,108,69);
  ellipse(171, 190, 13, 18);
  ellipse(229, 190, 13, 18);

  //nose
  noFill();
  bezier(200, 200, 200, 210, 215, 217, 200, 220);

  //mouth
  fill(237, 132, 152);
  arc(200, 232, 30, 30, 0, PI, CHORD);

  //hair--bangs
  
  fill(37, 18, 3);
  // fill(255, 255, 255);
  arc(153, 120, 60, 100, 0, 1.8)
  arc(235, 115, 110, 110, 0.78, 3.14)
  
  
  

}

