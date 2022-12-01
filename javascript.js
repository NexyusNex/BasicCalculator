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
            case '+': case '-': case '*': case '/':
            isDecimal=false;
            if(isSecond==false){
                a=Number(display.innerText);
                operator=e.target.innerText;
                isSecond=true;
                display.innerText='';
            } else {
                a=operate(a,Number(display.innerText),operator)
                operator=e.target.innerText;             
                display.innerText='';
                
            } console.log(a);break;
            
            case '.':
                if(isDecimal==true){
                    break;
                }
                display.textContent+='.';
                isDecimal=true;
                break;

            case '=': 
            if(isSecond==true){
            display.innerText=operate(a,Number(display.innerText),operator);
            isSecond=false;
            done=true;
            }
            break;

            case 'C':
            isDecimal=false;
            display.innerText='';
            a=0;
            isSecond=false;
            break;

            default:
                if(done==true){
                    done=false;
                    isDecimal=false;
                    display.innerText='';
                }
            display.innerText+=e.target.innerText;
            break;
        }
    })
})
var display = document.getElementById('text');
var isSecond = false, done=false, isDecimal=false; 
var a=0, operator;
