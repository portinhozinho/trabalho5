const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var fundo
var torre
var torre2 
var obj
var angle= 20
var maytrix=[]
var matris=[]





function preload() {
 fundo= loadImage("./assets/background.gif")
 torre2= loadImage("./assets/tower.png")
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES)
  obj=new caiao(180,180,130,100,angle)
 

  var options = {
    isStatic: true
  }

  ground = Bodies.rectangle(600,550,1200,10, options);
  World.add(world, ground);
 
  torre = Bodies.rectangle(150,400, 160, 310, options);
  World.add(world,torre);
}

function draw() {
  image(fundo,0,0,1200,600)
  Engine.update(engine);
push();
imageMode(CENTER)
  image(torre2, torre.position.x , torre.position.y , 160,310 )
  rectMode(CENTER)
  rect(ground.position.x, ground.position.y,1200, 10);
  pop();
  obj.display()
  for(var I=0;I<maytrix.length;I++){
    exibition(maytrix[I]      )
    colision(maytrix[I])
  }
  showboats();
 
  
}
  
function keyPressed() {
  if (keyCode==87) {var obj2= new bola(obj.xix, obj.ipicilon)
  maytrix.push(obj2)
console.log("w")}

}
 function exibition(bolao) {
if(bolao){bolao.display()}} 

function keyReleased(){
  if(keyCode==87) {maytrix[maytrix.length-1].tiro()}

}

function showboats(){
  if(matris.length>0){
    if (matris[matris.length-1].body.position.x<900){var Barco= new barco(width-179, height-260,170,170)
    matris.push(Barco)}
for(var i=0; i<matris.length;i++){
  if(matris[i]){
    Matter.Body.setVelocity(matris[i].body,{x:-1,y:0})
    matris[i].display()
  }
  
}






  }  
  else{ var Barco= new barco(width-179, height-260,170,170) 
    matris.push(Barco)
  }
 
}
function colision(index){
  for(var i=0; i<matris.length;i++){
if(maytrix[index]!==undefined&&matris[i]!==undefined){
  var colision=Matter.SAT.collides(maytrix[index].body,matris[i].body)
  if(colision.collided){
    matris[i].remove(i)
    Matter.World.remove(world,maytrix[index].body)
    delete maytrix[index]
  }
}
  }
}
//maytrix= matris de bola
//matris= matris de barcos