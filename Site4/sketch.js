// let australiaTB;
// let canadaTB;
// let germany;
// let indiaTB;
// let italy;
// let japanTB;
// let lithuaniaTB;
// let netherlandTB;
// let new_zealandTB;
// let spainTB;
// let united_kingdomTB;
// let united_statesTB;
let master;
let robotoBlack, robotoReg;
let input;


function preload() {
  //my table is comma separated value "csv"
  //and has a header specifying the columns labels
  // australiaTB = loadTable('/data/australia.csv', 'csv', 'header');
  // canadaTB = loadTable('/data/canada.csv', 'csv', 'header');
  // germany = loadTable('/data/germany.csv', 'csv', 'header');
  // indiaTB = loadTable('/data/india.csv', 'csv', 'header');
  // italy = loadTable('/data/italy.csv', 'csv', 'header');
  // japanTB = loadTable('/data/japan.csv', 'csv', 'header');
  // lithuaniaTB = loadTable('/data/lithuania.csv', 'csv', 'header');
  // netherlandTB = loadTable('/data/netherland.csv', 'csv', 'header');
  // new_zealandTB = loadTable('/data/new_zealand.csv', 'csv', 'header');
  // spainTB = loadTable('/data/spain.csv', 'csv', 'header');
  // united_kingdomTB = loadTable('/data/united_kingdom.csv', 'csv', 'header');
  // united_statesTB = loadTable('/data/united_states.csv', 'csv', 'header');
  masterTB = loadTable('data/master.csv', 'csv', 'header');
  robotoBlack = loadFont('assets/Roboto-Black.ttf');
  robotoReg = loadFont('assets/Roboto-Regular.ttf');

 }

function setup() {
    createCanvas(windowWidth, windowHeight*2);
    textSize(12);
}

function draw() {
    noStroke();
    background(50);
    fill(200);


    // now we're going to create a for loop
    // loops are useful because we can
    for (let i = 0;  i < masterTB.getRowCount(); i++)  {
        // first we'll make a variable that holds the data for each city
        let masterTBRow =masterTB.getRow(i);
        // now we'll draw a rectangle for each city
        // we need a mathematical way to calculate the position of rectangle
        // because we need to change the position of the rectangle each time we loop (i)
        // rect(120*i+50, 50, 100, 100);

        let happinessScore = masterTBRow.getNum("Happiness Score");
        let happinessScale = map(happinessScore,5,6.32,0,255);

        // let's add a label
        fill(255)


        fill(happinessScale);
        ellipse(120*i+180, 500, masterTBRow.getNum("GDP")*100, masterTBRow.getNum("GDP")*100);
        //ellipse(windowWidth/2, windowHeight/2, sqrt(masterTBRow.getNum("GDP")*10000), sqrt(masterTBRow.getNum("GDP")*10000));


        fill('#A3A3A3')

        text(masterTBRow.getString("GDP"),125*i+100,600);
        text(happinessScore,125*i+100,620);
        text(masterTBRow.getString("Country"),125*i+100,360);

        // now about about population
        // rect(120*i, 460, sqrt(myRow.getNum("population")), sqrt(myRow.getNum("population")));
        // text(myRow.getString("city"),120*i,460);

        // how shall we combine population and area to tell a more interesting story?


    }
    fill('#FFFFFF');
    textSize(30);
    textFont(robotoBlack);
    text('Data Visualization Experiment',100,160,windowWidth-200);

    fill('#DDDDDD');
    textSize(12);
    textFont(robotoReg);
    text('n October 2016, more than ten thousand people from 104 countries logged how they were feeling over seven days, creating the largest open-source database of emotions. The data is free to download by any individual, organisation, or government to create more effective mental health initiatives. With over 800,000 people suiciding around the world each year, more effective mental health initiatives are desperately needed.',100,210,windowWidth-200);


}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
