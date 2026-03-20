
import React from "react";
import DayCell from "./DayCell";
import events from "../data/events.json";

const Calendar = ({ year, month }) => {
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // 👉 FIX: Make Monday first (like your Excel)
  let firstDay = new Date(year, month, 1).getDay();
  firstDay = firstDay === 0 ? 6 : firstDay - 1;

  const getEventsForDate = (date) => {
    return events.filter((e) => e.date === date);
  };

  const cells = [];

  // Empty cells
  for (let i = 0; i < firstDay; i++) {
    cells.push(<div key={"empty-" + i} className="empty"></div>);
  }

  // Days
  for (let d = 1; d <= daysInMonth; d++) {
    const fullDate = `${year}-${String(month + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
    const dayEvents = getEventsForDate(fullDate);

    cells.push(
      <DayCell key={d} day={d} events={dayEvents} />
    );
  }

  return (
    <>
      {/* 🔥 WEEK HEADER */}
      <div className="week-header">
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
        <div>Sun</div>
      </div>

      {/* CALENDAR */}
      <div className="calendar-grid">{cells}</div>
    </>
  );
};

export default Calendar;