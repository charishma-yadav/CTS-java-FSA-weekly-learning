import React from "react";

const players = [
  { name: "Player1", score: 65 },
  { name: "Player2", score: 80 },
  { name: "Player3", score: 55 },
];

const players70 = players.filter(item => item.score <= 70);

export function OddPlayers([first, , third, , fifth]) {
  return (
    <div>
      <li>First : {first}</li>
      <li>Third : {third}</li>
      <li>Fifth : {fifth}</li>
    </div>
  );
}

export default players70;