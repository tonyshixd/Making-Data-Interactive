function preload () {
  img = loadImage('assets/006.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight,WEBGL);
}

function draw() {

  background(1000);
  let anchorGrey = color(255,245,200);
  background(anchorGrey);

// Picture Frame

  fill('#FFFFFF');
  noStroke();
  rectMode(CENTER)
  rect(0,0,600,750);

  fill('#ebebeb');
  noStroke();
  rectMode(CENTER)
  rect(0,0,560,700);

  fill('#f9f9f9');
  noStroke();
  rectMode(CENTER)
  rect(0,0,540,675);

  fill('#F4F4F4');
  texture(img);
  noStroke();
  rectMode(CENTER)
  rect(0,0,480,660);

// Painting

  angleMode(DEGREES);

  fill('#2A162C');
  noStroke();
  rectMode(CENTER);
  rect(6,47,365,50);

  fill('#000000');
  noStroke();
  rectMode(CENTER);
  rotate(34.0);
  rect(-210,0,21,102);

  fill('#000000');
  noStroke();
  rectMode(CENTER);
  rotate(-4.0);
  rect(-223,-120,13,94);

  fill('#000000');
  noStroke();
  rectMode(CENTER);
  rotate(2.68);
  rect(-239,-122,12,90);

  fill('#000000');
  noStroke();
  rectMode(CENTER);
  rotate(-2.46);
  rect(-201,-170,10,19);

  fill('#000000');
  noStroke();
  rectMode(CENTER);
  rect(-184,-190,12,16);

  fill('#000000');
  noStroke();
  rectMode(CENTER);
  rect(-183,-150,9,60);

  fill('#000000');
  noStroke();
  rectMode(CENTER);
  rotate(93.78);
  rect(-207,78,8,17);
  rotate(-124);

  fill('#DCAA2E');
  noStroke();
  rectMode(CENTER);
  rotate(126);
  rect(-225,87,17,27);
  // rotate(-126);

  fill('#263D85');
  noStroke();
  rectMode(CENTER);
  // rotate(126);
  rect(-174,83,11,16);
  // rotate(-126);

  fill('#263D85');
  noStroke();
  rectMode(CENTER);
  // rotate(126);
  rect(-189,91,6,32);
  // rotate(-126);

  fill('#263D85');
  noStroke();
  rectMode(CENTER);
  // rotate(126);
  rect(-242,85,9,7);
  // rotate(-126);

  fill('#263D85');
  noStroke();
  rectMode(CENTER);
  // rotate(126);
  rect(-252,80,9,2);
  // rotate(-126);

  fill('#263D85');
  noStroke();
  rectMode(CENTER);
  // rotate(126);
  rect(-252,84,10,3);
  rotate(-126);

  fill('#437C4B');
  noStroke();
  rectMode(CENTER);
  rotate(26.67);
  rect(-130,-71,57,245);
  rotate(-26.67);

  fill('#DCAA2E');
  noStroke();
  rectMode(CENTER);
  rotate(33.15);
  rect(47,-231,13,13);
  // rotate(-33.15);

  fill('#DCAA2E');
  noStroke();
  rectMode(CENTER);
  // rotate(33.15);
  rect(38,-207,22,22);
  // rotate(-33.15);

  fill('#DCAA2E');
  noStroke();
  rectMode(CENTER);
  // rotate(33.15);
  rect(51,-168,53,36);
  // rotate(-33.15);

  fill('#DCAA2E');
  noStroke();
  rectMode(CENTER);
  // rotate(33.15);
  rect(13,-186,11,60);
  // rotate(-33.15);

  fill('#DCAA2E');
  noStroke();
  rectMode(CENTER);
  // rotate(33.15);
  rect(0,-150,12,23);
  // rotate(-33.15);

  fill('#DCAA2E');
  noStroke();
  rectMode(CENTER);
  // rotate(33.15);
  rect(-8,-220,15.7,96.6);
  // rotate(-33.15);

  fill('#B72224');
  noStroke();
  rectMode(CENTER);
  // rotate(33.15);
  rect(-22,-60,5,378.3);
  // rotate(-33.15);

  fill('#DCAA2E');
  noStroke();
  rectMode(CENTER);
  // rotate(33.15);
  rect(-10,114,6,23);
  // rotate(-33.15);

  fill('#DCAA2E');
  noStroke();
  rectMode(CENTER);
  // rotate(33.15);
  rect(3,126,9.6,19.7);
  // rotate(-33.15);

  fill('#B72224');
  noStroke();
  rectMode(CENTER);
  // rotate(33.15);
  rect(-41,183,22,34);
  // rotate(-33.15);

  fill('#B82A28');
  noStroke();
  rectMode(CENTER);
  // rotate(33.15);
  rect(-62,195,31.3,109.6);
  // rotate(-33.15);

  fill('#B72224');
  noStroke();
  rectMode(CENTER);
  // rotate(33.15);
  rect(-34,267,10.6,79.6);
  // rotate(-33.15);

  fill('#DCAA2E');
  noStroke();
  rectMode(CENTER);
  // rotate(33.15);
  rect(-16,263,9.1,24.9);
  // rotate(-33.15);

  fill('#DCAA2E');
  noStroke();
  rectMode(CENTER);
  // rotate(33.15);
  rect(-5,269,9.3,71.1);
  // rotate(-33.15);

  fill('#DCAA2E');
  noStroke();
  rectMode(CENTER);
  // rotate(33.15);
  rect(12,239,18,17);
  // rotate(-33.15);

  fill('#000000');
  noStroke();
  rectMode(CENTER);
  // rotate(33.15);
  rect(48,275,50,59);
  // rotate(-33.15);

  fill('#DCAA2E');
  noStroke();
  rectMode(CENTER);
  // rotate(33.15);
  rect(132,225,18,106);
  // rotate(-33.15);

  fill('#D7931A');
  noStroke();
  rectMode(CENTER);
  // rotate(33.15);
  rect(117,215,19,109);
  // rotate(-33.15);

  fill('#000000');
  noStroke();
  rectMode(CENTER);
  // rotate(33.15);
  rect(101,205,26,124);
  // rotate(-33.15);

  fill('#D7931A');
  noStroke();
  rectMode(CENTER);
  // rotate(33.15);
  rect(79,200,21,150);
  // rotate(-33.15);

  fill('#B82A28');
  noStroke();
  rectMode(CENTER);
  // rotate(33.15);
  rect(147,171,13,102);
  // rotate(-33.15);

  fill('#D7931A');
  noStroke();
  rectMode(CENTER);
  // rotate(33.15);
  rect(164,159,12,50);
  rotate(-33.15);

  fill('#DCAA2E');
  noStroke();
  rectMode(CENTER);
  // rotate(0);
  rect(136,103,135,15);
  // rotate(0);

  fill('#B82A28');
  noStroke();
  rectMode(CENTER);
  // rotate(0);
  rect(-96,138,27,27);
  // rotate(0);

  fill('#DCAA2E');
  noStroke();
  rectMode(CENTER);
  rotate(352);
  rect(122,140,55,9);
  // rotate(-352);

  fill('#DCAA2E');
  noStroke();
  rectMode(CENTER);
  // rotate(352);
  rect(135,154,20,9);
  rotate(-352);

  fill('#D5949A');
  noStroke();
  rectMode(CENTER);
  // rotate(352);
  quad(158,143,185,166,130,216,112,199);

  fill('#263D85');
  noStroke();
  rectMode(CENTER);
  rotate(33.69);
  rect(28,-49,157,167);
  rotate(-33.69);

  //Clipping

  fill('#FFFFFF');
  noStroke();
  rectMode(CENTER)
  rect(0,299,480,62);

  fill('#FFFFFF');
  noStroke();
  rectMode(CENTER)
  rect(0,-309,480,42);

  fill('#FFFFFF');
  noStroke();
  rectMode(CENTER)
  rect(235,0,15,660);

  fill('#FFFFFF');
  noStroke();
  rectMode(CENTER)
  rect(-235,0,15,660);
}

























