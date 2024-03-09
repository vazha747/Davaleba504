import React from "react";

const schedule = [
  {
    date: "27 Aug",
    text: "Daily Scrum Meeting",
  },
  {
    date: "29 Aug",
    text: "Squad Planning",
  },
  {
    date: "31 Aug",
    text: "Design Team Meeting ",
  },
];

const meetings = () => {
  return (
    <div className="gap-1 text-white ml-2">
      <p className="text-gray-500 text-sm">Incoming Meetings</p>
      <div className="flex bg-red-700 gap-1 mt-2 rounded-xl px-2">
        <span className="text-sm text-gray-300 ">27 Aug</span>
        <span> Daily Scrum Meeting</span>
      </div>
      <div className="flex bg-blue-700 gap-1 mt-2 rounded-xl px-2">
        <span className="text-sm text-gray-300">29 Aug</span>
        <span> Squad Planning</span>
      </div>
      <div className="flex bg-green-700 gap-1 mt-2 rounded-xl px-2">
        <span className="text-sm text-gray-300">31 Aug</span>
        <span> Design team Meeting</span>
      </div>
    </div>
  );
};

export default meetings;
