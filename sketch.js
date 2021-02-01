var background , backgroundImage ;
var fairy , fairyImage;
var star , starImage;

//Namespacing
const Engine = Matter.Engine ;
const World = Matter.World; 
const Bodies = Matter.Bodies;

var myEngine, myWorld;

function preload()
{
   //preload the images here
   backgroundImage = loadImage("./images/starnight.png");
   fairyImage = loadImage("./images/fairy2.png",);
   starImage = loadImage("./images/star.png");
}

function setup() {
  createCanvas(800, 750);

  myEngine = Engine.create (); 
  myWorld = myEngine.world ;

  fairy = createSprite(150,450,20,20);
  fairy.addImage(fairyImage);
  fairy.scale = 0.3;


  var staroptions = { 
    isStatic : false
  }

  star = Bodies.circle(600,50,20,20,staroptions);
  World.add (myWorld, star );


  
console.log(star);


}


function draw() {

  background(backgroundImage);
  
  if (keyDown(LEFT_ARROW)){
      fairy.x = fairy.x - 10;
  }

  if (keyDown(RIGHT_ARROW)){
      fairy.x = fairy.x + 10;
  }

  if (keyDown(DOWN_ARROW)){
      star.isStatic = true ;
    
}

  Engine.update (myEngine);

  ellipseMode(RADIUS);
  ellipse (star.position.x,star.position.y,20,20);

  drawSprites();
}
