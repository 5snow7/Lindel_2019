function forward(){
 t1.fd(10); 
}

function back(){
 t1.bk(10); 
}

function right(){
 t1.rt(10);
}

function left(){
 t1.lt(10); 
}
let str1="";

function lind_R(){
  str=lindel(str);ycor+=20;
 // str1=str;
  document.getElementById("par3").innerHTML=str;
}

function word(t,l,a,senten){
let news="";//sentence="A+A--A+A";
  for(let j=0;j<senten.length;j++){
    news=senten[j];
    if(news=='A'){t.fd(l);}
    if(news=='+'){t.lt(a);}
    if(news=='-'){t.rt(a);}

  }
  }

function lindel(sent){
let newsent="";let ch='';
for(let j=0;j<sent.length;j++){
//ch=sent.charAt(j);
ch=sent[j];
  switch(ch){
	case 'A':newsent=newsent+sent;break;
	case '+':newsent=newsent+"+";break;
	case '-':newsent=newsent+"-";break;
	}}	
return newsent;	
}

function reStart(){
 t.angle=0; str= "A+A--A+A";ycor=30;setup();
}

function chgAll(){
 let strAr=[];
  let string1=document.getElementById("inp1").value;
  strAr=string1.split(',');str="";
  str=strAr[0];len=strAr[1];an=strAr[2];
  ycor+=10;t.angle=0;
}
