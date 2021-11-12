let prevNumber = "";
let calculationOperator = "";
let currentNumber = "0";

const calcScreen = document.querySelector(".calc-screen");
const updateScreen = (number) => {
    calcScreen.value = number;
}

const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
    number.addEventListener('click', (event) => {
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    })
})
const inputNumber = (number) => {
    if (currentNumber === "0"){
        currentNumber = number;
    } else {
        currentNumber += number;
    }
}

const decimal = document.querySelector(".decimal");
inputDecimal = (dot) => {
    if(currentNumber.includes(".")){
        return
    }
    currentNumber += dot;
}
decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
})

const persen = document.querySelector(".persen");
persen.addEventListener('click', (event) => {
    updateScreen(currentNumber/100);
})

const operators = document.querySelectorAll(".operator");
operators.forEach((operator) => {
    operator.addEventListener('click', (event) => {
        inputOperator(event.target.value);
        updateScreen(calculationOperator);
    })
})
const inputOperator = (operator) => {
    if (calculationOperator === ""){
        prevNumber = currentNumber;
    }
    calculationOperator = operator;
    currentNumber = "";
}

const equalSign = document.querySelector(".equal-sign")
equalSign.addEventListener('click', () => {
    calculate();
    updateScreen(currentNumber);
})
const calculate = () => {
    let result = "";
    switch(calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber);
            break;
        case "x":
            result = parseFloat(prevNumber) * parseFloat(currentNumber);
            break;
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber);
            break;
        case "mod":
            result = parseFloat(prevNumber) % parseFloat(currentNumber);
            break;
        default:
            break;    
    }
    currentNumber = result;
    calculationOperator = "";
}

const clearBtn = document.querySelector(".all-clear")
const clearAll = () => {
    prevNumber = "";
    calculationOperator = "";
    currentNumber = "0";
}
clearBtn.addEventListener('click', () =>{
    clearAll();
    updateScreen(currentNumber);
})