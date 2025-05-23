import React, { useState } from 'react';

const GSTCalculator = () => {
  const [amount, setAmount] = useState('');
  const [gstRate, setGstRate] = useState(18);
  const [result, setResult] = useState('');

  const calculateGST = () => {
    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount) || parsedAmount < 0) {
      setResult('Please enter a valid amount.');
      return;
    }

    const gstAmount = (parsedAmount * gstRate) / 100;
    const totalAmount = parsedAmount + gstAmount;

    setResult(
      `GST (${gstRate}%): ₹${gstAmount.toFixed(2)}\nTotal Amount: ₹${totalAmount.toFixed(2)}`
    );
  };

  return (
    <div className="gst-calculator">
      <h2>GST Calculator</h2>

      <div>
        <label>Amount (₹):</label>
        <input
          type="number"
          placeholder="Enter base amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <div>
        <label>GST Rate (%):</label>
        <select value={gstRate} onChange={(e) => setGstRate(Number(e.target.value))}>
          <option value={5}>5%</option>
          <option value={12}>12%</option>
          <option value={18}>18%</option>
          <option value={28}>28%</option>
        </select>
      </div>

      <button onClick={calculateGST}>Calculate</button>

      {result && (
        <div className="gst-result">
          {result.split('\n').map((line, idx) => (
            <div key={idx}>{line}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GSTCalculator;
