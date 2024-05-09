import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useBreadcrumbs } from "../context/BreadcrumbsContext.js";
import getItems from "../api/selectItems.js";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const SelectItem = () => {
  const { storeId } = useParams();
  const {
    setItems,
    eventValue,
    setEventValue,
    snapValue,
    setSnapValue,
    setSnapBool,
    setEventBool,
    snapBool,
    eventBool,
  } = useBreadcrumbs();

  const [items, setItemData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const handleSnapChange = (event) => {
    setSnapValue(event.target.value);
  };

  const handleEventValue = (event) => {
    setEventValue(event.target.value);
  };

  const handleSnapBoolChange = (event) => {
    setSnapBool(event.target.checked);
  };

  const handleEventBoolChange = (event) => {
    setEventBool(event.target.checked);
  };

  useEffect(() => {
    setItems([
      { label: "Home", path: "/" },
      { label: "Store", path: "/select" },
      { label: "Item" },
    ]);

    getItems(storeId).then((data) => {
      setItemData(data);
      setIsLoading(false);
    });
  }, [setItems]);
  const handleClick = (itemId) => {
    navigate(`/select/${storeId}/${itemId}`);
  };

  // Add a new state variable for the search term
  const [searchTerm, setSearchTerm] = useState("");

  // Update the search term when the input changes
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  // Filter the items based on the search term
  const filteredItems = items.filter((item) =>
    item.toLowerCase().startsWith(searchTerm)
  );

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

  // Calls the backend API and gets data

  return (
    <div className="flex flex-col gap-y-1">
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
          <input
            type="checkbox"
            checked={snapBool}
            onChange={handleSnapBoolChange}
            className="checkbox"
          />
          <input
            type="checkbox"
            checked={eventBool}
            onChange={handleEventBoolChange}
            className="checkbox"
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <h1 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold">
            {snapBool ? "Snap Value: " : " --- "}
          </h1>

          <h1 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold">
            {eventBool ? "Event Value: " : " --- "}
          </h1>
        </div>
        <div className="flex flex-col w-1/2 gap-y-2">
          {snapBool ? (
            <input
              type="range"
              min={1}
              max={7}
              value={snapValue}
              onChange={handleSnapChange}
              className="range range-sm "
            />
          ) : (
            <h1 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold">
              {" "}
              ---{" "}
            </h1>
          )}
          {eventBool ? (
            <input
              type="range"
              min={1}
              max={14}
              value={eventValue}
              onChange={handleEventValue}
              className="range range-sm"
            />
          ) : (
            <h1 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold">
              {" "}
              ---{" "}
            </h1>
          )}
        </div>
        <div className="flex flex-col gap-y-2">
          <h1 className="font-bold text-xl">{snapBool ? snapValue : "---"}</h1>
          <h1 className="font-bold text-xl">
            {eventBool ? eventValue : "---"}
          </h1>
        </div>
        <div className="flex flex-col gap-y-2">
          <div
            className="tooltip tooltip-right"
            data-tip="Number of SNAP (Supplement Nutrition Assistance Program) purchases allowed in a week"
          >
            <FontAwesomeIcon icon={faInfoCircle} />
          </div>
          <div
            className="tooltip tooltip-right"
            data-tip="Number of events held in a week"
          >
            <FontAwesomeIcon icon={faInfoCircle} />
          </div>
        </div>
      </div>

      <h1 className="font-bold text-xl">
        Please select an item to gather information about their price
        elasticity.
      </h1>
      <div>
        <span className="ccloading ccloading-infinity ccloading-lg"></span>
      </div>
      <h1 className="text-gray-500 text-md">
        {curStore[0]}, {curStore[1]}
      </h1>
      {isLoading ? (
        <h1 className="font-extrabold">Loading</h1>
      ) : (
        <div className="overflow-x-auto rounded-lg shadow-lg">
          <input
            type="text"
            placeholder="Search for an item..."
            className="input input-bordered w-full mb-2"
            onChange={handleSearchChange}
          />
          <table className="cctable w-full ">
            {/* head */}
            <thead className="bg-white border-b-2 border-gray-300 ">
              <tr>
                <th className="py-4"></th>
                <th className="py-4">Item ID</th>
                <th className="py-4">Department ID</th>
                <th className="py-4">Category ID</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.map((item, index) => (
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

export default SelectItem;
