// function to calculate which can add, subtract, multiply and divide two numbers

function calculate(a, b, operator) {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return b !== 0 ? a / b : "Cannot divide by zero";
    default:
      return "Invalid operator";
  }
}

console.log(calculate(10, 5, '+'));
console.log(calculate(10, 5, '*'));
