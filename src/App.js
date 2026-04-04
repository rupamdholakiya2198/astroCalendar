import React, { useState } from "react";
import Calendar from "./components/Calendar";
import "./App.css";
import logo from "./assets/logo.png";

function App() {
const today = new Date();

const [year, setYear] = useState(today.getFullYear());
const [month, setMonth] = useState(today.getMonth());

  const months = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
  ];

  const years = [2023, 2024, 2025, 2026, 2027];

  return (
    <div className="app-container">

      <div className="header">
  <img src={logo} alt="logo" className="logo" />
  <h2 className="title">Astro Calendar</h2>
     </div>

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