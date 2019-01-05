class Target{
  constructor(){
    this.pos = createVector(width/2, 50);

  }
  draw(){
    fill(100,232);
    ellipseMode(CENTER);
    ellipse(this.pos.x,this.pos.y,30,30);
  }
}
