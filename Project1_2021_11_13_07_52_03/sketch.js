let angle=0;
let eye1;
let x=0;
let y=0;

function setup() {
	createCanvas(800, 800);
	background(245,208,213);
    eye1 = new Eye();
}

function draw() {
  

  drawing();
  open();
  if (keyIsPressed==true){
    
    eye1.show();
    eye1.fall();
  }
}
function drawing(){
  
  stroke(216,234,246,10);
  fill(166,234,246,100);//nose
  curve(500, 1000, 370, 450, 350, 550, 1500, 450);
  fill(255,102,94,80);
  beginShape();//upper lips
  vertex(220, 650);
  vertex(290, 620);
  vertex(320, 650);
  vertex(350, 620);
  vertex(420,650);
  endShape(CLOSE);
  arc(320, 655, 150, 60, 0, PI ,CHORD);//lower lips
  fill(255,255,255,200);
  arc(550,400,180,100,PI,0,CHORD);//eye1
  arc(550,400, 180, 100, 0, PI ,CHORD);
  arc(200,400,180,100,PI,0,CHORD);//eye2
  arc(200,400, 180, 100, 0, PI ,CHORD);
  fill(0);
  ellipse(550,400,50,80);
  ellipse(200,400,50,80);
  //if(mouseX=mouseX+10==true){
    //x=x+5;
  //}
  fill(245,170,194,100);
  fill(242,223,246,70);
  ellipse(450,500,480,600);
  fill(245,242,194,30);
  ellipse(250,400,600,900);
}

function mouseMoved(){
  
}

function open(){
  push();  
  if(mouseIsPressed==true){    
    stroke(245,208,213,20);
    background(216,234,246,10);
    frameRate(20); 
    fill(245,170,194,20);
    translate(620,300);
     rotate(angle);
    arc(-140,10,280,300,PI,0,CHORD);
    //angle = angle +0.3;
    //if(angle>0.9){
      //angle = angle+0;
    //}
    if(angle>=0.9){
      angle = angle+0;
    }
    else if(angle<0.9){
      angle = angle +0.3;
    }
      pop();
    }
    if(angle >= 0.9){
      beginShape();
      noStroke();
      fill(86,219,143,50);
      vertex(580, 260);
      vertex(640, 260);
      vertex(430, 115);
      vertex(370,115);
      endShape();
      fill(245,170,194,20);
      arc(-140,10,280,300,PI,0,CHORD);
    }
}

//function keyPressed(){
  
//}

class Eye{
  constructor(){
    this.x= 400;
    this.y= 115;
  }
  fall(){
    this.x= this.x + random(-5,5);
    this.y= this.y + random(-5,5);
  }
  
  show(){
    fill(255);
    ellipse(this.x,this.y,50,50);
    fill(0);
    ellipse(this.x,this.y,20,20);
  }

}

//class EyeFall{
  
  
  
  
//}