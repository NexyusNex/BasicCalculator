function add(a,b){
    return a+b;
}
function substract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}
function operate(a,b,operator){
    switch(operator){
        case"+":console.log(add(a,b)); break;
        case"-":console.log(substract(a,b)); break;
        case"/":console.log(divide(a,b)); break;
        case"*":console.log(multiply(a,b)); break;
    }
}

var buttonlist = document.querySelectorAll("button");

buttonlist.forEach((btn)=>{
    btn.addEventListener("click", function(e){
        
        display.innerText+=e.target.innerText;
    })
})

var display = document.getElementById('text');
var displayValue=''
var a=5;
var b=2;
var operator="*";
operate(a,b,operator);
