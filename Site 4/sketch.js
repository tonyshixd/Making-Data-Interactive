let australiaTB;
let canadaTB;
let germany;
let indiaTB;
let italy;
let japanTB;
let lithuaniaTB;
let netherlandTB;
let new_zealandTB;
let spainTB;
let united_kingdomTB;
let united_statesTB;
let master;


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
  masterTB = loadTable('Making-Data-Interactive/Site4/data/master.csv', 'csv', 'header');


 }

function setup() {
    createCanvas(windowWidth, windowHeight);
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
        let happinessScale = map(density,5,6.32,0,255);

        // let's add a label
        fill(255)
        text(happinessScale,120*i,560);
        text(masterTBRow.getString("Country"),120*i,390);

        fill(densityScale);
        ellipse(120*i+50, 440, sqrt(masterTBRow.getNum("GDP")), sqrt(masterTBRow.getNum("GDP")));
        text(myRow.getString("GDP"),120*i,540);

        // now about about population
        // rect(120*i, 460, sqrt(myRow.getNum("population")), sqrt(myRow.getNum("population")));
        // text(myRow.getString("city"),120*i,460);

        // how shall we combine population and area to tell a more interesting story?


    }

}
