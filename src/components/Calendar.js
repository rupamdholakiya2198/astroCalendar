
// import React from "react";
// import DayCell from "./DayCell";
// import events from "../data/events.json";

// const Calendar = ({ year, month }) => {
//   const daysInMonth = new Date(year, month + 1, 0).getDate();

//   // 👉 FIX: Make Monday first (like your Excel)
//   let firstDay = new Date(year, month, 1).getDay();
//   firstDay = firstDay === 0 ? 6 : firstDay - 1;

//   const getEventsForDate = (date) => {
//     return events.filter((e) => e.date === date);
//   };

//   const cells = [];

//   // Empty cells
//   for (let i = 0; i < firstDay; i++) {
//     cells.push(<div key={"empty-" + i} className="empty"></div>);
//   }

//   // Days
//   for (let d = 1; d <= daysInMonth; d++) {
//     const fullDate = `${year}-${String(month + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
//     const dayEvents = getEventsForDate(fullDate);

//     cells.push(
//       <DayCell key={d} day={d} events={dayEvents} />
//     );
//   }

//   return (
//     <>
//       {/* 🔥 WEEK HEADER */}
//       <div className="week-header">
//         <div>Mon</div>
//         <div>Tue</div>
//         <div>Wed</div>
//         <div>Thu</div>
//         <div>Fri</div>
//         <div>Sat</div>
//         <div>Sun</div>
//       </div>

//       {/* CALENDAR */}
//       <div className="calendar-grid">{cells}</div>
//     </>
//   );
// };

// export default Calendar;

import React, { useState, useEffect } from "react";
import DayCell from "./DayCell";
import events from "../data/events.json";

const Calendar = ({ year, month }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const getEventsForDate = (date) => {
    return events.filter((e) => e.date === date);
  };

  // 📱 MOBILE VIEW (LIST)
  if (isMobile) {
    return (
      <div>
        {Array.from({ length: daysInMonth }, (_, i) => {
          const d = i + 1;
          const fullDate = `${year}-${String(month + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
          const dayEvents = getEventsForDate(fullDate);

          return (
            <div key={d} className="mobile-day">
              <div className="mobile-date">{d}</div>

              {dayEvents.map((e, i) => (
                <div
                  key={i}
                  className="event-box"
                  style={{ background: "#fff" }}
                >
                  {e.symbol} {e.title}
                  {e.time && <div className="time">{e.time}</div>}
                </div>
              ))}
            </div>
          );
        })}
      </div>
    );
  }

  // 💻 DESKTOP VIEW (GRID)
  let firstDay = new Date(year, month, 1).getDay();
  firstDay = firstDay === 0 ? 6 : firstDay - 1;

  const cells = [];

  for (let i = 0; i < firstDay; i++) {
    cells.push(<div key={"empty-" + i} className="empty"></div>);
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const fullDate = `${year}-${String(month + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
    const dayEvents = getEventsForDate(fullDate);

    cells.push(<DayCell key={d} day={d} events={dayEvents} />);
  }

  return (
    <>
      <div className="week-header">
        <div>Mon</div><div>Tue</div><div>Wed</div>
        <div>Thu</div><div>Fri</div><div>Sat</div><div>Sun</div>
      </div>

      <div className="calendar-grid">{cells}</div>
    </>
  );
};

export default Calendar;