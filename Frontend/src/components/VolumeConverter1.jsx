import React, { useState } from 'react';

const volumeUnits = {
  'Cubic Meter': 1,
  'Liter': 1000,
  'Milliliter': 1_000_000,
  'Cubic Centimeter': 1_000_000,
  'Gallon (US)': 264.172,

};

const VolumeConverter1 = () => {
  const [inputValue, setInputValue] = useState('');
  const [fromUnit, setFromUnit] = useState('Liter');
  const [toUnit, setToUnit] = useState('Milliliter');
  const [result, setResult] = useState('');

  const convertVolume = () => {
    if (!inputValue || isNaN(inputValue)) {
      setResult('Please enter a valid number');
      return;
    }

    const valueInCubicMeter = parseFloat(inputValue) / volumeUnits[fromUnit];
    const convertedValue = valueInCubicMeter * volumeUnits[toUnit];
    setResult(`${inputValue} ${fromUnit} = ${convertedValue.toLocaleString()} ${toUnit}`);
  };

  return (
    <div className="volume-converter">
      <h2>Volume Converter</h2>
      <div>
        {/* <label>Enter Value:</label> */}
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter volume"
        />
      </div>

      <div>
        {/* <label>From:</label> */}
        <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
          {Object.keys(volumeUnits).map((unit) => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>To:</label>
        <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
          {Object.keys(volumeUnits).map((unit) => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>
      </div>

      <button onClick={convertVolume}>Convert</button>

      {result && <div className="volume-result">{result}</div>}
    </div>
  );
};

export default VolumeConverter1;
