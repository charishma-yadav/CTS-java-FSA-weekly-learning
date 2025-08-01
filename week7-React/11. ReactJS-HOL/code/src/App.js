import React, { useState } from 'react';
import logo from './logo.svg';
import CurrencyConverter from './CurrencyConverter';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  // Multiple handlers for increment
  const handleIncrement = () => {
    setCount(prev => prev + 1);
    sayHello();
  };

  const sayHello = () => {
    alert('Hello! This is a static message.');
  };

  const handleDecrement = () => {
    setCount(prev => prev - 1);
  };

  const sayWelcome = (msg) => {
    alert(msg);
  };

  const handlePress = (e) => {
    alert('I was clicked');
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h2>Counter Example</h2>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <br /><br />
      <button onClick={() => sayWelcome('welcome')}>Say Welcome</button>
      <br /><br />
      <button onClick={handlePress}>OnPress</button>
      <br /><br />
      <CurrencyConverter />
    </div>
  );
}

export default App;
