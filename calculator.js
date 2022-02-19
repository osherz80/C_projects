let num1,num2,sum = 0, opCounter = 0;
let operand;

const addDisplay = () =>{
    if (document.getElementById('drill').innerHTML == 0 && event.target.innerHTML != "." && document.getElementById('drill').innerHTML.length == 1)  document.getElementById('drill').innerHTML = event.target.innerHTML;
    else document.getElementById('drill').innerHTML += event.target.innerHTML;
    if(sum === 0) document.querySelector(".left").innerHTML = document.getElementById('drill').innerHTML;
    else document.querySelector(".right").innerHTML = document.getElementById('drill').innerHTML;
};



const deleteEnd = () =>{
    document.getElementById('drill').innerHTML = document.getElementById('drill').innerHTML.substring(0,document.getElementById('drill').innerHTML.length-1);
    if(sum === 0) document.querySelector(".left").innerHTML = document.getElementById('drill').innerHTML;
    else document.querySelector(".right").innerHTML = document.getElementById('drill').innerHTML;
};

const reset = () => {
    document.getElementById('drill').innerHTML = 0;
    num1 = undefined;
    num2 = undefined;
    document.getElementById('sums').innerHTML = '';
    document.querySelector(".left").innerHTML = '';
    document.querySelector(".operator").innerHTML = '';
    document.querySelector(".right").innerHTML = '';
};

const op = () => {
    if(typeof num1 === 'undefined' || num1 === null){
        if (document.getElementById('drill').innerHTML.includes("."))num1 = parseFloat(document.getElementById('drill').innerHTML);
        else num1 = parseInt(document.getElementById('drill').innerHTML);
    }
    operand = event.target.innerHTML;
    document.getElementById('oper').innerHTML = operand
    document.getElementById('drill').innerHTML = 0;
    document.querySelector(".operator").innerHTML = event.target.innerHTML;
    console.log(num1); 
    console.log(num2); 
};

const goBack =() => {
    document.querySelector("drillp").innerHTML.charAt(document.querySelector("drillp").innerHTML.length-1).style.color = "white"; 
};

const calcSum = () => {
    if (document.getElementById('drill').innerHTML.includes("."))num2 = parseFloat(document.getElementById('drill').innerHTML);
    else num2 = parseInt(document.getElementById('drill').innerHTML);

    switch (operand) {
        case '+':
            sum = num1 + num2;
            break;
            case '-':
                sum = num1 - num2;
                break;
                case '*':
                    sum = num1 * num2;
                    break;
                    case '/':
                        sum = num1 / num2;
                        break;
        default:
            alert('illegal operator');
            break;
    
        }


    let div = document.createElement('div');
    div.id = 'container';
    div.innerHTML = `${num1} ${operand} ${num2} = ${sum}`;
    div.className = 'sum';
    document.getElementById('sums').appendChild(div);

    // document.getElementById('sums').innerHTML += div;
    // document.getElementById('drillNum1').innerHTML = num1;
    // document.getElementById('op').innerHTML = operand;
    // document.getElementById('drillNum2').innerHTML = num2;
    num1 = sum;
    document.querySelector(".left").innerHTML = sum;
    document.querySelector(".right").innerHTML = 0;
};