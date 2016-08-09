var R = 255
var G = 200
var B = 200
function setup() {
  createCanvas(500, 500);
  background(255, 255, 255);
}
function draw() {
    fill(R, G, B);
    R = random(255);
    G = 30;
    B = 150;
    noStroke();
    ellipse(mouseX, mouseY, 11, 11);
    if(mouseIsPressed){
      noStroke();
      fill(255, 255, 255);
      ellipse(mouseX, mouseY, 20, 20);
    }

}