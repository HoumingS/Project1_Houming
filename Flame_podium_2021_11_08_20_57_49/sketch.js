let angle=0;

function setup() {
	createCanvas(800, 800);
	background(245,208,213);
}

function draw() {
  push();
  open();
  pop();
  stroke(216,234,246,10);
  fill(216,234,246,100);//nose
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
  fill(245,170,194,100);
  //arc(480,300,280,300,PI,0,CHORD);
  /*push();
    if(mouseIsPressed==true){
    background(0);
    frameRate(10); 
    translate(620,300);
     rotate(angle);
    arc(-140,0,280,300,PI,0,CHORD);
    angle = angle +1;
     }
  pop();
  */fill(242,223,246,50);
  ellipse(450,500,480,600);
  fill(245,242,194,30);
  ellipse(250,400,600,900);
  
}


function open(){
    if(mouseIsPressed==true){
    push();
    background(245,208,213);
    frameRate(20); 
    fill(245,170,194,200);
    translate(620,300);
     rotate(angle);
    arc(-140,0,280,300,PI,0,CHORD);
    angle = angle +0.3;
    if(angle>0.9){
      angle = angle+0;
    }
    pop();
    }
}
