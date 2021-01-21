
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var drop1,drop2,drop3;
var dustbin;

function preload()
{
	dustbin = loadImage("loo.jpeg");
}

function setup() {
	createCanvas(800, 700);

  
    var options = {
		restitution:0.8,
		friction: 1,
		density:1,
		isStatic: false,
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	ground = Bodies.rectangle(width/2, 650, width, 5 , {isStatic:true,friction:1} );
	World.add(world,ground);

	Engine.run(engine);
	drop1 = new Drop(600,610,200,10)
	drop2 = new Drop(500,515,10,200)
	drop3 = new Drop(700,515,10,200)

	paper = new Paper(30,100,40)
  
}


function draw() {

	background(0);

	console.log(paper)

  rectMode(CENTER);
  fill("yellow")
  
  rect(ground.position.x,ground.position.y-5,width,20);
  drop1.display();
  drop2.display();
  drop3.display();
  
  paper.display();

	image(dustbin, 490 , 400 , 250,230)

  //keyPressed();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body, paper.body.position, {x: 85,y: -85});

	}
}

