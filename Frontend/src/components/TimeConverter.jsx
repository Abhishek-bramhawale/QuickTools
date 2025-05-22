import React, { useState } from 'react';

const timeUnits = {
  'Second': 1,
  'Minute': 60,
  'Hour': 3600,
  'Day': 86400,
  'Week': 604800
};

const TimeConverter = () => {
  const [inputValue, setInputValue] = useState('');
  const [fromUnit, setFromUnit] = useState('Minute');
  const [toUnit, setToUnit] = useState('Second');
  const [result, setResult] = useState('');

  const convertTime = () => {
    if (!inputValue || isNaN(inputValue)) {
      setResult('Please enter a valid number');
      return;
    }

    const valueInSeconds = parseFloat(inputValue) * timeUnits[fromUnit];
    const convertedValue = valueInSeconds / timeUnits[toUnit];
    setResult(`${inputValue} ${fromUnit} = ${convertedValue.toLocaleString()} ${toUnit}`);
  };

  return (
    <div className="time-converter">
      <h2>Time Converter</h2>

      <div>
        <label>Enter Value:</label>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter time"
        />
      </div>

      <div>
        <label>From:</label>
        <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
          {Object.keys(timeUnits).map((unit) => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>To:</label>
        <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
          {Object.keys(timeUnits).map((unit) => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>
      </div>

      <button onClick={convertTime}>Convert</button>

      {result && <div className="time-result">{result}</div>}
    </div>
  );
};

export default TimeConverter;
