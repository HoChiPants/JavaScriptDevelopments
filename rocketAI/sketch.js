var peeps
var target
var generation
var obsticle

function setup() {
  createCanvas(windowWidth, windowHeight);
  peeps = new Population(500);
	target = new Target();
	generation = 0;
	obsticle = new Obsticle();
}

function draw() {
  background(0);
	peeps.checkCollisions();
	if(peeps.alive())
	{
		peeps.show();
	}
	else{
		peeps.evaluate();
		peeps.selection();
		generation++;
	}
	text(generation, 5,12);
	target.draw();
	obsticle.draw();
}
