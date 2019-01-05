class Goal {
  constructor() {
    this.x = width / 2;
    this.y = 30;

  }
  show() {
    ellipse(this.x, this.y, 15, 15)
    fill(255);
  }
}
