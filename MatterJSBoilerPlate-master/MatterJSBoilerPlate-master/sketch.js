
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var circle, ground, box1, box2;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	Engine.run(engine);
  circle = new Circle(100,300,40)
  ground = new Ground(400,340,800,20)
  box1 = new Box(400,300,20,90)
  box2 = new Box(480,300,20,90)
}



function draw() {
  rectMode(CENTER);
  background(0);
  circle.display();
  ground.display();
  box1.display();
  box2.display();

  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
	Matter.Body.applyForce(circle.body,circle.body.position,{x:85,y:-85})
}
}

