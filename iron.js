class Iron{
    constructor(x,y,w,h){
        var options = {
            density:30,
            friction: 3,
            restitution:0.8
          };

this.body=Bodies.rectangle(x,y,w,h,options);
    World.add(world,this.body)
this.width=w
this.height=h

}
display(){
push ()
//console.log(this.body)
strokeWeight(4)
stroke("yellow")
fill ("255")
rectMode(CENTER)
translate (this.body.position.x,this.body.position.y)
rotate (this.body.angle)
rect(0,0,this.width,this.height)
pop ()
}
}
    
