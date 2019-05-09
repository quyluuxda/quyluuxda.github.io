var x = '';    
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
  if(a('answer').value == '' || a('answer').value == '-' || a('answer').value == 'x' || a('answer').value == '/' ){
        a('answer').value = '';
        x = a('answer').value;
  }else{
      a('answer').value += "+";
      x = a('answer').value;
      }  
}
function subtraction(){
  if(a('answer').value == '' || a('answer').value == '+' || a('answer').value == 'x' || a('answer').value == '/' ){
        a('answer').value = '';
        x = a('answer').value;
  }else{
      a('answer').value += "-";
      x = a('answer').value;
      }  
}
function multiplication(){
  if(a('answer').value == '' || a('answer').value == '-' || a('answer').value == '+' || a('answer').value == '/' ){
        a('answer').value = '';
        x = a('answer').value;
  }else{
      a('answer').value += "*";
      x = a('answer').value;
      }  
}
function division(){
  if(a('answer').value == '' || a('answer').value == '-' || a('answer').value == 'x' || a('answer').value == '+' ){
        a('answer').value = '';
        x = a('answer').value;
  }else{
      a('answer').value += "/";
      x = a('answer').value;
      }  
}
function dot(){
  if(a('answer').value == '' || a('answer').value == 'x' || a('answer').value == '/' ){
        a('answer').value = '';
        x = a('answer').value;
  }else{
      a('answer').value += ".";
      x = a('answer').value;
      }  
}
function sqrt(){
  x = a('answer').value;
  a('answer').value = Math.sqrt(x);
}
function sqr(){
  x = a('answer').value;
  a('answer').value = x*x;
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
  a('answer').value = eval(x)
}

