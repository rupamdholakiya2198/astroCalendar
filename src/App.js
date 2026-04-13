import React, { useState } from "react";
import Calendar from "./components/Calendar";
import "./App.css";
import logo from "./assets/logo.png";
// import Auth from "./Auth";

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
    // <Auth>
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
    // </Auth>
  );
}

export default App;

// import React, { useState } from "react";
// import Calendar from "./components/Calendar";
// import "./App.css";
// import logo from "./assets/logo.png";
// import Auth from "./Auth";   // ✅ ADD THIS

// function App() {
//   const today = new Date();

//   const [year, setYear] = useState(today.getFullYear());
//   const [month, setMonth] = useState(today.getMonth());

//   const months = [
//     "January", "February", "March", "April",
//     "May", "June", "July", "August",
//     "September", "October", "November", "December"
//   ];

//   const years = [2023, 2024, 2025, 2026, 2027];

//   return (
//     <Auth>   {/* ✅ WRAP EVERYTHING */}
//       <div className="app-container">

//         <div className="header">
//           <img src={logo} alt="logo" className="logo" />
//           <h2 className="title">Astro Calendar</h2>
//         </div>

//         {/* DROPDOWNS */}
//         <div className="controls">
//           <select value={month} onChange={(e) => setMonth(Number(e.target.value))}>
//             {months.map((m, i) => (
//               <option key={i} value={i}>{m}</option>
//             ))}
//           </select>

//           <select value={year} onChange={(e) => setYear(Number(e.target.value))}>
//             {years.map((y) => (
//               <option key={y} value={y}>{y}</option>
//             ))}
//           </select>
//         </div>

//         <Calendar year={year} month={month} />
//       </div>
//     </Auth>
//   );
// }

// export default App;