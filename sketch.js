var player,player_running;
var banana,bananaimage;
var jungle,jungleimage;
var obstacles,obstacleimage;
var ground;
var background;
var score;
function preload(){ player_running=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
                   
  bananaimage=loadImage("banana.png");
                   
  jungleimage=loadImage("jungle.jpg");
                   
  obstacles=loadImage("stone.png");
}
function setup() {
  createCanvas(800, 400);
  
  jungle=createSprite(0,0,800,400);
 jungle.addImage(jungleimage);
  jungle.velocityX=-3;
  jungle.scale=1.5;
  jungle.x=jungle.width/2;
  
  ground=createSprite(0,380,400,10)
  Invisbleground=createSprite(0,390,400,5);
  ground.x=ground.width/2;
  Invisbleground.visible=false;
  
  
 //ground.addImage(ground_running);
  ground.velocityX=-3;
count=0 
  bananagroup= new Group();
  obstaclesgroup= new Group();
player=createSprite(100,340,20,50);
  player.scale=0.1;
player.addAnimation("MonkeyChunky",player_running);
}

function draw() {
  background(100);
  fill("white");
  textSize(18);
  text("score:"+count,285,302);
  if(jungle.x<100){
     jungle.x=jungle.width/2
     }
  if(ground.x<100){
     ground.x=ground.width/2
     }
  if(keyDown("space")){
    player.velocityY=-20
  }
  player.velocityY+=0.8;
  player.collide(ground);
  if(obstaclesgroup.isTouching(player)){
  player.scale=0.2;  
  }
  if(bananagroup.isTouching(player)){
   player.scale=0.1; 
  }
switch(score){
  case 10 : player.scale=0.12;
    break;
    case 20 : player.scale=0.14;
    break;
    case 30 : player.scale=0.16;
    break;
    case 40 : player.scale=0.18;
    break;
    default: break;
}
  Spawnfoods();
  drawSprites();
}
function Spawnfoods(){
  if(frameCount%80===0){
  banana=createSprite(700,350,50,70);
  banana.addImage(bananaimage);
  banana.scale=0.1;
  banana.velocityX=-3;
    banana.y=random(120,200);
  }
}
