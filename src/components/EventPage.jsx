import React from "react";
import events from "../assets/event.json";

const Events = () => {
  return (
    <div className="p-6 font-roboto">
      <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
        All Events
      </h1>

      {events.length === 0 ? (
        <p className="text-gray-600 text-center">No events found.</p>
      ) : (
        <div className="flex justify-center">
          <ul className="space w-[800px] grid grid-cols-2 gap-6 mt-5">
            {events.map((event, index) => (
              <li
                key={index}
                className="bg-orange-50 p-4 rounded border-l-4 shadow"
                style={{ borderColor: event.color }}
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {event.title}
                  </h2>
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: event.color }}
                    title={`Event Color: ${event.color}`}
                  />
                </div>
                <p className="text-sm text-gray-500">📅 Date: {event.date}</p>
                <p className="text-sm text-gray-600">
                  🕒 {event.startTime} - {event.endTime}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Events;
