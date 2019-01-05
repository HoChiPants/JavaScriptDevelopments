var b;
var p1;
var p2;

function setup()
{
	createCanvas(600,400);
	b = new Ball();
	p1 = new Paddle();
	p2 = new Paddle();
	p1.setX(25);
	p2.setX(width - 25);
}

function draw()
{
	background(0);
	b.update();
	b.checkCollisionsLeft(p1);
	b.checkCollisionsRight(p2);
	var answer = b.edges()
	//console.log(answer);
	if(answer == 1)
	{
		p1.incrementScore();
	}
	else if(answer == 2)
	{
		p2.incrementScore();
	}
	b.show();
	p1.show();
	p2.show();
	fill(255);
	textSize(32);
	text(p1.score, width/2 - 50,30)
	text(p2.score, width/2 + 50,30)
	p1.update();
	p2.update();

}

function keyReleased()
{
	p1.move(0);
	p2.move(0);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    p1.move(-5);
  } else if (keyCode === DOWN_ARROW) {
    p1.move(5);
	}
	else if(keyCode === 87 || keyCode == 119){
		p2.move(-5);
	}
	else if(keyCode === 83 || keyCode === 115){
		p2.move(5);
	}
}
