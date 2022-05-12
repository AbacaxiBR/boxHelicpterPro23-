var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody;
var box1,box2,box3;
var filtro

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	filtro = 0

	packageSprite=createSprite(width/2, 80, 20,20);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-5, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 20 , {restitution:0.2, isStatic:true});
	World.add(world, packageBody);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true});
 	World.add(world, ground);

	box2 = new Box(500,650,20,100,"red");
	box3 = new Box(295,650,20,100,"red");
	box1 = new Box(400,690,200,20,"red");
	
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
	packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y
	if(keyDown(DOWN_ARROW)) {
		Matter.Body.setStatic(packageBody,false);
		filtro = 1
		}	
  drawSprites();
  KeyPresed()
	box1.display();
	box2.display();
	box3.display();


  Engine.update(engine);


}

function KeyPresed(){

	if (keyDown(LEFT_ARROW)) {
		helicopterSprite.x=helicopterSprite.x-20
		if (filtro === 0){
			translation={x:-20,y:0}
			Matter.Body.translate(packageBody, translation)
		}
	}

	if (keyDown(RIGHT_ARROW)) {
		helicopterSprite.x=helicopterSprite.x+20
		if (filtro === 0){
			translation={x:20,y:0}
			Matter.Body.translate(packageBody, translation)
		}

	}
}