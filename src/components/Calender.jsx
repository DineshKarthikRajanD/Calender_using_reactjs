import React, { useState } from "react";
import dayjs from "dayjs";
import { getMonthDays } from "../utils/dateUtils";
import initialEvents from "../assets/event.json";
import DayCell from "./DayCell";
import Sidebar from "./SideBar";
import Header from "./Header";
import EventModal from "./EventModal";

const Calendar = () => {
  const today = dayjs();
  const [curMon, setCurMon] = useState(today.month() + 1);
  const [curYear, setCurYear] = useState(today.year());
  const [viewMode, setViewMode] = useState("Monthly");
  const [events, setEvents] = useState(initialEvents); // Local state for events
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: "",
    description: "",
    date: today.format("YYYY-MM-DD"),
  });

  const { daysInMonth, startDayOfWeek } = getMonthDays(curYear, curMon);
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const todayDayName = today.format("ddd");

  const goToPrevMonth = () => {
    if (curMon === 1) {
      setCurMon(12);
      setCurYear(curYear - 1);
    } else {
      setCurMon(curMon - 1);
    }
  };

  const goToNextMonth = () => {
    if (curMon === 12) {
      setCurMon(1);
      setCurYear(curYear + 1);
    } else {
      setCurMon(curMon + 1);
    }
  };

  const handleViewChange = (mode) => setViewMode(mode);

  const handleAddEvent = () => {
    setNewEvent({
      title: "",
      description: "",
      date: today.format("YYYY-MM-DD"),
    });
    setIsAddModalOpen(true);
  };

  const handleDateClick = (date) => {
    const filtered = events.filter((e) => e.date === date);
    if (filtered.length > 0) {
      setSelectedEvents(filtered);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvents([]);
  };

  const closeAddModal = () => {
    setIsAddModalOpen(false);
  };

  const handleSaveEvent = () => {
    if (newEvent.title.trim() === "" || newEvent.date.trim() === "") {
      alert("Title and date are required.");
      return;
    }

    const updatedEvents = [...events, { ...newEvent }];
    setEvents(updatedEvents);
    setIsAddModalOpen(false);
  };

  return (
    <div className="flex h-screen font-roboto">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header
          curYear={curYear}
          curMon={curMon}
          onPrev={goToPrevMonth}
          onNext={goToNextMonth}
          onViewChange={handleViewChange}
          onAddEvent={handleAddEvent}
          activeView={viewMode}
        />

        <div className="flex flex-col px-6 overflow-hidden">
          <div className="grid grid-cols-7 text-center font-semibold">
            {days.map((d) => (
              <div
                key={d}
                className={`border py-5 ${
                  d === todayDayName
                    ? "bg-blue-100 border-blue-950 border-4 text-blue-950 font-bold"
                    : ""
                }`}
              >
                {d}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 border overflow-y-auto bg-gray-300">
            {[...Array(startDayOfWeek)].map((_, i) => (
              <div key={`empty-${i}`}></div>
            ))}

            {[...Array(daysInMonth)].map((_, dayIndex) => {
              const day = dayIndex + 1;
              const fullDate = `${curYear}-${String(curMon).padStart(
                2,
                "0"
              )}-${String(day).padStart(2, "0")}`;

              return (
                <DayCell
                  key={day}
                  day={day}
                  date={fullDate}
                  events={events}
                  onClick={handleDateClick}
                  isToday={fullDate === today.format("YYYY-MM-DD")}
                />
              );
            })}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <EventModal events={selectedEvents} onClose={closeModal} />
      )}

      {/* Add Event Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96 shadow-md">
            <h2 className="text-lg font-bold mb-4">Add New Event</h2>
            <input
              type="text"
              placeholder="Title"
              value={newEvent.title}
              onChange={(e) =>
                setNewEvent({ ...newEvent, title: e.target.value })
              }
              className="w-full mb-2 p-2 border rounded"
            />
            <textarea
              placeholder="Description"
              value={newEvent.description}
              onChange={(e) =>
                setNewEvent({ ...newEvent, description: e.target.value })
              }
              className="w-full mb-2 p-2 border rounded"
            />
            <input
              type="date"
              value={newEvent.date}
              onChange={(e) =>
                setNewEvent({ ...newEvent, date: e.target.value })
              }
              className="w-full mb-4 p-2 border rounded"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={closeAddModal}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveEvent}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;
