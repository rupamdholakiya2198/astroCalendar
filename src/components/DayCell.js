// import React from "react";
// import TITHI_CONFIG from "../data/tithiConfig";

// const DayCell = ({ day, events }) => {
//   return (
//     <div className="day-cell">
//       <div className="date">{day}</div>

//       <div className="events">
//         {events.map((e, i) => (
//           <div
//             key={i}
//             className="event-box"
//             style={{
//               background: TITHI_CONFIG[e.type]?.color || "#e0e0e0"
//             }}
//           >
//             {e.title} {e.symbol}
//             {e.time && <div className="time">{e.time}</div>}
//           </div>
//         ))}


//       </div>
//     </div>
//   );
// };

// export default DayCell;

import React from "react";
import TITHI_CONFIG from "../data/tithiConfig";

const DayCell = ({ day, events, currentMonth, currentYear }) => {

  const today = new Date();

  const isToday =
    today.getDate() === day &&
    today.getMonth() === currentMonth &&
    today.getFullYear() === currentYear;

  return (
    <div className={`day-cell ${isToday ? "today" : ""}`}>
      
      {/* DATE */}
      <div className="date">
        {day}
        {isToday && <span className="today-label"> ●</span>}
      </div>

      {/* EVENTS */}
      <div className="events">
        {events.map((e, i) => (
          <div
            key={i}
            className="event-box"
            style={{
              background: TITHI_CONFIG[e.type]?.color || "#e0e0e0"
            }}
          >
            {e.title} {e.symbol}
            {e.time && <div className="time">{e.time}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DayCell;