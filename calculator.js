let calculate= document.getElementById("inputBox");

function  num(x){
  calculate.value += x;
}

function Delete(){
    calculate.value = calculate.value.slice(0,-1)
}

function Clear(){
    calculate.value = "";
}

// function Equal(){
//   var a=document.getElementById("inputBox").value;
//   var b=eval(a);
//   document.getElementById("inputBox").value=b;
// }

// function Equal(){
//   var a=document.getElementById("inputBox").value;
//   // var d=a.toString();
//   var b=a.splilt("+");
//   var c=b[0]+b[1];
//   document.getElementById("inputBox").value=c;
// }

function Equal(){
  document.getElementById("inputBox").value = check();
}

var a =[];
function check(){
 
    if(calculate.value.includes("+")){
      a=calculate.value.split("+");
      return parseInt(a[0])+parseInt(a[1]);
      
    }
   else if(calculate.value.includes("-")){
    a=calculate.value.split("-");
    return parseInt(a[0])-parseInt(a[1]);
   }

   else if(calculate.value.includes("*")){
    a=calculate.value.split("*");
    return parseInt(a[0])*parseInt(a[1]);
   }
   else if(calculate.value.includes("/")){
    a=calculate.value.split("/");
    return parseInt(a[0])/parseInt(a[1]);
   }
}

