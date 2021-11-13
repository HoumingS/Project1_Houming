let angle=0;
let eyes=[];
let x=0;
let y=0;

function setup() {
	createCanvas(800, 800);
	background(245,208,213);
  
}

function draw() {
  
  drawing();
  open();
  push();
  if (keyIsPressed==true){
    //for(let i=0;i<1;i++){
    eyes.push(new Eye(400,115+random(0,4)));
  //}
    for(let eye of eyes){
    eye.applyG();
    eye.show();
    eye.fall();
    eye.limit();
    }  
  }
  pop();
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
  //ellipse(450,500,480,600);
  fill(245,242,194,30);
  ellipse(250,400,600,900);
  fill(242,223,246,70);
  arc(460,470,450,480,PI,0,CHORD);
  arc(460,470,450,600,0,PI,CHORD);
  push();
}


//function mouseMoved(){
  
//}

function open(){
  push();  
  if(mouseIsPressed==true){    
    stroke(245,208,213,20);
    background(216,234,246,10);
    frameRate(20); 
    fill(245,124,150,90);
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
      fill(255, 50);
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
  constructor(x,y){
    //this.x= 400;
    //this.y= 115;
    this.pos=createVector(x,y);
    this.vel=p5.Vector.random2D();
    this.acc=createVector(0,0);
    
  }
  
  applyG(){
     let gravity=createVector(0,0.5);
    this.acc.add(gravity);
  }
  fall(){
    //this.x= this.x + random(-5,5);
    //this.y= this.y + random(-5,5);
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0,0);
    
  }
  
  show(){
    fill(255);
    ellipse(this.pos.x,this.pos.y,30,30);
    fill(0);
    ellipse(this.pos.x,this.pos.y,10,10);
  }
  limit(){
    if(this.pos.y>=height){
      this.pos.y=height;
      this.vel.y*=-0.8;
    }
  }

}

