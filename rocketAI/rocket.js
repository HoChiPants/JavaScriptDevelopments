class Rocket {
  constructor(dna) {
    if(dna)
    {
      this.dna = dna;
    }
    else{
        this.dna = new DNA();
    }
    

    this.pos = createVector(width / 2, height - 15);
    this.acc = createVector();
    this.vel = createVector();
    this.count = 0;
    this.alive = true;
    this.target = new Target();
    this.obsticle = new Obsticle();
    this.fitness = 0;
    this.achieved = false;
    this.hitObsticle = false;
  }

  applyforce(force) {
    this.acc.add(force);
  }

  update() {
    this.applyforce(this.dna.brains[this.count]);
    if (this.count < this.dna.cells) {
      this.count++;
    } else {
      this.alive = false;
    }

      this.vel.add(this.acc);
      this.vel.limit(4);
      this.pos.add(this.vel);
      this.acc.mult(0);

  }

  show() {
    if (this.alive) {
      push();
      noStroke();
      fill(255);
      translate(this.pos.x, this.pos.y);
      rotate(this.vel.heading());
      rectMode(CENTER);
      rect(0, 0, 10, 5);
      pop();
    } else {}
  }

  collisions() {
    push();
    translate(this.pos.x, this.pos.y);
    translate(this.obsticle.pos.x, this.obsticle.pos.y);
    translate(this.target.pos.x,this.target.pos.y);
    if (this.pos.x < 2 || this.pos.y < 2 || this.pos.x > width - 2 || this.pos.y > height-2) {
      this.alive = false;
    }
    if(this.pos.x + 2 > this.obsticle.pos.x - this.obsticle.wid/2 && this.pos.x < this.obsticle.pos.x + this.obsticle.wid/2
    && this.pos.y + 5 > this.obsticle.pos.y && this.pos.y < this.obsticle.pos.y + this.obsticle.hei
    )
    {
      this.alive = false;
      this.hitObsticle = true;
    }
    var d = dist(this.pos.x,this.pos.y,this.target.pos.x,this.target.pos.y);
    if(d < 15)
    {
      console.log("MADE IT");
      this.achieved = true;
      this.fitness = 4;
      this.vel = createVector();
      this.acc = createVector();
      this.pos = createVector();
    }
    pop();
  }
  calculateFitness(){
    push()
    translate(this.pos.x, this.pos.y);
    translate(this.target.pos.x,this.target.pos.y);
    var d = dist(this.pos.x,this.pos.y,this.target.pos.x,this.target.pos.y);
    // if(d < 15)
    // {
    //   console.log("MADE IT");
    //   this.achieved = true;
    //   this.fitness = 2;
    // }
    if(this.hitObsticle)
    {
      this.fitness = 0;
    }
    else{
    this.fitness = 1/d;
  }
    pop()
  }
}
