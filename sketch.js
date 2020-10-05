var fixedRect, movingRect;
var g1, g2, g3;

function setup() 
{
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  g1 = createSprite(200,100,50,50);
  g1.shapeColor = "green";

  g2 = createSprite(400,100,50,50);
  g2.shapeColor = "green";

  g3 = createSprite(600,100,50,50);
  g3.shapeColor = "green";
}

function draw() 
{
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(g3,movingRect))
  {
    movingRect.shapeColor = "red";
    g3.shapeColor = "red";
  }
  else
  {
    movingRect.shapeColor = "green";
    g3.shapeColor = "green";
  }



  drawSprites();
}

function isTouching(object1,object2)
{
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2)
  {
  return true;
  }
  else 
  {
    return false;
  }



}