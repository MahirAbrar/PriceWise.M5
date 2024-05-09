import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useBreadcrumbs } from "../context/BreadcrumbsContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import getYear from "../api/selectYears";

const SelectYear = () => {
  const { storeId, itemId } = useParams();
  const { setItems } = useBreadcrumbs();
  const [items, setItemData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const [eventValue, setEventValue] = useState(
    () => Number(localStorage.getItem("eventValue")) || 1
  );
  const [snapValue, setSnapValue] = useState(
    () => Number(localStorage.getItem("snapValue")) || 1
  );
  const [snapBool, setSnapBool] = useState(
    () => JSON.parse(localStorage.getItem("snapBool")) || false
  );
  const [eventBool, setEventBool] = useState(
    () => JSON.parse(localStorage.getItem("eventBool")) || false
  );
  useEffect(() => {
    setItems([
      { label: "Home", path: "/" },
      { label: "Store", path: "/select" },
      { label: "Item", path: `/select/${storeId}` },
      { label: "Year" },
    ]);

    getYear(storeId, itemId, eventBool, snapBool).then((data) => {
      setItemData(data);
      setIsLoading(false);
    });
  }, [setItems]);

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
  let curStore = stores[storeId] ? stores[storeId] : ["Unknown Store", "", ""];

  const handleClick = (year) => {
    navigate(`/select/${storeId}/${itemId}/${year}`);
  };

  return (
    <div className="flex flex-col gap-y-1">
      <h1 className="font-bold text-xl">
        Please select the year for which you would like to predict the sales for
        optimum price.
      </h1>

      <div>
        <span className="ccloading ccloading-infinity ccloading-lg"></span>
      </div>
      <h1 className="text-gray-500 text-md">
        {curStore[0]}, {curStore[1]}, {itemId}
      </h1>

      <div className="flex flex-row items-center gap-x-6 ">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold">
            Snap
          </h1>
          <h1 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold">
            Event
          </h1>
        </div>
        <div className="flex flex-col gap-y-2">
          <h1>{snapBool ? "True" : "False"}</h1>
          <h1>{eventBool ? "True" : "False"}</h1>
        </div>
        <div className="flex flex-col gap-y-2">
          {snapBool ? <h1> {snapValue} </h1> : <h1>---</h1>}
          {eventBool ? <h1> {eventValue} </h1> : <h1>---</h1>}
        </div>
      </div>

      <p className="text-sm text-gray-500 italic">
        Data only available for these years below
      </p>
      {isLoading ? (
        <span className="ccloading ccloading-spinner ccloading-lg"></span>
      ) : (
        <div className="overflow-x-auto rounded-lg shadow-lg">
          <table className="cctable w-full">
            {/* head */}
            <thead className="bg-white border-b-2 border-gray-300">
              <tr>
                <th className="py-4"></th>
                <th className="py-4">Item ID</th>
                <th className="py-4">Department ID</th>
                <th className="py-4">Category ID</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr
                  key={item}
                  className={
                    index % 2 === 0
                      ? "bg-white hover:bg-blue-300 cursor-pointer"
                      : "bg-gray-200 hover:bg-blue-300 cursor-pointer"
                  }
                  onClick={() => handleClick(item)}
                >
                  <th className="py-4">{index + 1}</th>
                  <td className="py-4">{item}</td>
                  <td className="py-4">{item.dept_id}</td>
                  <td className="py-4">{item.cat_id}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default SelectYear;
