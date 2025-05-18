import { useState } from "react";
// import "./styles.css";

const RealCalculator = () => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setExpression((prev) => prev + value);
  };

  const handleClear = () => {
    setExpression("");
    setResult("");
  };

  const handleDelete = () => {
    setExpression((prev) => prev.slice(0, -1));
  };

  const handleEvaluate = () => {
    try {
      
      const evalResult = eval(expression);
      setResult(evalResult.toString());
    } catch {
      setResult("Error");
    }
  };

  return (
    <div className="lorem-generator-container">
  <h2>Basic calculator</h2>
    <div className="calc-container">
      <div className="calc-display">
        <div className="calc-expression">{expression || "0"}</div>
        <div className="calc-result">{result}</div>
      </div>

      <div className="calc-buttons">
        <button style={{background:"orange"}} onClick={handleClear}>C</button>
        <button  style={{background:"orange"}} onClick={handleDelete}>⌫</button>
        <button onClick={() => handleClick("%")}>%</button>
        <button onClick={() => handleClick("/")}>÷</button>

        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("*")}>×</button>

        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("-")}>−</button>

        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("+")}>+</button>

        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button className="equal-btn" onClick={handleEvaluate}>=</button>
      </div>
    </div></div>
  );
};

export default RealCalculator;
