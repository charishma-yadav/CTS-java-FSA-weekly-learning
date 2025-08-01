
import { useState } from 'react';
import './App.css';

const flights = [
  { id: 1, from: 'New York', to: 'London', time: '10:00 AM', price: 500 },
  { id: 2, from: 'Paris', to: 'Tokyo', time: '2:00 PM', price: 800 },
  { id: 3, from: 'Sydney', to: 'Dubai', time: '6:00 PM', price: 700 },
];

function GuestPage({ onLogin }) {
  return (
    <div>
      <h1>Welcome, Guest!</h1>
      <FlightList canBook={false} />
      <button onClick={onLogin}>Login</button>
    </div>
  );
}

function UserPage({ onLogout }) {
  return (
    <div>
      <h1>Welcome, User!</h1>
      <FlightList canBook={true} />
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

function FlightList({ canBook }) {
  const [booked, setBooked] = useState([]);
  const handleBook = (flight) => {
    setBooked((prev) => [...prev, flight.id]);
    alert(`Ticket booked for flight from ${flight.from} to ${flight.to}!`);
  };
  return (
    <div>
      <h2>Available Flights</h2>
      <table style={{ margin: '0 auto' }}>
        <thead>
          <tr>
            <th>From</th>
            <th>To</th>
            <th>Time</th>
            <th>Price</th>
            {canBook && <th>Action</th>}
          </tr>
        </thead>
        <tbody>
          {flights.map((flight) => (
            <tr key={flight.id}>
              <td>{flight.from}</td>
              <td>{flight.to}</td>
              <td>{flight.time}</td>
              <td>${flight.price}</td>
              {canBook && (
                <td>
                  <button
                    onClick={() => handleBook(flight)}
                    disabled={booked.includes(flight.id)}
                  >
                    {booked.includes(flight.id) ? 'Booked' : 'Book'}
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return loggedIn ? (
    <UserPage onLogout={() => setLoggedIn(false)} />
  ) : (
    <GuestPage onLogin={() => setLoggedIn(true)} />
  );
}

export default App;
