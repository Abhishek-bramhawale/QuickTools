import React, { useState } from 'react';

const areaUnits = {
  'Square Meter': 1,
  'Square Kilometer': 1e-6,
  'Square Centimeter': 10000,
  'Square Millimeter': 1e6,
  'Hectare': 0.0001,
  'Acre': 0.000247105,
  'Square Foot': 10.7639,
  'Square Inch': 1550.0031
};

const AreaConverter = () => {
  const [inputValue, setInputValue] = useState('');
  const [fromUnit, setFromUnit] = useState('Square Meter');
  const [toUnit, setToUnit] = useState('Square Foot');
  const [result, setResult] = useState('');

  const convertArea = () => {
    if (!inputValue || isNaN(inputValue)) {
      setResult('Please enter a valid number');
      return;
    }

    const valueInSqMeter = parseFloat(inputValue) / areaUnits[fromUnit];
    const convertedValue = valueInSqMeter * areaUnits[toUnit];
    setResult(`${inputValue} ${fromUnit} = ${convertedValue.toLocaleString()} ${toUnit}`);
  };

  return (
    <div className="area-converter">
      <h2>Area Converter</h2>

      <div>
        <label>Enter Value:</label>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter area"
        />
      </div>

      <div>
        <label>From:</label>
        <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
          {Object.keys(areaUnits).map((unit) => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>To:</label>
        <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
          {Object.keys(areaUnits).map((unit) => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>
      </div>

      <button onClick={convertArea}>Convert</button>

      {result && <div className="area-result">{result}</div>}
    </div>
  );
};

export default AreaConverter;
