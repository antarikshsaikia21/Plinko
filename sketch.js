const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1,divisions1,particle1;
var divisionHeight=300;


var particles = [];

function setup() {
 createCanvas(400,600);

 engine = Engine.create();
 world = engine.world;

 ground1 = new Ground(200,900,600,20);

 divisions1 = new Divisions(0,530,10,170);
 divisions2 = new Divisions(80,530,10,170);
 divisions3 = new Divisions(160,530,10,170);
 divisions4 = new Divisions(240,530,10,170);
 divisions5 = new Divisions(320,530,10,170);
 divisions6 = new Divisions(400,530,10,170);

 plinko1 = new Plinko(200,100,10);
 plinko2 = new Plinko(100,100,10);
 plinko3 = new Plinko(150,100,10);
 plinko4 = new Plinko(250,100,10);
 plinko5 = new Plinko(300,100,10);
 plinko6 = new Plinko(350,100,10);
 plinko7 = new Plinko(400,100,10);
 plinko8 = new Plinko(50,100,10);
 plinko9 = new Plinko(0,100,10);
 plinko10 = new Plinko(20,140,10);
 plinko11= new Plinko(70,140,10);
 plinko12= new Plinko(120,140,10);
 plinko13 = new Plinko(170,140,10);
 plinko14 = new Plinko(220,140,10);
 plinko15 = new Plinko(270,140,10);
 plinko16 = new Plinko(320,140,10);
 plinko17 = new Plinko(370,140,10);
 plinko18 = new Plinko(420,140,10);
 plinko19 = new Plinko(0,180,10);
 plinko20 = new Plinko(50,180,10);
 plinko21 = new Plinko(100,180,10);
 plinko22 = new Plinko(150,180,10);
 plinko23 = new Plinko(200,180,10);
 plinko24= new Plinko(250,180,10);
 plinko25= new Plinko(300,180,10);
 plinko26= new Plinko(350,180,10);
 plinko27 = new Plinko(400,180,10);
 plinko28= new Plinko(20,220,10);
 plinko29= new Plinko(70,220,10); 
 plinko30= new Plinko(120,220,10);
 plinko31 = new Plinko(170,220,10);
 plinko32 = new Plinko(220,220,10);
 plinko33 = new Plinko(270,220,10);
 plinko34 = new Plinko(320,220,10);
 plinko35 = new Plinko(370,220,10);
 plinko36 = new Plinko(420,220,10);

 particle1 = new Particles(180,200,10)

}

function draw() {
  background("black");
  Engine.update(engine); 

  ground1.display();

  divisions1.display();
  divisions2.display();
  divisions3.display();
  divisions4.display();
  divisions5.display();
  divisions6.display();

  plinko1.display();
  plinko2.display();
  plinko3.display();
  plinko4.display();
  plinko5.display();
  plinko6.display();
  plinko7.display();
  plinko8.display();
  plinko9.display();
  plinko10.display();
  plinko11.display();
  plinko12.display();
  plinko13.display();
  plinko14.display();
  plinko15.display();
  plinko16.display();
  plinko17.display();
  plinko18.display();
  plinko19.display();
  plinko20.display();
  plinko21.display();
  plinko22.display();
  plinko23.display();
  plinko24.display();
  plinko25.display();
  plinko26.display();
  plinko27.display();
  plinko28.display();
  plinko29.display();
  plinko30.display();
  plinko31.display();
  plinko32.display();
  plinko33.display();
  plinko34.display();
  plinko35.display();
  plinko36.display();
  particle1.display();

  for(var j = 0; j < particles.length; j++){
    particles[j].display();
}

if(frameCount%30 === 0){
    particles.push(new Particles(random(width/2-10, width/2+10),10,10))
}

  
}