class Dot {
  constructor() {
    this.brain = new Brain(200);
    this.goal = new Goal();
    this.posY = height - 30;
    this.posX = random(20, width - 20);
    this.accX = 0;
    this.accY = 0;
    this.dead = false;
    this.isBest = false;
    this.fitness = 0;
    this.reachedGoal = false;
  }

  show() {
    if (this.isBest) {
      fill(0, 255, 0);
      ellipse(this.posX, this.posY, 8, 8);
    } else {//all other dots are just smaller black dots
      fill(255);
      ellipse(this.posX, this.posY, 4, 4);
    }
  }

  update() {

    if (!this.dead && !this.reachedGoal) {
          this.show();
          if (this.posX< 2|| this.posY<2 || this.posX>width-2 || this.posY>height -2) {//if near the edges of the window then kill it
            this.dead = true;
          } else if (dist(this.posX, this.posY, this.goal.x, this.goal.y) < 5) {//if reached goal

            this.reachedGoal = true;
          } else if (this.posX< 600 && this.posY < 310 && this.posX > 0 && this.posY > 300) {//if hit obstacle
            this.dead = true;
          }
        }











    // if (this.dead || this.reachedGoal) {} else {
    //   //for the x direction
    //   this.brain.randomSize();
    //   if (this.brain.directionsX.length > this.brain.step &&
    //     this.brain.directionsY.length > this.brain.step) {
    //     this.accX = this.brain.directionsX[this.brain.step];
    //     this.accY = this.brain.directionsY[this.brain.step++];
    //   } else {
    //     this.dead = true;
    //   }
    //   this.posX += this.accX;
    //   this.posY += this.accY;
    //   if (dist(this.posX, this.posY, this.goal.x, this.goal.y) < 10) {
    //     this.reachedGoal = true;
    //   }
    //   if (this.posX < 2 || this.posX > width - 2 || this.posY < 2 || this.posY > height - 2) {
    //     this.dead = true;
    //   }
    // }
  }
  calculateFintessForDot() {
    if (this.reachedGoal) {//if the dot reached the goal then the fitness is based on the amount of steps it took to get there
      this.fitness = 1.0/16.0 + 10000.0/(this.brain.step * this.brain.step);
    } else {//if the dot didn't reach the goal then the fitness is based on how close it is to the goal
      var distanceToGoal = dist(this.posX, this.posY, this.goal.x, this.goal.y);
      this.fitness = 1.0/(distanceToGoal * distanceToGoal);
    }
  }

  getbaby()
  {
    var baby = new Dot();
    baby.brain = this.brain.clone();//babies have the same brain as their parents
    return baby;
  }
}
