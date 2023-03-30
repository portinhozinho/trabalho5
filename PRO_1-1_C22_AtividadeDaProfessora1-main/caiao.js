class caiao{
    constructor(a,b,c,d,e){
        this.xix=a
        this.ipicilon=b
        this.largura=c
        this.atura=d
        this.angulo=e
        this.image= loadImage("./assets/canon.png")
        this.image1= loadImage("/assets/cannonBase.png")
    }
    display(){
        console.log("display")
        if(keyIsDown(UP_ARROW)) {
            this.angulo-=1}
            if(keyIsDown(DOWN_ARROW)) {
                this.angulo+=1  
        }
     push();
     translate(this.xix,this.ipicilon)
     rotate(this.angulo)  
     imageMode(CENTER)
     image(this.image,0,0, this.largura, this.atura)
     pop(); 
    image(this.image1,60,80,200,200)}


}