var res = document.getElementById('res');
var btn0 = document.getElementById('btn0');
var btn1 = document.getElementById('btn1');
var btnClr = document.getElementById('btnClr');
var btnEql = document.getElementById('btnEql');
var btnSum = document.getElementById('btnSum');
var btnSub = document.getElementById('btnSub');
var btnMul = document.getElementById('btnMul');
var btnDiv = document.getElementById('btnDiv');

var operator;

btn0.onclick = () =>{
	res.innerHTML +=0; 
}
btn1.onclick = () =>{
	res.innerHTML +=1; 
}
btnClr.onclick = () =>{
	res.innerHTML =''; 
}
btnSum.onclick = () =>{
	res.innerHTML +='+'; 
	operator='+';
}
btnSub.onclick = () =>{
	res.innerHTML +='-'; 
	operator='-';
}
btnMul.onclick = () =>{
	res.innerHTML +='*'; 
	operator='*';
}
btnDiv.onclick = () =>{
	res.innerHTML +='/'; 
	operator='/';
}
document.onkeypress=(evt)=>{
	var ky=evt.key;
	evt = evt || window.event;
    var charCode = evt.keyCode || evt.which;
	if(ky=="0"){
		res.innerHTML +=0;
	}else if(ky=="1"){
		res.innerHTML +=1;
	}else if(ky=="+"){
		res.innerHTML +="+";
		operator='+';
	}else if(ky=="-"){
		res.innerHTML +='-'; 
		operator='-';
	}else if(ky=="*"){
		res.innerHTML +='*'; 
		operator='*';
	}else if(ky=="/"){
		res.innerHTML +='/'; 
		operator='/';
	}else if(ky=="Enter"){
		alert(ky);
	}
}
btnEql.onclick = () =>{
	var value=res.innerHTML;
	var valueArr=value.split(operator);
	switch(operator){
		case "+":
			result = Number(parseInt(valueArr[0],2)) +  Number(parseInt(valueArr[1],2));
			break;
		case "-":
			result = Number(parseInt(valueArr[0],2)) -  Number(parseInt(valueArr[1],2));
			break;
		case "*":
			result = Number(parseInt(valueArr[0],2)) *  Number(parseInt(valueArr[1],2));
			break;
		case "/":
			result = Number(parseInt(valueArr[0],2)) /  Number(parseInt(valueArr[1],2));
			break;
		default:
			result="";
	}
	
	res.innerHTML=result.toString(2);
}