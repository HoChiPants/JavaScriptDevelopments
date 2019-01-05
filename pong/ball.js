function Ball(){
  this.x = width/2;
  this.y = height/2;
  this.r = 12
  var angle = random(-PI/4,PI/4);
  this.xSpeed = 5*cos(angle);
  this.ySpeed = 5*sin(angle);

  this.show = function(){
    fill(255);
    ellipse(this.x,this.y,this.r*2,this.r*2);
  }

  this.update = function(){
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }

  this.edges = function(){
  	if(this.y < this.r || this.y > height-this.r)
    {
      this.ySpeed *= -1;
    }
    if(this.x < this.r)
    {
      this.reset();
      return 1;
    }
    if(this.x > width-this.r)
    {
      this.reset()
      return 2;
    }
    return 3;
  }
  this.reset = function(){
    this.x = width/2;
    this.y = height/2;
    angle = random(-PI/4,PI/4);
    this.xSpeed = 5*cos(angle);
    this.ySpeed = 5*sin(angle);
    if(random(1) < .5)
    {
      this.xSpeed *= -1;
    }
  }

  this.checkCollisionsLeft = function(player)
  {
    if((this.y < player.y + player.h/2 + 15) && (this.y > player.y - player.h / 2 - 15) && (this.x - this.r < player.x + player.w /2))
    {
      if(this.x > player.x - player.w/2)
      {
      var diff = this.y - (player.y - player.h/2);
      var rad = radians(135);
      var angle = map(diff, 0, player.h, -rad,rad);
      this.xSpeed = 5 * cos(angle);
      this.ySpeed = 5 * sin(angle);
    }
    }
  }
  this.checkCollisionsRight = function(player)
  {
    if((this.y < player.y + player.h / 2 + 15) && (this.y > player.y - player.h / 2 - 15) && (this.x + this.r > player.x - player.w /2))
    {
      if(this.x < player.x + player.w/2)
      {
        var diff = this.y - (player.y - player.h/2);
        var rad = radians(45);
        var angle = map(diff, 0, player.h, -rad,rad);
        this.xSpeed = 5 * cos(angle);
        this.xSpeed *= -1;
        this.ySpeed = 5 * sin(angle);
      }
    }

  }
}
