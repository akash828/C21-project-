var canvas;
var music;
var box;
var invisibleBorder1,invisibleBorder2,invisibleBorder3,invisibleBorder4;
var block1,block2,block3,block4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
     invisibleBorder1 = createSprite(799,390,5,1000);
     //invisibleBorder1.visible=false;
     invisibleBorder2 = createSprite(400,1,1000,5);
     //invisibleBorder2.visible=false;
     invisibleBorder3 = createSprite(1,200,5,1000)
     //invisibleBorder3.visible=false;
     invisibleBorder4 = createSprite(400,600,1000,5)
     //invisibleBorder4.visible=false;
    
     //create 4 different surfaces
      block1=createSprite(100,580,180,20);
      block1.shapeColor=("orange");
      block2=createSprite(298,580,180,20);
      block2.shapeColor=("blue")
      block3=createSprite(495,580,180,20);
      block3.shapeColor=("green")
      block4=createSprite(695,580,180,20);
      block4.shapeColor=("red")
   
      //create box sprite and give velocity
      box=createSprite(400,300,20,20)
      box.shapeColor=("white")
    box.velocityX=-5
    box.velocityY=5
}

function draw() {
    background("black");
    //create edgeSprite
 
    createEdgeSprites();
  

   
    //add condition to check if box touching surface and make it box
   if(block1.isTouching(box)){
      box.shapeColor=("orange")
      box.bounceOff(block1)
    }
    
    if(block2.isTouching(box)){
       box.shapeColor=("blue")
       box.bounceOff(block2)
    }
    
    if(block3.isTouching(box)){
       box.shapeColor=("green")
       box.bounceOff(block3)
    }
    
    if(block4.isTouching(box)){
       box.shapeColor=("red")
       box.bounceOff(block4)
    }

   box.bounceOff(invisibleBorder1);
   box.bounceOff(invisibleBorder2);
   box.bounceOff(invisibleBorder3);
   box.bounceOff(invisibleBorder4);
   drawSprites()
 
}
