import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const SelectItem = () => {
  const [csvData, setCsvData] = useState([]);
  const { storeId } = useParams();

  // Assuming you have moved data_2011.csv to the public folder
  useEffect(() => {
    fetch("/data_2011.csv")
      .then((response) => response.text())
      .then((data) => {
        // Here you can directly set CSV data or parse it using PapaParse or another CSV parser
      })
      .catch((error) => console.error("Error fetching CSV file:", error));
  }, []);

  // Assuming 'stores' object is available within the scope
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
  let curStore = stores[storeId] ? stores[storeId][0] : "Unknown Store";

  return (
    <div>
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="#">{curStore}</Link>
          </li>
        </ul>
      </div>
      SelectItem
      {/* Render CSV data or something relevant here */}
    </div>
  );
};

export default SelectItem;
