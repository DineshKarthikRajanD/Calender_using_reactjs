import React from "react";

const EventModal = ({ events, onClose }) => {
  // Prevent modal close when clicking inside the modal box
  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose} // clicking outside will trigger close
    >
      <div
        className="bg-white p-6 rounded-lg w-96 shadow-lg relative"
        onClick={handleModalClick} // prevent close when clicking inside
      >
        <h2 className="text-xl font-bold mb-4">Event Details</h2>
        <ul className="space-y-3 max-h-64 overflow-y-auto">
          {events.map((event, index) => (
            <li key={index} className="p-3 border rounded bg-blue-100">
              <h3 className="font-semibold">{event.title}</h3>
              <p>Date: {event.date}</p>
              <p>
                Time: {event.startTime} - {event.endTime}
              </p>
            </li>
          ))}
        </ul>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-xl font-bold text-gray-700 hover:text-red-500"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default EventModal;
