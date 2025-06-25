import React, { useState } from "react";

const AddEventModal = ({ onClose, onSave }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [color, setColor] = useState("#60a5fa"); // default Tailwind blue-400

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !date || !startTime || !endTime) return;
    onSave({ title, date, startTime, endTime, color });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold mb-4">Add New Event</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            className="w-full border p-2 rounded"
            type="text"
            placeholder="Event Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="w-full border p-2 rounded"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <div className="flex gap-2">
            <input
              className="w-full border p-2 rounded"
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
            />
            <input
              className="w-full border p-2 rounded"
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
            />
          </div>
          <input
            className="w-full border p-2 rounded"
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Save Event
          </button>
        </form>
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-xl font-bold text-gray-700 hover:text-red-500"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default AddEventModal;
