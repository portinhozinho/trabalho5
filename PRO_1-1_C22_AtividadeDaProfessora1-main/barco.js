class barco{
    constructor(x,y,l,a){
        this.body=Bodies.rectangle(x,y,l,a);
        this.l=l;
        this.a=a
        this.x=x
        this.y=y
        this.image= loadImage("assets/boat (1).png")
        World.add(world, this.body);
    }
    display(){
        var pos=this.body.position
        push(); 
        rectMode(CENTER)
        image(this.image,pos.x,pos.y, this.l, this.a)
        pop();} 
        
}

