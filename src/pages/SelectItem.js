import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useBreadcrumbs } from "../context/BreadcrumbsContext";
import getItems from "../api/selectItems.js";
import { useNavigate } from "react-router-dom";

const SelectItem = () => {
  const { storeId } = useParams();
  const { setItems } = useBreadcrumbs();
  const [items, setItemData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const handleClick = (itemId) => {
    navigate(`/select/${storeId}/${itemId}`);
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

export default SelectItem;
