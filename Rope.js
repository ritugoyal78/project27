class Rope{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX    //Xoffset means distance on horizontal line measured from the center of roof. 0 is the horizontal center of roof
        this.offsetY=offsetY    //Y offset means distance on vertical line . 0 is the  vertical center of roof
        var options={
            'bodyA':body1,
            'bodyB':body2,
           // 'length':10,
            //'stiffness':.04
'pointB':{x:this.offsetX,y:this.offsetY}
        }
        this.rope=Constraint.create(options)
World.add(world,this.rope)
    }
    display(){
        var pointA=this.rope.bodyA.position
        var pointB=this.rope.bodyB.position
        var Anchor2X=pointB.x+this.offsetX
		var Anchor2Y=pointB.y+this.offsetY
      line(pointA.x,pointA.y,Anchor2X,Anchor2Y)
      // line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}