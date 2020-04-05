var movingrect , fixedrect ;

function setup() {
  createCanvas(800,400);
  movingrect = createSprite(500,200,12,70);
  movingrect.shapeColor = "yellow";

  fixedrect = createSprite(150,200,34,50);
  fixedrect.shapeColor = "orange";

}

function draw() {
  background("pink");  

  movingrect.x = mouseX;
  movingrect.y = mouseY;

  if(movingrect.x - fixedrect.x < movingrect.width/2+ fixedrect.width/2 &&
    fixedrect.x - movingrect.x <  movingrect.width/2+ fixedrect.width/2 &&
    movingrect.y - fixedrect.y < movingrect.height/2 + fixedrect.height/2 &&
     fixedrect.y - movingrect.y < movingrect.height/2 + fixedrect.height/2 ){
 
      movingrect.shapeColor = "blue";
      fixedrect.shapeColor = "blue"; 

  }

  else{

     movingrect.shapeColor = "yellow";
     fixedrect.shapeColor = "orange";

  }
  drawSprites();
}