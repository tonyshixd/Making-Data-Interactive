let NexaB;
let NexaR;
let logo;
let BF;
let SN1;
let LNCH;
let SN2;
let DNR;
let intro = "This is Tony weekly diet break down. It is represented by pictures of the food he eats. You willl soon be able organize the foods by category once he updates this website and makes it more sophisticated."
function preload() {
  NexaB = loadFont('assets/NexaB.otf');
  NexaR = loadFont('assets/NexaR.otf');
  logo = loadImage('assets/tony.jpg');
  BF = loadImage('assets/BF.png');
  SN1 = loadImage('assets/SN1.png');
  LNCH = loadImage('assets/LNCH.png');
  SN2 = loadImage('assets/SN2.png');
  DNR = loadImage('assets/DNR.png'); 
}

function setup() {
  createCanvas(windowWidth, windowHeight,WEBGL);
}

function draw() {

  background(1000);
  let anchorGrey = color(245);
  background(anchorGrey);

  let bcx = windowWidth/2*-1+250;
  let bcw = windowWidth-400;

  fill(255);
  rect(bcx, windowHeight/2*-1+260, bcw, windowHeight);

  fill('#383838');
  textFont(NexaB);
  textAlign(LEFT);
  textSize(36);
  text("Tony's Weekly Diet", windowWidth/2*-1+250, windowHeight/2*-1+130);

  fill('#383838');
  textFont(NexaB);
  textAlign(LEFT);
  textSize(11);
  text(intro, windowWidth/2*-1+650, windowHeight/2*-1+105, 500, 80)

  fill('#000000');
  noStroke();
  texture(logo);
  circle(windowWidth/2*-1+180,windowHeight/2*-1+120,40);

  fill('#383838');
  textFont(NexaB);
  textAlign(RIGHT);
  textSize(16);
  text("Monday", windowWidth/2*-1+200, windowHeight/2*-1+100+200);

  fill('#383838');
  textFont(NexaB);
  textAlign(RIGHT);
  textSize(16);
  text("Tuesday", windowWidth/2*-1+200, windowHeight/2*-1+100+280);

  fill('#383838');
  textFont(NexaB);
  textAlign(RIGHT);
  textSize(16);
  text("Wednesday", windowWidth/2*-1+200, windowHeight/2*-1+100+360);

  fill('#383838');
  textFont(NexaB);
  textAlign(RIGHT);
  textSize(16);
  text("Thursday", windowWidth/2*-1+200, windowHeight/2*-1+100+440);

  fill('#383838');
  textFont(NexaB);
  textAlign(RIGHT);
  textSize(16);
  text("Friday", windowWidth/2*-1+200, windowHeight/2*-1+100+520);

  fill('#383838');
  textFont(NexaB);
  textAlign(RIGHT);
  textSize(16);
  text("MORNING", windowWidth/2*-1+325, windowHeight/2*-1+100+130);

  fill('#383838');
  textFont(NexaB);
  textAlign(CENTER);
  textSize(16);
  text("NOON",60, windowHeight/2*-1+100+130);

  fill('#383838');
  textFont(NexaB);
  textAlign(RIGHT);
  textSize(16);
  text("EVENING", windowWidth/2-150, windowHeight/2*-1+100+130);

  fill('#000000');
  noStroke();
  texture(logo);
  circle(windowWidth/2*-1+180,windowHeight/2*-1+120,40);

  fill('#000000');
  noStroke();
  texture(BF);
  rect(windowWidth/2*-1+260,windowHeight/2*-1+100+180,bcw/5.8,bcw/5.8/0.39);

  fill('#000000');
  noStroke();
  texture(SN1);
  rect(windowWidth/2*-1+460,windowHeight/2*-1+100+180,bcw/8,bcw/8/0.82565789470);

  fill('#000000');
  noStroke();
  texture(LNCH);
  rect(windowWidth/2*-1+610,windowHeight/2*-1+100+180,bcw/5.6,bcw/5.6/0.3895463511);

  fill('#000000');
  noStroke();
  texture(SN2);
  rect(windowWidth/2*-1+790,windowHeight/2*-1+100+180,bcw/6.5,bcw/6.5/0.3559139785);

  fill('#000000');
  noStroke();
  texture(DNR);
  rect(windowWidth/2*-1+900,windowHeight/2*-1+100+165,bcw/4,bcw/4/0.5491209928);














}