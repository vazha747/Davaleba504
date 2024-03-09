import React from "react";

// Define TypeScript types
interface Segment {
  color: string;
  percentage: number;
  dasharray: string;
  dashoffset: number;
}

interface PiesChartProps {}

const PiesChart: React.FC<PiesChartProps> = () => {
  // Define dummy data
  const data: Segment[] = [
    { color: "#ce4b99", percentage: 25, dasharray: "", dashoffset: 0 },
    { color: "#a12a", percentage: 30, dasharray: "", dashoffset: 0 },
    { color: "#d2d234", percentage: 45, dasharray: "", dashoffset: 0 },
  ];

  // Calculate strokeDasharray and strokeDashoffset for each segment
  let totalPercentage = 0;
  const segments = data.map((item) => {
    const dasharray = `${item.percentage} ${100 - item.percentage}`;
    const dashoffset = totalPercentage;
    totalPercentage += item.percentage;
    return { ...item, dasharray, dashoffset };
  });

  return (
    <div className=" display-flex flex-end justify-end mt-2 bg-white border border-gray-200 rounded-lg shadow">
      <span>Total Users: 140k</span>
      <div>
        <svg width="100%" height="100%" viewBox="0 0 42 42" className="donut">
          <circle
            className="donut-hole"
            cx="21"
            cy="21"
            r="15"
            fill="transparent"
          ></circle>
          <circle
            className="donut-ring"
            cx="21"
            cy="21"
            r="15"
            fill="transparent"
            stroke="#d2d3d4"
            strokeWidth="10"
          ></circle>
          {/* Map segments */}
          {segments.map((segment, index) => (
            <circle
              key={index}
              className="donut-segment"
              cx="21"
              cy="21"
              r="15"
              fill="transparent"
              stroke={segment.color}
              strokeWidth="10"
              strokeDasharray={segment.dasharray}
              strokeDashoffset={segment.dashoffset}
            ></circle>
          ))}
          <ul className=" gap-1 ">
            <li>Firefox 46.2k</li>
            <li>Chrome 33.8k</li>
            <li>Safari 33.6k</li>
            <li>Edge 29.4</li>
          </ul>
        </svg>
      </div>
    </div>
  );
};

export default PiesChart;
