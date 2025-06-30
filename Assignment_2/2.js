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

// Example:
console.log(calculate(10, 5, '+')); // 15
console.log(calculate(10, 5, '*')); // 50
