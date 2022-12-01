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

            case 'DEL':
            if(display.innerText.slice(-1)=='.'){
                isDecimal=false;
            }
            display.innerText=display.innerText.slice(0,-1);
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

document.addEventListener('keydown',function(e){
    e.preventDefault();
    console.log(e);
    switch(e.key){
        case '+': case '-': case '*': case '/':
        isDecimal=false;
        if(isSecond==false){
            a=Number(display.innerText);
            operator=e.key;
            isSecond=true;
            display.innerText='';
        } else {
            a=operate(a,Number(display.innerText),operator)
            operator=e.key;             
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

        case 'C': case 'c':
        isDecimal=false;
        display.innerText='';
        a=0;
        isSecond=false;
        break;

        case 'Backspace':
            if(display.innerText.slice(-1)=='.'){
                isDecimal=false;
            }
            display.innerText=display.innerText.slice(0,-1);
            break;

        case '1': case '2': case '3': case '4': case '5':
        case '6': case '7': case '8': case '9': case '0':
            if(done==true){
                done=false;
                isDecimal=false;
                display.innerText='';
            }
        display.innerText+=e.key;
        break;
    }
})

var display = document.getElementById('text');
var isSecond = false, done=false, isDecimal=false; 
var a=0, operator;
