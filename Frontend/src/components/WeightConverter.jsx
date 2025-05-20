import React, { useState } from "react";

export default function WeightConverter() {
  const [inputValue, setInputValue] = useState("");
  const [fromUnit, setFromUnit] = useState("kg");
  const [toUnit, setToUnit] = useState("g");
  const [result, setResult] = useState("");

  const conversionRates = {
    kg: 1,
    g: 1000,
    mg: 1e6,
    lb: 2.20462,
    oz: 35.274,
    tonne: 0.001,
  };

  const handleConvert = () => {
    if (!inputValue || isNaN(inputValue)) return;

    const valueInKg = parseFloat(inputValue) / conversionRates[fromUnit];
    const convertedValue = valueInKg * conversionRates[toUnit];

    setResult(`${convertedValue.toFixed(4)} ${toUnit}`);
  };

  return (
    <div className="weight-converter-container">
      <h2>Weight Converter</h2>
      <input
        type="number"
        placeholder="Enter weight"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <div className="unit-selectors">
        <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
          <option value="kg">Kilogram</option>
          <option value="g">Gram</option>
          <option value="mg">Milligram</option>
          <option value="lb">Pound</option>
          <option value="oz">Ounce</option>
          <option value="tonne">Tonne</option>
        </select>

        <span>to</span>

        <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
          <option value="kg">Kilogram</option>
          <option value="g">Gram</option>
          <option value="mg">Milligram</option>
          <option value="lb">Pound</option>
          <option value="oz">Ounce</option>
          <option value="tonne">Tonne</option>
        </select>
      </div>

      <button onClick={handleConvert}>Convert</button>

      {result && (
        <div className="weight-result">
          <p><strong>Converted Value:</strong> {result}</p>
        </div>
      )}
    </div>
  );
}
