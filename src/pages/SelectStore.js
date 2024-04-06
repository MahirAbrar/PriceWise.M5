import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Link } from "react-router-dom";

const SelectStore = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const stores = {
    st1Cal: ["Store 1", "California, USA"],
    st2Cal: ["Store 2", "California, USA"],
    st3Cal: ["Store 3", "California, USA"],
    st4Cal: ["Store 4", "California, USA"],
    st1Tex: ["Store 1", "Texas, USA"],
    st2Tex: ["Store 2", "Texas, USA"],
    st3Tex: ["Store 3", "Texas, USA"],
    st1Win: ["Store 1", "Wisconsin, USA"],
    st2Win: ["Store 2", "Wisconsin, USA"],
    st3Win: ["Store 3", "Wisconsin, USA"],
  };

  // Function to handle card click
  const handleCardClick = (storeId) => {
    navigate(`/select/${storeId}`); // Navigate to dynamic route
  };

  return (
    <>
      {/* Content */}
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>
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
