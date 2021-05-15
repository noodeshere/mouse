class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    this.image1=loadImage("sprites/sling1.png")
    this.image2=loadImage("sprites/sling2.png")
    this.image3=loadImage("sprites/sling3.png")
}

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            if(pointA.x<220){
           
                stroke(48,22,8)
            strokeWeight(4);
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-3);
            image(this.image3,pointA.x-30,pointA.y-10,15,30)
            }else{
                strokeWeight(3);
                stroke(48,22,8)
                line(pointA.x+25, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x+25, pointA.y, pointB.x+30, pointB.y-3);
                image(this.image3,pointA.x+25,pointA.y-10,15,30)   
            }
        }
    image(this.image1,200,25)
    image(this.image2,175,25)
}
    
}