class Stone {
constructor (x,y,w,h){
    var options={restitution:0.8,friction:0.9,density:12}
        this.body=Bodies.rectangle(x,y,w,h,options);
            World.add(world,this.body)
        this.width=w
        this.height=h

    }
    display(){
        push ()
        //console.log(this.body)
        strokeWeight(4)
        stroke("red")
        fill ("black")
        rectMode(CENTER)
        translate (this.body.position.x,this.body.position.y)
        rotate (this.body.angle)
        rect(0,0,this.width,this.height)
        pop ()
    }
}
