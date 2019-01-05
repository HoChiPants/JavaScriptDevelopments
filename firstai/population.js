class Population {
  constructor(size) {
    this.fitnessSum = 0;
    this.generation = 0;
    this.dots = [size];
    this.bestDot = 0;
    for (var i = 0; i < size; i++) {
      this.dots[i] = new Dot();
    }
  }

  show() {
    for (var i = 0; i < this.dots.length; i++) {
      this.dots[i].show();
    }
  }

  update() {
    for (var i = 0; i < this.dots.length; i++) {
      this.dots[i].update();
    }
  }

  calculateFintess() {
    for (var i = 0; i < this.dots.length; i++) {
      this.dots[i].calculateFintessForDot();
    }
  }




  totalDeadness() {
    for (var i = 0; i < this.dots.length; i++) {
      if (!this.dots[i].dead && !this.dots[i].reachedGoal) {
        return false;
      }
    }
    return true;
  }




  naturalSelection() {
    var newDot = [];
    for(var j = 0; j < this.dots.length; j++)
    {
      newDot[j] = new Dot();
    }
    this.setBestDot();
    this.calculateFintessSum();
    newDot[0] = this.dots[this.bestDot].getbaby();
    newDot[0].isBest = true;
    for (var i = 0; i < newDot.length; i++) {
      var parent = this.findParent();
      if(parent != null)
      {
        newDot[i] = parent.getbaby();
      }

    }
    this.dots = newDot;
    this.generation++;
    console.log(this.generation);
  }

  calculateFintessSum(){
    for (var i = 0; i < this.dots.length; i++) {
      this.fitnessSum += this.dots[i].fitness;
    }
  }




  findParent() {
    var rand = random(this.fitnessSum);
    var runningSum = 0;
    var iKeeper = 0;
    for (var i = 0; i < this.dots.length; i++) {
      runningSum += this.dots[i].fitness;
      if (runningSum > rand) {

        return this.dots[i];
      }
      iKeeper = i;
    }
    return null;
  }


  mutation() {
    for (var i = 0; i < this.dots.length; i++) {
      this.dots[i].brain.mutate();
    }
  }

 setBestDot() {
    var max = 0;
    var maxIndex = 0;
    for (var i = 0; i < this.dots.length; i++) {
      if (this.dots[i].fitness > max) {
        max = this.dots[i].fitness;
        maxIndex = i;
      }
    }

    this.bestDot = maxIndex;

    //if this dot reached the goal then reset the minimum number of steps it takes to get to the goal
    if (this.dots[this.bestDot].reachedGoal) {
      minStep = dots[bestDot].brain.step;
      console.log("step:", minStep);
    }
  }
}
