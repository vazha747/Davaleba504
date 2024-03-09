import React from "react";

const infoCard = ({
  card,
}: {
  card: { title: string; value: string; revenue: string; success: boolean };
}) => {
  return (
    <div className="flex-wrap" >
      <div className="  bg-white border border-gray-200 rounded-lg shadow">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 border-b">
               <div className="p-5" >{card.title}</div>
        </h5>
        <p className="mb-3 p-5 font-normal text-gray-700 dark:text-gray-400">
            <h5 className="text-2xl">{card.value}</h5>
        </p>
        <div className="flex ">
          {card.success === true ? (
            <div className=" p-3 rounded-l-lg flex gap-5">
              <span className="bg-green-500 text-white rounded-xl text-sm px-2">{card.revenue}</span>
              <p className="text-sm text-gray-500">From Last Period</p>
            </div>
          ):(
             <div className=" p-3 rounded-l-lg flex gap-5">
              <span className="bg-red-500 text-white rounded-xl text-sm px-2">{card.revenue}</span>
              <p className="text-sm text-gray-500">From Last Period</p>
             </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default infoCard;
