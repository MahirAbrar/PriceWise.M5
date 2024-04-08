import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useBreadcrumbs } from "../context/BreadcrumbsContext";

const SelectItem = () => {
  const { storeId } = useParams();
  const { setItems } = useBreadcrumbs();

  useEffect(() => {
    setItems([
      { label: "Home", path: "/" },
      { label: "Store", path: "/select" },
      { label: "Item" },
    ]);
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

  return (
    <div>
      <h1 className="font-bold text-xl">
        Please select an item to gather information about their price
        elasticity.
      </h1>
      <h1 className="text-gray-500 text-md">
        {curStore[0]}, {curStore[1]}
      </h1>

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
            {/* row 1. Need to remove hardcoded color */}
            <tr className="bg-gray-200">
              <th className="py-4">1</th>
              <td className="py-4">Cy Ganderton</td>
              <td className="py-4">Quality Control Specialist</td>
              <td className="py-4">Blue</td>
            </tr>
            {/* row 2 */}
            <tr className="cchover bg-white">
              <th className="py-4">2</th>
              <td className="py-4">Hart Hagerty</td>
              <td className="py-4">Desktop Support Technician</td>
              <td className="py-4">Purple</td>
            </tr>
            {/* row 3 */}
            <tr className="bg-gray-200">
              <th className="py-4">3</th>
              <td className="py-4">Brice Swyre</td>
              <td className="py-4">Tax Accountant</td>
              <td className="py-4">Red</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SelectItem;
