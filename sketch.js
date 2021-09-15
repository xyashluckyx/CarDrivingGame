var playerCar, ground;
var playerCarImg,groundImg;
var leftbd,rightbd;
var edges;
var obstacle1,obstacle2,obstacle3,obstacle4,obstacle5,obstacle6,obstacle7,obstacle8;
var obstacle1Img, obstacle2Img,obstacle3Img,obstacle4Img,obstacle5Img,obstacle6Img;
var obstacle7Img,obstacle8Img;

function preload(){
    groundImg=loadImage("images/track.jpg");

    playerCarImg=loadImage("images/car5.png");

    obstacle1Img=loadImage("images/car1.png");

    obstacle2Img=loadImage("images/car2.png");

    obstacle3Img=loadImage("images/car3.png");

    obstacle4Img=loadImage("images/car4.png");

    obstacle5Img=loadImage("images/car1.jpg");

    obstacle6Img=loadImage("images/car6.jpg");

    obstacle7Img=loadImage("images/car7.jpg");

    obstacle8Img=loadImage("images/truck.jpg");

    truckImg=loadImage("images/truck2.jpg");
}

function setup(){
  createCanvas(1400,900);

  ground=createSprite(700,400,10,10);
  ground.velocityY=15;
  ground.addImage(groundImg);
  ground.scale=2.7;

  playerCar=createSprite(550,1000,100,100);
  playerCar.velocityY=-10;
  playerCar.addImage(playerCarImg);
  playerCar.scale=0.8;

  leftbd=createSprite(5,450,5,900);
  leftbd.visible=false;

  rightbd=createSprite(1390,450,5,900);
  rightbd.visible=false;

}

function draw(){
  background("black");

  playerCar.collide(leftbd);
  playerCar.collide(rightbd);

  
  if(ground.y>800){
    ground.y=400;
  }

  if(playerCar.y<=750){
    playerCar.velocityY=0;
  }

  if(keyDown(RIGHT_ARROW)){
    playerCar.x=playerCar.x+10;
  }
  
  if(keyDown(LEFT_ARROW)){
    playerCar.x=playerCar.x-10;
  }

  spawnObstaclesUP();

  spawnObstaclesDOWN();

  drawSprites();


}

function spawnObstaclesUP(){
  if(frameCount%70===0){
    var obstaclee=createSprite(random(100,630),0,10,10);
    obstaclee.velocityY=5;

    var obstacle=Math.round(random(1,5));
    switch(obstacle){
    case 1 : obstaclee.addImage(obstacle1Img);
    break;
    case 2 : obstaclee.addImage(obstacle2Img);
    break;
    case 3 : obstaclee.addImage(obstacle3Img);
    break;
    case 4 : obstaclee.addImage(obstacle4Img);
    break;
    case 5 : obstaclee.addImage(truckImg);
    break;
    default:

  }
  obstaclee.scale=1.5;

}
}

function spawnObstaclesDOWN(){
  if(frameCount%50===0){
    var obstacleee=createSprite(random(770,1300),0,10,10);
    obstacleee.velocityY=10;

    var obstacle=Math.round(random(1,4));
    switch(obstacle){
    case 1 : obstacleee.addImage(obstacle5Img);
    break;
    case 2 : obstacleee.addImage(obstacle6Img);
    break;
    case 3 : obstacleee.addImage(obstacle7Img);
    break;
    case 4 : obstacleee.addImage(obstacle8Img);
    break;
    default:

  }
  obstacleee.scale=0.8;

}
}