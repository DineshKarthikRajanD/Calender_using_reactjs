import React from "react";

const EventCard = ({ title, startTime, endTime, color }) => {
  return (
    <div
      className="text-[15px] px-1 py-[1px] rounded overflow-hidden truncate font-roboto"
      style={{ backgroundColor: color, color: "#fff" }}
      title={`${title}`}
    >
      {title}
    </div>
  );
};

export default EventCard;
