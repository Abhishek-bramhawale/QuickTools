import React, { useState } from "react";

export default function SpeedConverter() {
  const [inputValue, setInputValue] = useState("");
  const [fromUnit, setFromUnit] = useState("kmph");
  const [toUnit, setToUnit] = useState("mph");
  const [result, setResult] = useState("");

  const conversionRates = {
    kmph: 1,
    mph: 0.621371,
    mps: 0.277778,
    knots: 0.539957,
    fps: 0.911344,
  };

  const handleConvert = () => {
    if (!inputValue || isNaN(inputValue)) return;

    const valueInKmph = parseFloat(inputValue) / conversionRates[fromUnit];
    const convertedValue = valueInKmph * conversionRates[toUnit];

    setResult(`${convertedValue.toFixed(4)} ${toUnit}`);
  };

  return (
    <div className="speed-converter-container">
      <h2>Speed Converter</h2>
      <input
        type="number"
        placeholder="Enter speed"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <div className="unit-selectors">
        <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
          <option value="kmph">Km/h</option>
          <option value="mph">Miles/h</option>
          <option value="mps">Meters/s</option>
          <option value="knots">Knots</option>
          <option value="fps">Feet/s</option>
        </select>

        <span>to</span>

        <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
          <option value="kmph">Km/h</option>
          <option value="mph">Miles/h</option>
          <option value="mps">Meters/s</option>
          <option value="knots">Knots</option>
          <option value="fps">Feet/s</option>
        </select>
      </div>

      <button onClick={handleConvert}>Convert</button>

      {result && (
        <div className="speed-result">
          <p><strong>Converted Value:</strong> {result}</p>
        </div>
      )}
    </div>
  );
}
