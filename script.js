let result = document.getElementById("result");
let clearBtn = document.getElementById("clear");
let a;
let b;

const numbers = [7, 8, 9, "=", 4, 5, 6, 1, 2, 3];
const calculator = document.querySelector('.calculator');
const zeroBtn = document.getElementById('0');

numbers.forEach(number => {
  const button = document.createElement('button');
  button.classList.add('btn', 'btn-light', 'w-100', 'rounded-0', 'fs-1');
  button.textContent = number;
  button.value = number;
  if (number === "=") {
    button.id = "equal";
    button.addEventListener("click", equals);
  } else {
    button.addEventListener("click", () => clickNumber(number));
  }
  calculator.insertBefore(button, zeroBtn.previousSibling);
});

const operators = [
    { id: "operator1", value: "+", icon: "fa-plus", func: add },
    { id: "operator2", value: "-", icon: "fa-minus", func: sub },
    { id: "operator3", value: "×", icon: "fa-xmark", func: mul },
    { id: "operator4", value: "÷", icon: "fa-divide", func: div }
];
const sevenBtn = document.querySelector('button[value="7"]');


operators.forEach(operator => {
    const button = document.createElement('button');
    button.classList.add('btn', 'btn-light', 'w-100', 'rounded-0', 'fs-1');
    button.id = operator.id;
    button.value = operator.value;
    button.innerHTML = `<i class="fa-solid ${operator.icon}"></i>`;
    button.addEventListener("click", operator.func);
    
    calculator.insertBefore(button, sevenBtn);
});

function clickNumber (n) {
    if (result.innerHTML === "0") {
        result.innerHTML = n;
    } else {
        result.innerHTML += n;
    }
}

function add () {
    
    equals();
    result.innerHTML += "+";
}

function sub () {
    
    equals();
    result.innerHTML += "-";
}

function mul () {
    
    equals();
    result.innerHTML += "×";
}

function div () {
    
    equals();
    result.innerHTML += "÷";
}


function equals() {
    let str = result.innerHTML;
    if (str.includes("+")) {
        let strParts = str.split("+");
        let a = parseFloat(strParts[0]);
        let b = parseFloat(strParts[1]);
        result.innerHTML = a + b;
    } 
    else if (str.includes("-")) {
        let strParts = str.split("-");
        let a = parseFloat(strParts[0]);
        let b = parseFloat(strParts[1]);
        result.innerHTML = a - b;
    }
    else if (str.includes("×")) {
        let strParts = str.split("×");
        let a = parseFloat(strParts[0]);
        let b = parseFloat(strParts[1]);
        result.innerHTML = a * b;
    }
    else if (str.includes("÷")) {
        let strParts = str.split("÷");
        let a = parseFloat(strParts[0]);
        let b = parseFloat(strParts[1]);
        result.innerHTML = a / b;
    }
}


clearBtn.addEventListener("click", () => {
    result.innerHTML = "0";
})