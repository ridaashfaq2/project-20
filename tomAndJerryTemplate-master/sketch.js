
var bckimg;
var cat,catimg1,catimg2,catimg3;
var mouse,mouseimg1,mouseimg2,mouseimg3;

function preload() {
    //load the images here
    bckimg = loadImage("images/garden.png");
    catimg1 = loadImage("images/cat1.png");
    mouseimg1 = loadImage("images/mouse1.png");
    catimg2 = loadAnimation("images/cat2.png","images/cat3.png");
    mouseimg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    catimg3 = loadImage("images/cat4.png");
    mouseimg3 = loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    
        
    cat = createSprite(500,300,40,50);
    cat.addImage(catimg1);
    cat.scale = 0.3;

    mouse = createSprite(450,300,45,55)
    mouse.addImage(mouseimg1);
    mouse.scale = 0.3;


}

function draw() {

    background(bckimg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x < (cat.width-mouse.width)/2) 
    {
        cat.velocityX = 0;
        cat.changeImage(catimg3);

        mouse.velocityX = 0;
        mouse.changeImage(mouseimg3);
    }
    

    keyPressed();

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === RIGHT_ARROW) {
      mouse.addAnimation("mouseTeasing",mouseimg2);
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay = 25;
      mouse.velocityX = 4;
  }

  if(keyCode === LEFT_ARROW) {
      cat.addAnimation("catRunning",catimg2);
      cat.changeAnimation("catRunning");
      cat.frameDelay = 30;
      cat.velocityX = -4;
  }

}
