class DNA {
  constructor(dna) {
    if (dna) {
      this.brains = dna;
      this.cells = dna.length;
      //console.log(dna);
    } else {
      this.brains = [];
      this.cells = 400;
      for (var i = 0; i < this.cells; i++) {
        this.brains[i] = p5.Vector.random2D();
        this.brains[i].setMag(0.1);
      }
    }
  }
  crossover(partner) {
    var newDNA = [];
    var mid = floor(random(this.cells));
    for (var i = 0; i < this.cells; i++) {
      if (i > mid) {
        newDNA[i] = this.brains[i];
      } else {
        newDNA[i] = partner.brains[i];
      }
    }
    return new DNA(newDNA);
  }

  mutate(){
    for (var i = 0; i < this.cells; i++) {
      if(random(1)<.01){
        this.brains[i] = p5.Vector.random2D();
        this.brains[i].setMag(.1);
      }
    }
  }
}
