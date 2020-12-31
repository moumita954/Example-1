
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var myEngine,myWorld;

var ground,box1,box2,box3,box4,box5;
var ball1,ball2;


function setup() {
  createCanvas(800,800);

  myEngine=Engine.create();
  myWorld=myEngine.world;

  

  box1 = new Box(400,200);
  box2 = new Box(440,100);

  box3 = new Box(400,90);
  
  ground = new Ground(400,600,800,40);

  //ground=Bodies.rectangle(400,400,800,10,{isStatic:true});
  //World.add(myWorld,ground);
  //console.log(ground)

  /*rect1=Bodies.rectangle(100,100,50,50,{isStatic:true});
  World.add(myWorld,rect1);

  rect2=Bodies.rectangle(335,335,50,50,{isStatic:true});
  World.add(myWorld,rect2);

  rect3=Bodies.rectangle(360,135,50,50)
  World.add(myWorld,rect3);


  var ball1Options = {
    restitution:1,
    motion:2.2,
  }
  ball1=Bodies.circle(200,190,25,ball1Options);
  World.add(myWorld,ball1);
  console.log(ball1)
  //console.log(ball1.restitution)


 // createSprite(400, 200, 50, 50);
  //myEngine=Engine.create();
  //myWorld=myEngine.world;*/


}

function draw() {
  background("lightblue");  
  Engine.update(myEngine);

  ground.display();

  box1.display();
  box2.display();
  box3.display();


 /* var pos1= ground.position;
  var pos2=rect1.position;
  var pos3=rect2.position;

  //to display rect1 on the screen
  stroke("purple")
  fill("red")
  //rect(rect1.position.x,rect1.position.y,50,50);
  rect(pos2.x,pos2.y,50,50);

  //to display rect2 on the screen
  fill("green");
  rect(pos3.x,pos3.y,50,50);

  //to display rect3 on the screen
  fill("pink");
  rect(rect3.position.x,rect3.position.y,50,50);

  //to display ball1 on the screen
  fill("yellow");
  ellipseMode(RADIUS);
  ellipse(ball1.position.x,ball1.position.y,25,25);

  to display ground on the screen
  noStroke();
 fill("brown")
 rectMode(CENTER);
  //rect(ground.position.x,ground.position.y,800,30);
  rect(pos1.x,pos1.y,800,10);*/
 
}