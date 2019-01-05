var peeps;
var goal;
//p5.disableFriendlyErrors = true;
function setup() {
  createCanvas(windowWidth, windowHeight);
  peeps = new Population(500);
  goal = new Goal();
  frameRate(50);
}

function draw() {
  background(0);
  goal.show();
  if (peeps.totalDeadness()) {
    peeps.calculateFintess();
     peeps.naturalSelection();
     peeps.mutation();
  } else {
    peeps.show();
    peeps.update();
  }

}
