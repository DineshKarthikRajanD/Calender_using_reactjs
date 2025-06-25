import React from "react";
import dayjs from "dayjs";

const Header = ({
  curYear,
  curMon,
  onPrev,
  onNext,
  onViewChange,
  onAddEvent,
  activeView,
}) => {
  const today = dayjs();

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 bg-white font-roboto">
      <div className="mb-4 md:mb-0">
        <h1 className="text-3xl font-bold text-gray-800">My Calendar</h1>
        <p className="text-sm text-gray-500 mt-1">
          Today: {today.format("dddd, MMMM D, YYYY")}
        </p>
      </div>

      {/* Right: Controls */}
      <div className="flex flex-col items-start md:items-end space-y-2 w-full md:w-auto">
        {/* View Mode + Add Event */}
        <div className="flex gap-2 flex-wrap">
          {["Weekly", "Monthly", "Timeline"].map((mode) => (
            <button
              key={mode}
              onClick={() => onViewChange(mode)}
              className={`px-3 py-1 text-sm rounded ${
                activeView === mode
                  ? "bg-blue-600 text-white"
                  : "bg-blue-100 text-blue-600 hover:bg-blue-200"
              }`}
            >
              {mode}
            </button>
          ))}
          <button
            onClick={onAddEvent}
            className="px-4 py-1 text-sm bg-green-500 text-white rounded hover:bg-green-600"
          >
            + Add Event
          </button>
        </div>

        {/* Month Navigation */}
        {/* Month Navigation */}
        <div className="flex gap-2 items-center mt-2">
          <button
            onClick={onPrev}
            className="px-3 py-0 text-xl bg-white text-black rounded hover:bg-blue-400 hover:text-white border"
          >
            &#8249; {/* or just "<" */}
          </button>
          <h2 className="text-lg font-semibold text-gray-700">
            {dayjs(`${curYear}-${curMon}-01`).format("MMMM YYYY")}
          </h2>
          <button
            onClick={onNext}
            className="px-3 text-xl bg-white text-black rounded hover:bg-blue-400 hover:text-white border"
          >
            &#8250; 
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
