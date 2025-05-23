import React, { useState } from "react";

export default function LengthConverter() {
  const [value, setValue] = useState("");
  const [fromUnit, setFromUnit] = useState("mm");
  const [toUnit, setToUnit] = useState("km");
  const [result, setResult] = useState("");

  const conversionRatesToMeters = {
    mm: 0.001,
    cm: 0.01,
    m: 1,
    km: 1000,
    inch: 0.0254,
    ft: 0.3048,
    Yd: 0.9144,
    mile: 1609.34,
  };

  const handleConvert = () => {
    const input = parseFloat(value);
    if (isNaN(input)) {
      setResult("Enter a valid number");
      return;
    }

    
    const meters = input * conversionRatesToMeters[fromUnit];
    const converted = meters / conversionRatesToMeters[toUnit];

    setResult(`${converted.toFixed(4)} ${toUnit}`);
  };

  return (
    
    <div className="length-converter">
      <h2>Length Converter</h2>

      <input
        type="number"
        placeholder="Enter value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
        <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
          {Object.keys(conversionRatesToMeters).map((unit) => (
            <option value={unit} key={unit}>{unit}</option>
          ))}
        </select>

        <span style={{ alignSelf: "center" }}>to</span>

        <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
          {Object.keys(conversionRatesToMeters).map((unit) => (
            <option value={unit} key={unit}>{unit}</option>
          ))}
        </select>
      </div>

      <button onClick={handleConvert}>Convert</button>

      {result && (
        <div className="length-result">
          <p><strong>Result:</strong> {result}</p>
        </div>
      )}
    </div>
  );
}
