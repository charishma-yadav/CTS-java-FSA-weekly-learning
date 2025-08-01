
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ThemeContext from './ThemeContext';
import EmployeesList from './EmployeesList';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`App ${theme}`}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={toggleTheme} style={{marginBottom: '20px'}}>
            Toggle Theme
          </button>
          <EmployeesList />
        </header>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
