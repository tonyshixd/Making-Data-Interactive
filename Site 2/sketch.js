let NexaB;
let NexaR;
let logo;

let intro="This is Tony weekly diet break down. It is represented by pictures of the food he eats. You willl soon be able organize the foods by category once he updates this website and makes it more sophisticated."
function preload() {
  NexaB = loadFont('assets/NexaB.otf');
  NexaR = loadFont('assets/NexaR.otf');
  logo = loadImage('assets/tony.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight,WEBGL);
}

function draw() {

  background(1000);
  let anchorGrey = color(245);
  background(anchorGrey);

  fill(230);
  rect(windowWidth/2*-1+250, windowHeight/2*-1+260, windowWidth-400, windowHeight);

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
  text("00:00 AM", windowWidth/2*-1+325, windowHeight/2*-1+100+130);

  fill('#383838');
  textFont(NexaB);
  textAlign(RIGHT);
  textSize(16);
  text("12:00 PM",80, windowHeight/2*-1+100+130);

  fill('#383838');
  textFont(NexaB);
  textAlign(RIGHT);
  textSize(16);
  text("12:00 AM", windowWidth/2-150, windowHeight/2*-1+100+130);

  fill('#000000');
  noStroke();
  texture(logo);
  circle(windowWidth/2*-1+180,windowHeight/2*-1+120,40);
}