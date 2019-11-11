function slopeyx( y, x){
  var a=y, b=x,cur="0";
  while(a!=b){
    if(a>b){cur=cur+"1";b=b+x;
    }
    else{
      cur=cur+"0";a=a+y;
    }}
    cur=cur+"1";
    return cur;
}

function slopeyx_N( y, x, n){
 var cur=""; var k=0;
 while(k<n){
   cur+=slopeyx(y,x);
k++;
 }
 //cur=cur+1;
  return cur;
}

function edit_Str( strIn){
  var state='1', n=0, ch='0', strout="";
  for(var j=0;j<strIn.length;j++){
    ch=strIn[j];
    switch(state){
      case '1':
      if(state=='1'&&ch=='0'){strout+='A';state='4';}
      if(state=='1'&&ch=='1'){strout+='G';state='2';}
      break;
      case '2':
       if(state=='2'&&ch=='0'){strout+='+';strout+='A';state='1';}
       if(state=='2'&&ch=='1'){strout+='+';strout+='G';state='3';}
      break;
      case '3':
      if(state=='3'&&ch=='0'){strout+='-';strout+='A';state='4';}
      if(state=='3'&&ch=='1'){strout+='-';strout+='G';state='2';}
      break;
      case '4':
      if(state=='4'&&ch=='0'){strout+='A';state='1';}
      if(state=='4'&&ch=='1'){strout+='G';state='3';}
      break;
 }
n++;
  }//while(n<str.length());
return strout;
}

let x=30;let y=50;let n=2;let autoStr="";

function startAuto(){
let string2=document.getElementById("autoStuff").value;
 let strAr2=string2.split(',');//str="";
  y=floor(strAr2[0]);x=floor(strAr2[1]);n=floor(strAr2[2]);	
autoStr=edit_Str(slopeyx_N(y,x,n));
alert(autoStr);
//alert(slopeyx_N(y,x,n));
//alert("string values are: x is "+x+" and y is "+y+" and n is "+n);
}

function runAuto(){
str=autoStr;
alert("string is "+str);	
	}