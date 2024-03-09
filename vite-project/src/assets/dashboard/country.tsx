import React from "react";

const costumersList = [
  {
    costumer: "USA",
    percentage: "43%",
  },
  {
    costumer: "Turkey",
    percentage: "32%",
  },
  {
    costumer: "China",
    percentage: "27%",
  },
  {
    costumer: "Russia",
    percentage: "19%",
  },
  {
    costumer: "Germany",
    percentage: "13%",
  }
];

const country = () => {
  return (
    <div className=" mt-6 bg-white border border-gray-200 rounded-lg shadow">
      <span>Costumer By Country</span>
      <div>
        {costumersList.map((costumers, index) => (
          <div>
            <span key={index} costumers={costumers}>
              {costumers.costumer} {costumers.percentage}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default country;
