function Paddle(){
  this.y = height/2;
  this.x = 0;
  this.w = 20;
  this.h = 75;

  this.ySpeed  = 0;
  this.score = 0;

  this.setX = function(x_)
  {
    this.x = x_;
  }

  this.incrementScore = function()
  {
    this.score++;
  }

  this.show = function()
  {
    fill(255);
    rectMode(CENTER);
    rect(this.x,this.y,this.w,this.h);
  }

  this.update = function()
  {
    this.y += this.ySpeed;
    this.y = constrain(this.y,this.h/2,height - this.h/2);
  }

  this.move = function(speed)
  {
    this.ySpeed = speed;
  }
}
