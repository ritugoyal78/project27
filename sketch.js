
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint

var bob1,bob2,bob3,bob4,bob5;
var roof1,rope1,rope2,rope3,rope4,rope5;
var bobDiameter=90
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world
	//Create the Bodies Here.
bob1=new Bob(200,650,40)
bob2=new Bob(280,650,40)
bob3=new Bob(360,650,40)
bob4=new Bob(440,650,40)
bob5=new Bob(520,650,40)
roof1=new Roof(400,100,800,50)
rope1=new Rope(bob1.body,roof1.body,-200,0)
rope2=new Rope(bob2.body,roof1.body,-120,0)
rope3=new Rope(bob3.body,roof1.body,-40,0)
rope4=new Rope(bob4.body,roof1.body,40,0)
rope5=new Rope(bob5.body,roof1.body,120,0)

	Engine.run(engine);
  
}


function draw() {
  background(205,0,55);
  Engine.update(engine)
  rectMode(CENTER);
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  roof1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  //drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-40,y:0})
  }
}

