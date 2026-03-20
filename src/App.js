import React, { useState } from "react";
import Calendar from "./components/Calendar";
import "./App.css";

function App() {
  const [year, setYear] = useState(2026);
  const [month, setMonth] = useState(2); // March

  const months = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
  ];

  const years = [2023, 2024, 2025, 2026, 2027];

  return (
    <div className="app-container">
      <h2>Astro Calendar</h2>

      {/* 🔥 DROPDOWNS */}
      <div className="controls">
        <select value={month} onChange={(e) => setMonth(Number(e.target.value))}>
          {months.map((m, i) => (
            <option key={i} value={i}>{m}</option>
          ))}
        </select>

        <select value={year} onChange={(e) => setYear(Number(e.target.value))}>
          {years.map((y) => (
            <option key={y} value={y}>{y}</option>
          ))}
        </select>
      </div>

      <Calendar year={year} month={month} />
    </div>
  );
}

export default App;