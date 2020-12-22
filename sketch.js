const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
//arrayss
var plinkos = [];
var particles = [];
var divisions = [];


function setup() {

createCanvas(1300,700);
engine = Engine.create();
world = engine.world;

ground = new Ground(650,690,1300,20);
///loops for partical
for(var d =0;d<=width;d = d+80){
  divisions.push(new Ground(d,700,10,250));
  
}  

for(var p = 0;p<=width;p=p+60){
  plinkos.push(new Plinko(p,100));
}
for(var p = 0;p<=width;p=p+70){
  plinkos.push(new Plinko(p,200));
}
for(var p = 0;p<=width;p=p+80){
  plinkos.push(new Plinko(p,300));
}
for(var p = 0;p<=width;p=p+60){
  plinkos.push(new Plinko(p,400));
}



Engine.run(engine);
}

function draw() {
  background(0);
  
  if(frameCount%60 === 0){
    particles.push(new Particle(random(100,1200),5,5));
  }
  for(var j=0;j<plinkos.length;j++){
    plinkos[j].display();

  }
  for(var j=0;j<divisions.length;j++){
    divisions[j].display();

  }
  for(var j=0;j<particles.length;j++){
    particles[j].display();

  }
  

  ground.display();
  drawSprites();
                                                                        
}
