class bola{
    constructor(a,b){
        this.xix=a
        this.ipicilon=b
        var bolinha= {isStatic: true}
        this.raio= 30
        this.body= Bodies.circle(a,b,this.raio, bolinha);
        World.add(world, this.body);
        this.image= loadImage("assets/cannonball.png")
    }
    display(){
        var position1= this.body.position
        push();  
    rectMode(CENTER)
     image(this.image, position1.x, position1.y, 30,30)
     pop();}
     tiro(){
        var conversao = obj.angulo-28
        conversao = conversao*(3.14/180)
        var velocity = p5.Vector.fromAngle(conversao)
        velocity.mult(0.5)
        Matter.Body.setStatic(this.body,false)
        Matter.Body.setVelocity(this.body,
            {x:velocity.x*(180/3.14),
                y:velocity.y*(180/3.14)})
     }
    
}