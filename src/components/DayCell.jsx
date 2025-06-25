import React from "react";
import { isToday } from "../utils/dateUtils";
import EventCard from "./EventCard";

const DayCell = ({ day, date, onClick, events }) => {
  const matchedEvents = events.filter((event) => event.date === date);
  const today = isToday(date);

  // If any event exists, use the color of the first one
  const eventColor = matchedEvents.length > 0 ? matchedEvents[0].color : null;

  return (
    <div
      onClick={() => onClick(date)}
      className={`h-28 border p-2 font-roboto cursor-pointer text-left relative transition duration-150 ease-in-out hover:shadow-md ${
        today ? "border-4 border-blue-950" : "border"
      }`}
      style={{
        backgroundColor: eventColor
          ? eventColor
          : today
          ? "#DBEAFE"
          : "#ffffff", // Tailwind's bg-blue-100
      }}
    >
      {/* Day number */}
      <div className="text-sm font-semibold text-blue-950">
        <span
          className={`inline-block w-6 h-6 text-center ${
            today ? "font-bold" : ""
          }`}
        >
          {day}
        </span>
      </div>

      {/* Events */}
      <div className="overflow-y-auto max-h-[4.5rem] pr-1 mt-1 space-y-1 scrollbar-hide">
        {matchedEvents.map((e, idx) => (
          <div key={idx}>
            <EventCard title={e.title} color={e.color} />
            <div className="text-xs text-gray-700 ml-2">
              {e.startTime} - {e.endTime}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DayCell;
