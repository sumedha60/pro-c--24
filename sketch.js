const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,rubber,stone,iron,plane;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground =Bodies.rectangle(600,600,1200,20)
    ground.isStatic=true
    World.add(world,ground)
    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
rubber =new Rubber(300,200,12)
iron =new Iron(300,200,40,50) 
  stone = new Stone(300,200,40,30)


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display ();
    iron.display();
 stone.display();
}