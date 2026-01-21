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

let operandA, operandB, operator;
