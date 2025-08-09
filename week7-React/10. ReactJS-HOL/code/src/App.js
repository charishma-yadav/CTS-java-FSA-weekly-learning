import React from 'react';

function App() {
  const offices = [
    { name: 'Tech Park', rent: 55000, address: 'MG Road, Bangalore', image: 'https://via.placeholder.com/300x200?text=Tech+Park' },
    { name: 'Business Hub', rent: 75000, address: 'Anna Salai, Chennai', image: 'https://via.placeholder.com/300x200?text=Business+Hub' },
    { name: 'Startup Space', rent: 45000, address: 'Hitech City, Hyderabad', image: 'https://via.placeholder.com/300x200?text=Startup+Space' }
  ];

  const headingStyle = {
    textAlign: 'center',
    color: '#333',
    margin: '20px 0'
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap'
  };

  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '15px',
    width: '300px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
  };

  return (
    <div>
      <h1 style={headingStyle}>Office Space Rental App</h1>
      <div style={containerStyle}>
        {offices.map((office, index) => (
          <div key={index} style={cardStyle}>
            <img src={office.image} alt={office.name} style={{ width: '100%', borderRadius: '8px' }} />
            <h2>{office.name}</h2>
            <p style={{ color: office.rent < 60000 ? 'red' : 'green', fontWeight: 'bold' }}>
              Rent: ₹{office.rent}
            </p>
            <p>{office.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
