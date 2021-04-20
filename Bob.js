class Bob{
    constructor(x,y,radius){
        var options={
                'isStatic': false,
                'restitution':1,
                'friction':0,
                'density':.8
            }
            this.radius=radius
            this.body=Bodies.circle(x,y,this.radius/2,options)
            World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        push();
        translate(pos.x,pos.y)
        ellipseMode(RADIUS)
        ellipse(0,0,this.radius,this.radius)
        pop();
    }
}