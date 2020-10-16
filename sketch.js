var car, wall;
var speed, weight, carname;


function setup() {
  createCanvas(1300,500);



  car = createSprite(50,200,100,50);
 
  wall = createSprite(1200,200,60,height/2);
  wall.shapeColor="brown";

  
 // carname = "PathFinder"||"Cheetah"||"Pacer"||"FuturaSpeed"||"Electromatic";
  speed = random(55,90);
  weight = random(400,1500);
}

function draw() {
  background("black");  

  textSize(20);
  text("Car Speed :" + speed + " Car Weight : " + weight , 50, 50);



  car.velocityX=speed;

  if (wall.x-car.x < (car.width + wall.width)/2){

    car.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22500;
    if (deformation>180){

    car.shapeColor=color(225,0,0);
    textSize(50);
    text("LETHAL!!! Not Safe for Public Use",100,height/2);
    textSize(20);
    text( "Name of Car Being Tested : Futura",50,80);

    }
    if (deformation<180 && deformation>100){

      car.shapeColor=color(230,230,0);
      textSize(50);
      text("AVERAGE!!! May be Manufactured for Public Use",20,height/2);
      textSize(20);
      text( "Name of Car Being Tested : Electron",50,80);
  
    }
    if (deformation<100){

      car.shapeColor=color(0,225,0);
      textSize(50);
      text("SAFE!!! Highly Recommended for Public Use",100,height/2);
      textSize(20);
      text( "Name of Car Being Tested : PathFinder",50,80);
  
      }

  }

  drawSprites();
}