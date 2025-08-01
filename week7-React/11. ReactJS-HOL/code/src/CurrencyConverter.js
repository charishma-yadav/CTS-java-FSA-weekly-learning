import React, { useState } from 'react';

function CurrencyConverter() {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('INR');
  const [result, setResult] = useState('');

  // Example conversion rates
  const INR_TO_EURO = 0.011;
  const EURO_TO_INR = 90;

  const handleSubmit = (e) => {
    e.preventDefault();
    let converted = '';
    if (currency === 'INR') {
      converted = (parseFloat(amount) * INR_TO_EURO).toFixed(2) + ' Euro';
    } else {
      converted = (parseFloat(amount) * EURO_TO_INR).toFixed(2) + ' INR';
    }
    setResult(converted);
  };

  return (
    <div>
      <h2>Currency Convertor!!!</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Currency:
          <select value={currency} onChange={e => setCurrency(e.target.value)}>
            <option value="INR">INR</option>
            <option value="EURO">EURO</option>
          </select>
        </label>
        <br />
        <button type="submit">Convert</button>
      </form>
      {result && <p>Result: {result}</p>}
    </div>
  );
}

export default CurrencyConverter;