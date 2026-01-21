function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) return "ERROR: No divide by 0";
  return a / b;
}

function operate(operator, operandA, operandB) {
  operandA = Number(operandA);
  operandB = Number(operandB);
  let result;
  switch (operator) {
    case "+":
      result = add(operandA, operandB);
      break;
    case "-":
      result = subtract(operandA, operandB);
      break;
    case "×":
      result = multiply(operandA, operandB);
      break;
    case "÷":
      result = divide(operandA, operandB);
      break;
  }
  return result;
}

function clearDisplay() {
  operandA = "";
  operandB = "";
  operator = "";
  renderDisplay(operandA, operator, operandB);
}

function renderDisplay(num1 = "", op = "", num2 = "") {
  if (num1 && num2 && op) {
    previousOperandDisplay.textContent = `${num1} ${op}`;
    currentOperandDisplay.textContent = num2;
  } else if (num1 && !num2 && op) {
    previousOperandDisplay.textContent = `${num1} ${op}`;
    currentOperandDisplay.textContent = num2;
  } else if (num1 && !num2 && !op) {
    previousOperandDisplay.textContent = "";
    currentOperandDisplay.textContent = num1;
  } else {
    previousOperandDisplay.textContent = "";
    currentOperandDisplay.textContent = "0";
  }
}

let operandA = "",
  operandB = "",
  operator = "";
let calculatorElement = document.querySelector(".calculator");
let previousOperandDisplay = document.getElementById("previous-operand");
let currentOperandDisplay = document.getElementById("current-operand");
let clearBtn = document.getElementById("clear");

clearBtn.addEventListener("click", () => {
  clearDisplay();
});

calculatorElement.addEventListener("click", (e) => {
  if (e.target.classList.contains("number")) {
    if (!operandB && !operator) {
      operandA += e.target.textContent;
      renderDisplay(operandA);
    } else if (operandA && operator) {
      operandB += e.target.textContent;
      renderDisplay(operandA, operator, operandB);
    }
  } else if (e.target.classList.contains("operator")) {
    if (operandA) {
      operator = e.target.textContent;
      renderDisplay(operandA, operator);
    }
  } else if (e.target.classList.contains("operator-equal")) {
    if (operandA && operandB && operator) {
      operandA = operate(operator, operandA, operandB);
      operandB = "";
      operator = "";
      renderDisplay(operandA);
    }
  }
});
