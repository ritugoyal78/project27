const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var bobObj1,bobObj2,bobObj3,bobObj4,bobObj5;
var rope1,rope2,rope3,rope4,rope5;
var roofObj;
var engine,world;

function setup() {
	createCanvas(1600, 700);
rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roofObj=new Roof(width/2,height/4,width/7,20);//(800,175,100,20)
	bobDiameter=20;
	startBobPositionX=width/2;//(800)
	startBobPositionY=height/4+500;//(675)
	bobObj1=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);//(720,675,40)
	bobObj2=new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);//(760,675,40)
	bobObj3=new Bob(startBobPositionX,startBobPositionY,bobDiameter);//(800,675,40)
	bobObj4=new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);//(840+675,40)
	bobObj5=new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);//880,675,40
	
	rope1=new Rope(bobObj1.body,roofObj.body,-bobDiameter*2, 0)

	rope2=new Rope(bobObj2.body,roofObj.body,-bobDiameter*1, 0)
	rope3=new Rope(bobObj3.body,roofObj.body,0, 0)
	rope4=new Rope(bobObj4.body,roofObj.body,bobDiameter*1, 0)
	rope5=new Rope(bobObj5.body,roofObj.body,bobDiameter*2, 0)



	Engine.run(engine);
  
}

function draw() {
rectMode(CENTER);
background(230);
roofObj.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
bobObj1.display();
bobObj2.display();
bobObj3.display();
bobObj4.display();
bobObj5.display();
  
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bobObj1.body,bobObj1.body.positon,{x:-20,y:0});
	}
}

function drawLine(constraint)
{
	bobBodyPosition=constraint.bodyA.position
	roofBodyPosition=constraint.bodyB.position

	roofBodyOffset=constraint.pointB;
	
	roofBodyX=roofBodyPosition.x+roofBodyOffset.x
	roofBodyY=roofBodyPosition.y+roofBodyOffset.y
	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
}

