import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

function EmployeeCard({ name, position }) {
  const theme = useContext(ThemeContext);
  return (
    <div className={`employee-card ${theme}`} style={{border: '1px solid #ccc', margin: '10px', padding: '10px'}}>
      <h3>{name}</h3>
      <p>{position}</p>
      <button className={`btn-${theme}`}>View Profile</button>
    </div>
  );
}

export default EmployeeCard;
