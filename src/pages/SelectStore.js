import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const SelectStore = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const stores = {
    store1California: ["Store 1", "California, USA"],
    store2California: ["Store 2", "California, USA"],
    store3California: ["Store 3", "California, USA"],
    store4California: ["Store 4", "California, USA"],
    store1Texas: ["Store 1", "Texas, USA"],
    store2Texas: ["Store 2", "Texas, USA"],
    store3Texas: ["Store 3", "Texas, USA"],
    store1Wisconsin: ["Store 1", "Wisconsin, USA"],
    store2Wisconsin: ["Store 2", "Wisconsin, USA"],
    store3Wisconsin: ["Store 3", "Wisconsin, USA"],
  };

  // Function to handle card click
  const handleCardClick = (storeId) => {
    navigate(`/selectItem-${storeId}`); // Navigate to dynamic route
  };

  return (
    <>
      {/* Content */}
      <h1 className="text-xl font-semibold">
        Welcome. Please select your store.
      </h1>
      <div className="flex flex-wrap gap-5 mt-2">
        {Object.entries(stores).map(([storeId, [storeName, storeLocation]]) => (
          <div
            key={storeId}
            className="card w-96 bg-base-100 shadow-xl flex flex-row items-center hover:shadow-lg hover:cursor-pointer"
            onClick={() => handleCardClick(storeId)} // Set onClick to handleCardClick
          >
            <div className="card-body">
              <h2 className="card-title">{storeName}</h2>
              <p>{storeLocation}</p>
            </div>
            <div className="mr-5 font-bold text-2xl">{">"}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SelectStore;
