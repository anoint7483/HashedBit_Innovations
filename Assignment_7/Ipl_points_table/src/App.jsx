import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
  fetch("/data.json")
    .then((res) => res.json())
    .then((data) => {
      const sorted = data.sort((a, b) => {
        if (b.points === a.points) {
          return parseFloat(b.nrr) - parseFloat(a.nrr); // descending NRR
        }
        return b.points - a.points; // descending points
      });
      setTeams(sorted);
    })
    .catch((err) => console.error("Error fetching data", err));
}, []);


  return (
    <div className="points-table-container">
      <h2>🏆 IPL 2022 Points Table</h2>
      <table className="points-table">
        <thead>
          <tr>
            <th>Pos</th>
            <th>Team</th>
            <th>M</th>
            <th>W</th>
            <th>L</th>
            <th>Pts</th>
            <th>NRR</th>
          </tr>
        </thead>
        <tbody>
          {teams.length === 0 ? (
            <tr>
              <td colSpan="7">Loading or no data found</td>
            </tr>
          ) : (
            teams.map((team, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{team.team}</td>
                <td>{team.matches}</td>
                <td>{team.won}</td>
                <td>{team.lost}</td>
                <td>{team.points}</td>
                <td>{parseFloat(team.nrr).toFixed(3)}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
