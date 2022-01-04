var rocket, rocketImg

function preload(){
rocketImg = loadImage("rocket.png")
spaceImg = loadImage("space.jpg")
astreoidImg = loadImage("astreoid.png")
}

function setup() {
  createCanvas(800,400);

  rocket = createSprite(400, 350, 50, 50);
  rocket.addImage(rocketImg);
  rocket.scale = 0.2;

  astreoid = createSprite(450, 100, 50, 50);
  astreoid.addImage(astreoidImg);
  astreoid.scale = 0.2;
}

function draw() {
  background(spaceImg);
  
  rocket.x = mouseX;
  drawSprites();
}