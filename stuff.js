/*function chgAll(){
let strAr=[];
let string1=document.getElementById("inpall").value;
  strAr=string1.split(',');
  ax=strAr[0];
  sentF=strAr[1];sentG=strAr[2];sentB=strAr[3];
 str=ax;
  t.angle=0;
}*/

function chgAll(){
	let strAr=[];
	let string2=document.getElementById("inpall").value;
    strAr=string2.split(',');sentF=strAr[0];
	str=strAr[1];ax=str;
}

function length(){
	let strAr=[];
let string1=document.getElementById("inplen").value;
  strAr=string1.split(',');//str="";
  len=strAr[0];an=strAr[1];
  factor=strAr[2];
  
}
function sierTri(){
	ax="A";len=200;factor=0.6667;
	sentF="+G-A-G+"; sentG="-A+G+A-";sentB="";
	an=60.0
	str=ax;
}

function koch(){
	ax="A--A--A--";len=200;factor=0.66667;
	sentF="A+A--A+A"; sentG="G";sentB="B";
	an=60.0
	str=ax;
}
 function pp(){
	 ax="A+[AB]--[AB]-B";len=200;factor=0.666667;
	 //sentF="A";	 
	 sentF="A+[AB]--[AB]-B";
	 sentG="G";str=ax;sentB="B";
 }

function dir1(){
alert("incomplete at moment.  example click sier then click on screen. then click generate, repeat.  to help fit, click length bar.  to change structure, click angle bar. ");
}

function clearScr(){clear(); }

function gen(){//generates new lindel string
  str=lindel(str);
  len=len*factor;
}

function reStart(){
	t.angle=0; str= "A";ax="A";len=200;
	sentF="A+GA--A";sentG="G-GA++G-";factor=.666667;
		an=60;sentB="B";
		}
		
function info(){
let infoNow="ax "+ax+" sentF "+sentF+" sentG "+sentG+" sentB "+sentB+" len "+len+" an "+an+" factor  "+factor+" str "+str;	
alert(infoNow);
}

function chgLen(){
len=document.getElementById("range1").valueAsNumber;	
}

function chgAng(){
an=document.getElementById("range2").valueAsNumber;	
an=floor(an);
}


function word(t,l,a,senten){

let news='';
  for(let j=0;j<senten.length;j++){
    news=senten[j];
    if(news=='A'){t.fd(l);}
    if(news=='G'){t.fd(l);}
	if(news=='B'){t.bk(l);}
    if(news=='f'){len=factor*len;}
    if(news=='-'){t.lt(a);}
    if(news=='+'){t.rt(a);}
    if(news=='['){t.push();}
	if(news==']'){t.pop();}
}}


function lindel(sent){
let newsent="";let ch='';
for(let j=0;j<sent.length;j++){
ch=sent[j];
  switch(ch){
	case 'A':newsent=newsent+sentF;break;
	case 'G':newsent=newsent+sentG;break;
	case 'B':newsent=newsent+sentB;break;
	case 'f':newsent=newsent+"f";break;
	case '+':newsent=newsent+"+";break;
	case '-':newsent=newsent+"-";break;
	case '[':newsent=newsent+"[";break;
	case ']':newsent=newsent+"]";break;
	
	}}	
return newsent;	
}


