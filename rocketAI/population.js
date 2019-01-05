class Population {
  constructor(count) {
    this.rockets = [];
    this.popSize = count;
    this.mutating = [];
    for (var i = 0; i < this.popSize; i++) {
      this.rockets[i] = new Rocket();
    }
  }
  show() {
    for (var i = 0; i < this.popSize; i++) {
      this.rockets[i].update();
      this.rockets[i].show();
    }
  }
  checkCollisions() {
    for (var i = 0; i < this.popSize; i++) {
      this.rockets[i].collisions();
    }
  }
  alive() {
    for (var i = 0; i < this.popSize; i++) {
      if (this.rockets[i].alive) {
        return true;
      }
    }
    return false;
  }

  evaluate() {
    var maxfitness = 0;
    for (var i = 0; i < this.popSize; i++) {
      this.rockets[i].calculateFitness();
      if (this.rockets[i].fitness > maxfitness) {
        maxfitness = this.rockets[i].fitness;
      }
    }
    for (var i = 0; i < this.popSize; i++) {
      if (maxfitness != 0) {
        this.rockets[i].fitness /= maxfitness;
      }
    }
    this.mutating = [];
    for (var i = 0; i < this.popSize; i++) {
      var n = this.rockets[i].fitness * 100;
      for (var j = 0; j < n; j++) {
        this.mutating.push(this.rockets[i]);
      }
    }
  }
  selection(){
    var newPop = [];
    for(var i = 0; i < this.popSize; i++)
    {
      var father = random(this.mutating).dna;
      var mother = random(this.mutating).dna;
      var child = father.crossover(mother);
      child.mutate()
      newPop[i] = new Rocket(child);
    }
    //this.rockets = [];
    for(var j = 0; j < newPop.length; j++)
    {
      this.rockets[j] = newPop[j];
    }
  }
}
