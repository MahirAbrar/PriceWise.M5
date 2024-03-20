import React from "react";

const PriceOptimizationPage = () => {
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

  return (
    <>
      {/* Content */}
      <h1>Welcome. Please select your store.</h1>
      <div className="grid grid-cols-3 gap-4">
        {Object.keys(stores).map((store) => (
          <div className="card w-96 bg-base-100 shadow-xl flex flex-col">
            <div className="card-body">
              <h2 className="card-title">{stores[store][0]}</h2>
              <p className="">{stores[store][1]}</p>
            </div>
            <div>hello</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PriceOptimizationPage;
