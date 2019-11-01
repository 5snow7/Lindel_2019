let t;let str= "A+A--A+A";
//let str="A+A--AA++A-A"
let xm=50,ym=200;
let len=10;let an=60;let ycor=30;
let t1;
function setup(){
  createCanvas(900, 500);
t=new logo(50,200,0);t1=new logo(200,200,0);
//make(t,len,an,str);
background(200,100,0);
}

function draw() {
//background(220);
text("string is "+str+" length is "+len+" angle is "+an,20,ycor);
t.set1(xm,ym,0);word(t,len,an,str);
}

function mousePressed(){
 xm=mouseX;ym=mouseY; 
}
