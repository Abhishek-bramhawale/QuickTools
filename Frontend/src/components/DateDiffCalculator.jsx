import React, { useState } from 'react';

const DateDiffCalculator = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [result, setResult] = useState('');

  const calculateDifference = () => {
    if (!startDate || !endDate) {
      setResult('Please select both dates.');
      return;
    }

    const start = new Date(startDate);
    const end = new Date(endDate);

    if (start > end) {
      setResult('Start date must be before end date.');
      return;
    }

    const diffTime = Math.abs(end - start);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffWeeks = Math.floor(diffDays / 7);
    const diffMonths = Math.floor(diffDays / 30.44); 
    const diffYears = Math.floor(diffDays / 365.25); 

    setResult(
      `Difference:\n${diffDays} day(s)\n${diffWeeks} week(s)\n${diffMonths} month(s)\n${diffYears} year(s)`
    );
  };

  return (
    <div className="date-diff-calculator">
      <h2>Date Difference Calculator</h2>

      <div>
        <label>Start Date:</label>
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      </div>

      <div>
        <label>End Date:</label>
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      </div>

      <button onClick={calculateDifference}>Calculate</button>

      {result && (
        <div className="date-diff-result">
          {result.split('\n').map((line, idx) => (
            <div key={idx}>{line}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DateDiffCalculator;
