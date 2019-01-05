class Obsticle{
  constructor()
  {
    this.pos = createVector(width/2,height/2);
    this.wid = 300;
    this.hei = 10;

  }
  draw(){
    rectMode(CENTER);
    fill(255);
    rect(this.pos.x,this.pos.y,this.wid,this.hei);
  }
}
