const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin, paper, ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
    world = engine.world;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper= new Paper(150, 360, 30);
	ground=new Ground(400,width/2,800, 20);
	side1=new Dustbin(550,380, 200, 20);
	side2=new Dustbin(445, 340, 20, 100);
	side3= new Dustbin(650, 340, 20, 100);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display();
  ground.display();
  side1.display();
  side2.display();
  side3.display();

  drawSprites();
 
}

function keyPressed(){
	if (keyCode=== UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85, y:-85});
	}
}



