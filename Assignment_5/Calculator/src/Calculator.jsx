import React, { useState } from "react";

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const handleCalculation = (operator) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setResult("Please enter valid numbers");
      return;
    }

    switch (operator) {
      case "+":
        setResult(a + b);
        break;
      case "-":
        setResult(a - b);
        break;
      case "*":
        setResult(a * b);
        break;
      case "/":
        if (b === 0) {
          setResult("Cannot divide by zero");
        } else {
          setResult(a / b);
        }
        break;
      default:
        setResult("Unknown operation");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial", maxWidth: "400px" }}>
      <h2>React Calculator</h2>
      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <div style={{ marginTop: "10px" }}>
        <button onClick={() => handleCalculation("+")}>Add</button>
        <button onClick={() => handleCalculation("-")}>Subtract</button>
        <button onClick={() => handleCalculation("*")}>Multiply</button>
        <button onClick={() => handleCalculation("/")}>Divide</button>
      </div>
      <div style={{ marginTop: "20px", fontWeight: "bold" }}>
        Result: {result !== null ? result : "—"}
      </div>
    </div>
  );
};

export default Calculator;
