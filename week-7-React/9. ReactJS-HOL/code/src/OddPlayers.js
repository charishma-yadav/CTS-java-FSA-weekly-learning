import React from "react";

export function OddPlayers({ players }) {
  if (!players) return null; // Prevents error if players is null/undefined
  const [first, , third, , fifth] = players;
  return (
    <div>
      <li>First : {first}</li>
      <li>Third : {third}</li>
      <li>Fifth : {fifth}</li>
    </div>
  );
}