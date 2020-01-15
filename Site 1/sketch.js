let phoneWithSim;

function preload() {
  phoneWithSim = loadModel('assets/phoneWithSim.obj');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(1000);
  let aquaLight = color(183, 217, 247);
  background(aquaLight);
  //rotateX(frameCount * 0.01);
  //rotateY(frameCount * 0.01);
  orbitControl();
  scale(80);
  fill(200, 200, 200)
  strokeWeight(0.5);
  stroke(99);
  model(phoneWithSim);
}