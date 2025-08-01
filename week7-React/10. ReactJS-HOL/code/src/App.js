import React from 'react';
import logo from './logo.svg';
import './App.css';

const officeSpaces = [
  {
    name: 'Downtown Office',
    rent: 55000,
    address: '123 Main St, City Center',
    image: 'https://via.placeholder.com/150'
  },
  {
    name: 'Tech Park Office',
    rent: 75000,
    address: '456 Tech Park, Silicon Valley',
    image: 'https://via.placeholder.com/150'
  },
  {
    name: 'Suburban Office',
    rent: 40000,
    address: '789 Suburb Lane, Outskirts',
    image: 'https://via.placeholder.com/150'
  }
];

function getRentClass(rent) {
  return rent < 60000 ? 'textRed' : 'textGreen';
}

function App() {
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
      <div>
        <h1>Office Space Rental App</h1>
        {officeSpaces.map((office, idx) => (
          <div key={idx} style={{border: '1px solid #ccc', margin: '10px', padding: '10px'}}>
            <img src={office.image} width="150" height="150" alt="Office Space" />
            <h2>Name: {office.name}</h2>
            <h3>
              Rent: <span className={getRentClass(office.rent)}>Rs. {office.rent}</span>
            </h3>
            <h3>Address: {office.address}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;