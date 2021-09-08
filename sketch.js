var sea ,seaImg;
var ship , shipImg;
function preload(){
seaImg=loadImage("sea.png");
shipImg=loadImage("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  seaImage.addImage(seaImg);
}

function draw() {
  background("blue");
 if(sea.x<0){
   sea.x=sea.width/2;
 }
}