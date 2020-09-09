var car,wall
var speed,weight
var deformation

function setup() {
  createCanvas(1600,400);

  speed=Math.round(random(50,200))
  weight=random(400,1500)

  wall=createSprite(1400,200,100,400)
  car=createSprite(50,200,20,10)
 
  wall.shapeColor="gray"
  car.velocityX=speed
}

function draw() {
  background(255,255,255);  
  drawSprites();
  collide(car,wall);
  textSize(20);
  fill("black")
  text("ZOOM force:"+speed,1000,30)
  if(isTouching(car,wall)){
    deformation=Math.round(0.5*speed*speed)
    text("Pow Factor:"+deformation,800,30);
  }
  if (deformation<500){
    car.shapeColor="green"
    text("Status: Survivable",800,50)
  }
  if(deformation<5000){
    car.shapeColor="orange"
    text("I doubt they'll be driving anytime soon",800,50)
  }
  
  if(deformation<1000){
    car.shapeColor="yellow"
    text("Status: Probablry Wind Up in the Hospital",800,50);
  }
  if(deformation>10000){
    car.shapeColor="red"
    text("Houston, we may have just killed a man",800,50);
  }
  if(deformation<0){
  car.shapeColor="black"
text("Houston, we may have built a time Machine.....",800,50)
  }
 if(car.x>1650){
   text("Where did the car go?",800,50);
 }
 
}