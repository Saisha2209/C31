class PARTICLE{
    constructor(x,y,r){
        var extra={
            restitution:0,
            friction:1.0,
            density:0
        }
        this.x=x
        this.y=y
        this.r=r
        this.body=Bodies.circle(x,y,r,extra)
        this.color=color(random(0,255),random(0,255),random(0,255))
        World.add(world,this.body)
    }
    show(){
        var pos =this.body.position;
        push();
        rotate(this.body.angle)
        translate(pos.x, pos.y)
        ellipseMode(RADIUS)
        fill(this.color)
        ellipse(0,0, this.r);
        pop();
       
    }
}