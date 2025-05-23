import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');
  const [result, setResult] = useState(null);
  const [rates, setRates] = useState({});

  useEffect(() => {
    // Fetch exchange rates from Frankfurter API
    axios.get('https://api.frankfurter.app/latest?from=USD')
      .then(response => {
        setRates({ USD: 1, ...response.data.rates });
      });
  }, []);

  const convertCurrency = () => {
    if (!amount || isNaN(amount)) {
      setResult('Enter a valid amount');
      return;
    }
    const rateFrom = rates[fromCurrency];
    const rateTo = rates[toCurrency];
    const converted = (amount / rateFrom) * rateTo;
    setResult(`${amount} ${fromCurrency} = ${converted.toFixed(2)} ${toCurrency}`);
  };

  const currencyList = Object.keys(rates);

  return (
    <div className="currency-converter-container">
      <h2>Currency Converter</h2>
      <input
        type="number"
        value={amount}
        onChange={e => setAmount(e.target.value)}
        placeholder="Enter amount"
      />

      <div>
        <label>From:</label>
        <select value={fromCurrency} onChange={e => setFromCurrency(e.target.value)}>
          {currencyList.map(curr => <option key={curr} value={curr}>{curr}</option>)}
        </select>
      </div>

      <div>
        <label>To:</label>
        <select value={toCurrency} onChange={e => setToCurrency(e.target.value)}>
          {currencyList.map(curr => <option key={curr} value={curr}>{curr}</option>)}
        </select>
      </div>

      <button onClick={convertCurrency}>Convert</button>

      {result && <div className="currency-result">{result}</div>}
    </div>
  );
};

export default CurrencyConverter;
