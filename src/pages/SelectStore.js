import React from "react";
import { useNavigate } from "react-router-dom";
import { useBreadcrumbs } from "../context/BreadcrumbsContext";
import { useEffect } from "react";
import { useTrail, animated } from "react-spring";

const SelectStore = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  //* BREADCRUMBS
  const { setItems } = useBreadcrumbs();
  useEffect(() => {
    setItems([{ label: "Home", path: "/" }, { label: "Store" }]); // Set specific breadcrumbs for this page
  }, [setItems]);
  //*

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

  const trail = useTrail(Object.entries(stores).length, {
    from: { opacity: 0, transform: "translate3d(0,-40px,0)" },
    to: { opacity: 1, transform: "translate3d(0,0px,0)" },
  });

  return (
    <>
      <h1 className="text-xl font-semibold">
        Welcome. Please select your store.
      </h1>
      <div className="flex flex-wrap gap-5 mt-2">
        {trail.map((props, index) => {
          const [storeId, [storeName, storeLocation]] =
            Object.entries(stores)[index];
          return (
            <animated.div
              key={storeId}
              style={props}
              className="card w-96 bg-base-100 shadow-xl flex flex-row items-center hover:shadow-lg hover:cursor-pointer flex-grow"
              onClick={() => handleCardClick(storeId)}
            >
              <div className="card-body">
                <h2 className="card-title">{storeName}</h2>
                <p>{storeLocation}</p>
              </div>
              <div className="mr-5 font-bold text-2xl">{">"}</div>
            </animated.div>
          );
        })}
      </div>
    </>
  );
};

export default SelectStore;
