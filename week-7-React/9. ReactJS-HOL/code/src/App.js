import React, { useState } from "react";
import { OddPlayers } from "./OddPlayers";
import { IndianPlayers } from "./IndianPlayers";

function App() {
  const [flag, setFlag] = useState(true);

  return (
    <div>
      <button onClick={() => setFlag(!flag)}>Toggle View</button>
      {flag ? (
        <OddPlayers players={IndianPlayers} />
      ) : (
        <ul>
          {IndianPlayers.map((player, idx) => (
            <li key={idx}>{player}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;