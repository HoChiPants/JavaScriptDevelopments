class Brain {
  constructor(size) {
    this.directionsX = [];
    this.directionsY = [];
    this.step = 0;

    for (var i = 0; i < size; i++) {
      this.directionsX.push(0);
      this.directionsY.push(0);
    }
    this.randomSize();
  }

  randomSize() {
    var randX;
    var randY;
    for (var i = 0; i < this.directionsX.length; i++) {
      randX = random(-10, 10);
      randY = random(-2*PI,2*PI);
      //console.log(randX);

      this.directionsX[i] = randX;
      this.directionsY[i] = randY;
    }
  }
  clone() {
    var clone = new Brain(this.directionsX.length);
    for (var i = 0; i < this.directionsX.length; i++) {
      clone.directionsX[i] = this.directionsX[i];
      clone.directionsY[i] = this.directionsY[i];
    }
    return clone;
  }

  mutate() {
    var mutationRate = 0.01; //chance that any vector in directions gets changed
    var randX;
    var randY;
    for (var i = 0; i < this.directionsX.length; i++) {
      var rand = random(1);
      if (rand < mutationRate) {
              randX = random(-5, 5);
              randY = random(-2*PI,2*PI);
              this.directionsX[i] = randX;
              this.directionsY[i] = randY;
      }
    }
  }
}
