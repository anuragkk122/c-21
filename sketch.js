var wall,car;
var speed,weight;
var thickness;



function setup() {
  createCanvas(1600,400);
  speed = random(55,90)
  weight= random(30,60)
  thickness=random(22,83)
car = createSprite(100,200,50,50);
car.velocityX = 7.5;
car.shapeColor = color(225);



 wall= createSprite(350,200,thickness ,height/2)
 wall.shapeColor= color(80,80,80)

}

function draw() {
  background(0);
  if (wall.x-car.x <(car.width+wall.width)/2)
  {
    car.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22509;
    if(deformation>180)
    {
      car.shapeColor=color(225,0,0);
    }
    if(deformation<180 && deformation>100)
    {
      car.shapeColor=color(230,230,0);
    }
    if(deformation<100)
  
    {
      car.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
 
}