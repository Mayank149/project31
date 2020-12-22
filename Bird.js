class Particle{
  constructor(x,y,r){
   var opt={
       isStatic:false,
       restitution:0.3
   }
   this.r = r;
   this.body = Bodies.circle(x,y,8);
   this.color = color(random(0,255),random(0,255),random(0,255));
   World.add(world,this.body);



  }
 display(){
   var pos = this.body.position;
   var angle = this.body.angle;
     
   push();
   translate(pos.x,pos.y);
   rotate(angle);
   fill(this.color);
   ellipseMode(RADIUS);
   ellipse(0,0,8);
    
   pop(); 



 }
 

}
 