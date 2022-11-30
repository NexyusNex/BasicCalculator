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
        case"+":return(add(a,b)); break;
        case"-":return(substract(a,b)); break;
        case"/":return(divide(a,b)); break;
        case"*":return(multiply(a,b)); break;
    }
}

var buttonlist = document.querySelectorAll("button");

buttonlist.forEach((btn)=>{
    btn.addEventListener("click", function(e){
        switch(e.target.innerText){
            case '+':
            if(isSecond==false){
                a=Number(display.innerText);
                operator='+';
                isSecond=true;
                display.innerText='';
            } else {
                a=operate(a,Number(display.innerText),operator)
                operator='+';             
                display.innerText='';
                
            } console.log(a);break;

            case '-':
            
            if(isSecond==false){
                a=Number(display.innerText);
                operator='-';
                isSecond=true;
                display.innerText='';
            } else {
                a=operate(a,Number(display.innerText),operator);
                operator='-';
                display.innerText='';
            } console.log(a);break;

            case '/': 
            if(isSecond==false){
                a=Number(display.innerText);
                operator='/';
                isSecond=true;
                display.innerText='';
            } else {
                a=operate(a,Number(display.innerText),operator);
                operator='/';
                display.innerText='';
            } console.log(a);break;

            case '*': 
            if(isSecond==false){
                a=Number(display.innerText);
                operator='*';
                isSecond=true;
                display.innerText='';
            } else {
                a=operate(a,Number(display.innerText),operator);
                operator='*';
                display.innerText='';
            } console.log(a);break;

            case '=': 
            if(isSecond==true){
            display.innerText=operate(a,Number(display.innerText),operator);
            isSecond=false;
            done=true;
            }
            break;

            case 'C': 
            display.innerText='';
            a=0;
            b=0;
            isSecond=false;
            break;

            default:
                if(done==true){
                    done=false;
                    display.innerText='';
                }
            display.innerText+=e.target.innerText;
            break;
        }
    })
})
var display = document.getElementById('text');
var isSecond = false, done=false; 
var a=0, b, operator;
