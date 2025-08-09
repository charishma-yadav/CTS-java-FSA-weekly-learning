import React, { useState } from "react";

function CurrencyConvertor() {
  const [inr, setInr] = useState("");
  const [eur, setEur] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const euroValue = (parseFloat(inr) / 90).toFixed(2);
    setEur(euroValue);
  };

  return (
    <div style={styles.section}>
      <h2>Currency Convertor</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={inr}
          placeholder="Enter INR"
          onChange={(e) => setInr(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Convert
        </button>
      </form>
      {eur && <p>{inr} INR = {eur} EUR</p>}
    </div>
  );
}

export default function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const sayHello = () => console.log("Hello! Welcome to the Counter App");
  const decrement = () => setCount(count - 1);

  const sayMessage = (msg) => alert(msg);

  const handlePress = (event) => {
    alert("I was clicked");
    console.log("Synthetic event:", event);
  };

  return (
    <div style={styles.container}>
      <h1>React Event Handling Examples</h1>
      <div style={styles.section}>
        <h2>Counter</h2>
        <p>Value: {count}</p>
        <button
          style={styles.button}
          onClick={() => {
            increment();
            sayHello();
          }}
        >
          Increment
        </button>
        <button style={styles.button} onClick={decrement}>
          Decrement
        </button>
      </div>
      <div style={styles.section}>
        <button style={styles.button} onClick={() => sayMessage("Welcome!")}>
          Say Welcome
        </button>
      </div>
      <div style={styles.section}>
        <button style={styles.button} onClick={handlePress}>
          Synthetic Event (OnPress)
        </button>
      </div>
      <CurrencyConvertor />
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    textAlign: "center",
  },
  section: {
    margin: "20px auto",
    padding: "15px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    maxWidth: "400px",
  },
  button: {
    margin: "5px",
    padding: "8px 15px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  input: {
    padding: "8px",
    marginRight: "8px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
};
