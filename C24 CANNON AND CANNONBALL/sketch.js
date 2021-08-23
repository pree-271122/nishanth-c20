//create the artificial world eg: SOLAR SYSTEM
const Engine = Matter.Engine;
//add objects to wolrd eg :EARTH , MARS ,JUPITER
const World = Matter. World;
//properties of the objects eg: GRAVITY is different properties
const Bodies = Matter. Bodies;

var engine , world;
var ground , ball;

function setup(){
  createCanvas(600,600);
  //create artificial world to the game
  engine = Engine.create();
  //adding the world to it
  world = engine.world;

  var groundoptions={
    isStatic:true
  }
  ground = Bodies.rectangle(300,590,600,20,groundoptions);
  World.add(world,ground);

  var balloptions={
    restitution:1
  }
  ball = Bodies.circle(200,300,20,balloptions);
  World.add(world,ball);

}

function draw(){
  background("skyblue");
  //draw is a loop , engine shouls also be updating
  Engine.update(engine);

  rectMode(CENTER);
  ellipseMode(RADIUS);

  fill ("gray");
  rect(ground.position.x,ground.position.y,600,20);
  
  ellipse(ball.position.x,ball.position.y,20,20);
}







