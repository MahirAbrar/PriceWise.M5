import React from "react";
import { useBreadcrumbs } from "../context/BreadcrumbsContext";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import getPriceElasticity from "../api/getPriceElasticity";
import { useState } from "react";

const ResultPage = () => {
  const { setItems } = useBreadcrumbs();
  var { storeId, itemId, yearId, discount } = useParams();
  const [results, setResults] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [discountInput, setDiscountInput] = useState("");

  useEffect(() => {
    setItems([
      { label: "Home", path: "/" },
      { label: "Store", path: "/select" },
      { label: "Item", path: `/select/${storeId}` },
      { label: "Year", path: `/select/${storeId}/${itemId}` },
      { label: "Result" },
    ]);
    getPriceElasticity(storeId, itemId, yearId, discount).then((data) => {
      setResults(data);
      setIsLoading(false);
      console.log(results);
    });
  }, [setItems]);

  // Input handlers
  const handlePredictionInput = (e) => {
    const value = Math.max(0, Math.min(100, Number(e.target.value)));
    setDiscountInput(value.toString());
  };

  const handlePredictClick = () => {
    getPriceElasticity(storeId, itemId, yearId, discountInput).then((data) => {
      setResults(data);
      setIsLoading(false);
      console.log(results);
    });
  };

  //if no discount then discount is 60
  if (!discount) {
    discount = 60;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center p-5">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Data Overview</h2>

          <p className="text-base">
            Current Discount:{" "}
            <span className="text-lg font-semibold">{discount}</span>
          </p>

          {Object.entries(results).map(([key, value]) => (
            <p className="text-base" key={key}>
              {key.replace(/_/g, " ")}:{" "}
              <span className="text-lg font-semibold">{value}</span>
            </p>
          ))}

          <div className="form-control">
            <label className="label" htmlFor="discountInput">
              <span className="label-text">
                Enter prediction discount (0-100):
              </span>
            </label>
            <input
              type="number"
              id="discountInput"
              value={discountInput}
              onChange={handlePredictionInput}
              className="input input-bordered input-primary w-full max-w-xs"
              min="0"
              max="100"
            />
          </div>

          <button className="btn btn-primary mt-4" onClick={handlePredictClick}>
            Predict
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
