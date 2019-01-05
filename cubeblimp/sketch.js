let canvasWidth = 400;
let canvasHeight = 400;
let angle = 0;
let w = 24;
let ma;
let maxD;
let minHeight = 100;
let maxHeight = 300;
var leftBuffer;
var rightBuffer;
var pg;
var speed = 0.06;
function setup() {
    createCanvas(canvasWidth, canvasHeight, WEBGL);
    ma = atan(cos(QUARTER_PI));
    maxD = dist(0, 0, 200, 200);
    let cols = (canvasHeight / w);
    let rows = (canvasHeight / w);
}
function draw() {
    background(100);
    ortho(-400, 400, 400, -400, 0, 1000);
    rotateX(ma);
    rotateY(-QUARTER_PI);
    pointLight(255, 255, 255, 0, 0, 400);
    pointLight(100, 50, 100, -300, -300, canvasHeight / 2);
    directionalLight(150, 150, 150, -0.8, -0.8, 0);
    for (let z = 0; z < height; z += w) {
        for (let x = 0; x < height; x += w) {
            push();
            let d = dist(x, z, height / 2, height / 2);
            let offset = map(d, 0, maxD, -PI, PI);
            let a = angle + offset;
            let h = mapHeight(a);
            ambientMaterial(150);
            translate(x - height / 2, 0, z - height / 2);
            box(w, h, w);
            pop();
        }
    }
    angle -= speed;
}

var mapHeight = (angle) => {
    return floor(map(sin(angle), -1, 1, minHeight, maxHeight));
};
