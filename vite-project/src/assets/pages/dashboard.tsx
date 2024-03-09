import React from "react";
import PieChart from "../dashboard/PiesChart";
import Chart from "../dashboard/chart";
import InfoCard from "../dashboard/infoCard";
import Country from "../dashboard/country";
import Calendar from "../dashboard/calendar";
import Meetings from "../dashboard/meetings";
import { cardInfoType } from "../Types/CardInfoTypes";
const CardInfo: cardInfoType[] = [
  {
    title: "Net Income",
    value: "$10.178.00",
    revenue: "+23.5",
    success: true,
  },
  {
    title: "Avr. Order Value",
    value: "$896.00",
    revenue: "-23.5",
    success: false,
  },
  {
    title: "Orders",
    value: "7,563",
    revenue: "+12.5",
    success: true,
  },
];

const dashboard = () => {
  return (
    <div className="flex flex-col w-screen pr-10">
      <div className="w-full ml-1 mt-5  ">
        <div className="flex gap-4 justify-center  ">
          {CardInfo.map((card, index) => (
            <InfoCard key={index} card={card} />
          ))}
          <div className="flex flex-col w-[25%] ml-8">
            <Calendar />
            <Meetings />
            <PieChart />
          </div>
        </div>
      </div>
      <div className="flex">
        <Chart />
        <Country />
      </div>
    </div>
  );
};

export default dashboard;
