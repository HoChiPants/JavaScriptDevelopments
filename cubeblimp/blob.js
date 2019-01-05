class Blob {
  constructor(lol) {
    this.canvasWidth = lol;
    this.canvasHeight = lol;
    this.angle = 0;
    this.w = 24;
    this.ma = atan(cos(QUARTER_PI));
    this.maxD = dist(0, 0, lol / 2, lol / 2);
    this.minHeight = 100;
    this.maxHeight = 300;
    this.speed = 0.06;
    this.cols = (lol / this.w);
    this.rows = (lol / this.w);
  }
  move() {
    background(100);
    ortho(-400, 400, 400, -400, 0, 1000);
    rotateX(this.ma);
    rotateY(-QUARTER_PI);
    pointLight(255, 255, 255, 0, 0, 400);
    pointLight(100, 50, 100, -300, -300, this.canvasHeight / 2);
    directionalLight(150, 150, 150, -0.8, -0.8, 0);
    console.log(this.canvasHeight);
    for (let z = 0; z < this.canvasHeight; z += this.w) {
      for (let x = 0; x < this.canvasHeight; x += this.w) {
        push();
        let d = dist(x, z, this.canvasHeight / 2, this.canvasHeight / 2);
        let offset = map(d, 0, this.maxD, -PI, PI);
        let a = this.angle + offset;
        let h = this.mapHeight(a);
        ambientMaterial(150);
        translate(x - this.canvasHeight / 2, 0, z - this.canvasHeight / 2);
        box(this.w, h, this.w);
        pop();

      }
    }
    this.angle -= this.speed;
  }
  mapHeight(angle) {
    return floor(map(sin(this.angle), -1, 1, this.minHeight, this.maxHeight));
  };
}
