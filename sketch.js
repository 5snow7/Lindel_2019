let t;
//let ax="A++A++A++";
let ax="A";
let str=ax;
let sentF= "A+G--G+A";let sentG="A+A--G++A-A"
let sentB="B";
//let sentF="+G-A-G+";let sentG="-A+G+A-";
let xm=50,ym=200;
let len;let an=60;let ycor=30;
let factor;

function setup(){
  createCanvas(850, 500);
t=new logo(50,200,0);
len=250;
background(200,100,0);
factor=0.666667;
}

function draw() {
background(220,100,0);
ellipse(mouseX,mouseY,10,10);
text(" length is " +len+ " angle is "+an+ " and factor is "+factor,20,20);
t.set1(xm,ym,0);word(t,len,an,str);
text(str,30,50);
}

function mousePressed(){
 xm=mouseX;ym=mouseY; 
}
