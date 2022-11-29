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
var a=5;
var b=2;
var operator="*";
operate(a,b,operator);
