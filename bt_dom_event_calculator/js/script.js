let x = '';    
function a(id){
 return document.getElementById(id);
}

function set_num(number){
  x += number;
  a('answer').value = x;
}

function cancel(){
  x = '';
  a('answer').value = x;
}

function del(){
  x = x.slice(0, x.length-1);
  a('answer').value = x;
}

function parentheses1(){
  x += '(';
  a('answer').value = x;
}

function parentheses2(){
  x += ')';
  a('answer').value = x;
}

function addition(){
  if(a('answer').value == ''){
    a('answer').value = '';
    x = a('answer').value;
  }
  if(a('answer').value.endsWith('-') == true || a('answer').value.endsWith('+') == true || a('answer').value.endsWith('x') == true || a('answer').value.endsWith('÷') == true){
    x = a('answer').value;
  }else{
    a('answer').value += "+";
    x = a('answer').value;
  }  
}

function subtraction(){
  if(a('answer').value.endsWith('--') == true || a('answer').value.endsWith('+-') == true || a('answer').value.startsWith('-') == true || a('answer').value.endsWith('x-') == true || a('answer').value.endsWith('÷-') == true){
    x = a('answer').value;
  }else{
    a('answer').value += "-";
    x = a('answer').value; 
  }
}

function multiplication(){
  if(a('answer').value == ''){
    a('answer').value = '';
    x = a('answer').value;
  }else
  if(a('answer').value.endsWith('÷') == true || a('answer').value.endsWith('+') == true || a('answer').value.endsWith('x') == true || a('answer').value.endsWith('-') == true){
    x = a('answer').value;
  }else{
    a('answer').value += "x";
    x = a('answer').value;
  }  
}

function division(){
  if(a('answer').value == ''){
    a('answer').value = '';
    x = a('answer').value;
  }else
  if(a('answer').value.endsWith('÷') == true || a('answer').value.endsWith('+') == true || a('answer').value.endsWith('x') == true || a('answer').value.endsWith('-') == true){
        x = a('answer').value;
  }else{
      a('answer').value += "÷";
      x = a('answer').value;
  }  
}


function dot(){
  if(a('answer').value.endsWith('.') == true){
    x = a('answer').value
  }else{
    a('answer').value += ".";
    x = a('answer').value;
  }
}

function sqrt(){
  if(a('answer').value == ''){
    a('answer').value = '';
    x = a('answer').value;
  }else{
    x = a('answer').value;
    a('answer').value = Math.sqrt(x);
  }
}

function sqr(){
  if(a('answer').value == ''){
    a('answer').value = '';
    x = a('answer').value;
  }else{
    x = a('answer').value;
    a('answer').value = x*x;
  }
}

function factorial(){
  x = a('answer').value;
  let kq = 1;
  for(let i = x; i>1; i--){
  kq *= i;
  a('answer').value = kq;
  }
}

function equal(){
  x = a('answer').value;
  let kq = x.replace(/x/g,'*').replace(/÷/g,'/').replace(/--/g,'+')
  a('answer').value = eval(kq)
}

