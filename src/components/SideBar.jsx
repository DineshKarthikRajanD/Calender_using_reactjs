import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      className="w-60 min-h-screen p-4 font-roboto bg-gray-200"
      style={{
        backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23d1d5db\" fill-opacity=\"0.5\"%3E%3Ccircle cx=\"2\" cy=\"2\" r=\"2\" /%3E%3C/g%3E%3C/svg%3E')",
        backgroundRepeat: "repeat",
      }}
    >
      <h1 className="text-xl font-bold mb-4">Calendar App</h1>
      <ul className="space-y-2">
        <li className="hover:bg-gray-300 p-2 rounded cursor-pointer">
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li className="hover:bg-gray-300 p-2 rounded cursor-pointer">
          <Link to="/calendar">Calendar</Link>
        </li>
        <li className="hover:bg-gray-300 p-2 rounded cursor-pointer">
          <Link to="/events">Events</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
