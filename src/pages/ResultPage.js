import React from "react";
import { useBreadcrumbs } from "../context/BreadcrumbsContext";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import getPriceElasticity from "../api/getPriceElasticity";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { data } from "autoprefixer";

const ResultPage = () => {
  const { setItems } = useBreadcrumbs();
  var { storeId, itemId, yearId, discount } = useParams();
  const [results, setResults] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [discountInput, setDiscountInput] = useState("60");
  const [currentDiscount, setCurrentDiscount] = useState("60");

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

  const [basePrice, setBasePrice] = useState(null);
  const [baseDemand, setBaseDemand] = useState(null);
  const [rmse, setRmse] = useState(null);
  const [score, setScore] = useState(null);

  const [impactOnSales, setImpactOnSales] = useState(null);
  const [predictedDemand, setPredictedDemand] = useState(null);
  const [elasticityScore, setElasticityScore] = useState(null);
  const [elasticityInterpretation, setElasticityInterpretation] =
    useState(null);

  const [costPrice, setCostPrice] = useState(null);
  const [stockOnHand, setStockOnHand] = useState(null);
  const [priceDiscount, setPriceDiscount] = useState(null);
  const [optimizedPrice, setOptimizedPrice] = useState(null);
  const [totalSold, setTotalSold] = useState(null);
  const [totalRevenue, setTotalRevenue] = useState(null);
  const [profitLoss, setProfitLoss] = useState(null);
  const [days, setDays] = useState(null);

  const [x_actual, setX_actual] = useState(null);
  const [x_values, setX_values] = useState(null);
  const [y_actual, setY_actual] = useState(null);
  const [y_predicted, setY_predicted] = useState(null);

  console.log(results);
  useEffect(() => {
    setItems([
      { label: "Home", path: "/" },
      { label: "Store", path: "/select" },
      { label: "Item", path: `/select/${storeId}` },
      { label: "Year", path: `/select/${storeId}/${itemId}` },
      { label: "Result" },
    ]);
    getPriceElasticity(
      storeId,
      itemId,
      yearId,
      discount,
      eventBool,
      snapBool,
      eventValue,
      snapValue
    ).then((data) => {
      setResults(data);
      setIsLoading(false);

      // model
      setBasePrice(data["Base Price"]);
      setBaseDemand(data["Base Demand"]);
      setRmse(data["RMSE"]);
      setScore(data["Score"]);

      // discount
      setImpactOnSales(data["Impact on Sales"]);
      setPredictedDemand(data["Predicted Demand"]);
      setElasticityScore(data["Elasticity Score"]);
      setElasticityInterpretation(data["Elasticity Interpretation"]);

      // price optimisation
      setCostPrice(data["Cost Price/Item"]);
      setStockOnHand(data["Stock on Hand"]);
      setPriceDiscount(data["Price Discount"]);
      setOptimizedPrice(data["Optimized Price"]);
      setTotalSold(data["Total item(s) sold"]);
      setTotalRevenue(data["Total Revenue"]);
      setProfitLoss(data["PROFIT/LOSS"]);
      setDays(data["Gain profit in (days)"]);

      // graph scatter
      setX_actual(data["x_actual"]);
      setY_actual(data["y_actual"]);

      // line
      setX_values(data["x_values"]);
      setY_predicted(data["y_predicted"]);
    });
  }, []);

  // Input handlers
  const handlePredictionInput = (e) => {
    const value = Math.max(0, Math.min(100, Number(e.target.value)));
    setDiscountInput(value.toString());
  };

  const handlePredictClick = () => {
    setCurrentDiscount(discountInput);
    console.log(discountInput, "discount input");
    console.log(currentDiscount, "current discount");
    setIsLoading(true);
    getPriceElasticity(
      storeId,
      itemId,
      yearId,
      discountInput,
      eventBool,
      snapBool,
      eventValue,
      snapValue
    ).then((data) => {
      setResults(data);
      // model
      setBasePrice(data["Base Price"]);
      setBaseDemand(data["Base Demand"]);
      setRmse(data["RMSE"]);
      setScore(data["Score"]);

      // discount
      setImpactOnSales(data["Impact on Sales"]);
      setPredictedDemand(data["Predicted Demand"]);
      setElasticityScore(data["Elasticity Score"]);
      setElasticityInterpretation(data["Elasticity Interpretation"]);

      // price optimisation
      setCostPrice(data["Cost Price/Item"]);
      setStockOnHand(data["Stock on Hand"]);
      setPriceDiscount(data["Price Discount"]);
      setOptimizedPrice(data["Optimized Price"]);
      setTotalSold(data["Total item(s) sold"]);
      setTotalRevenue(data["Total Revenue"]);
      setProfitLoss(data["PROFIT/LOSS"]);
      setDays(data["Gain profit in (days)"]);

      // graph scatter
      setX_actual(data["x_actual"]);
      setY_actual(data["y_actual"]);

      // line
      setX_values(data["x_values"]);
      setY_predicted(data["y_predicted"]);
      setIsLoading(false);
    });
  };

  //if no discount then discount is 60

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-row items-center gap-x-6">
      <div className="bg-white p-6 rounded-lg flex flex-col gap-x-6 justify-center items-center w-1/3">
        {/* title */}
        <h1 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold">
          Model Information{" "}
        </h1>
        <div className=" p-6 rounded-lg flex flex-row gap-x-6">
          <div className="flex flex-col gap-y-2 ">
            <h1 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold">
              Base Price{" "}
            </h1>
            <h1 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold">
              Base Demand
            </h1>
            <h1 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold">
              RMSE{"  "}
              <div
                className="tooltip tooltip-right"
                data-tip="RMSE (Root Mean Square Error) is a statistical measure used to quantify the average difference between observed values and predicted values"
              >
                <FontAwesomeIcon icon={faInfoCircle} />
              </div>
            </h1>
            <h1 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold">
              Score{"    "}
              <div
                className="tooltip tooltip-right"
                data-tip="Measurement of the proportion of the variance in the dependent variable (target) that is predictable from the independent variables (features)"
              >
                <FontAwesomeIcon icon={faInfoCircle} />
              </div>
            </h1>
          </div>
          <div className="flex flex-col gap-y-2">
            <h1 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold">
              {basePrice}
            </h1>
            <h1 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold">
              {baseDemand}
            </h1>
            <h1 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold">
              {rmse}
            </h1>
            <h1 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold">
              {score}
            </h1>
          </div>
        </div>
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
          <button className="btn btn-primary mt-4" onClick={handlePredictClick}>
            Predict
          </button>
        </div>
        <div className=" p-6 rounded-lg flex flex-row gap-x-6">
          <div className="flex flex-col gap-y-2 ">
            <h1 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold">
              Impact on Sales{" "}
            </h1>
            <h1 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold">
              Predicted Demand
            </h1>
            <h1 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold">
              Elasticity Score:{"  "}
            </h1>
            <h1 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold">
              Elasticity Interpretation: {"  "}
            </h1>
          </div>
          <div className="flex flex-col gap-y-2 ">
            <h1 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold">
              {impactOnSales}
            </h1>
            <h1 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold">
              {predictedDemand}
            </h1>
            <h1 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold">
              {elasticityScore}
            </h1>
            <h1 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold">
              {elasticityInterpretation}
            </h1>
          </div>
        </div>
      </div>
      {/* 2nd box */}

      <div className=" bg-white p-6 rounded-lg flex flex-row gap-x-6">
        <h1>Graph here</h1>
      </div>

      {/* third box */}

      <div className="bg-white p-6 rounded-lg flex flex-col gap-x-6 justify-center items-center w-1/4">
        {/* title */}
        <h1 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold">
          Price optimisation{" "}
        </h1>
        <div className="  flex flex-row gap-x-6">
          <div className="flex flex-col gap-y-2 ">
            <h1 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold">
              Cost Price/Item{" "}
            </h1>
            <h1 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold">
              Stock on Hand
            </h1>
            <h1 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold">
              Price Discount{"  "}
            </h1>
            <h1 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold">
              Optimized Price
            </h1>
            <h1 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold">
              Total item(s) sold
            </h1>
            <h1 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold">
              Total Revenue
            </h1>
            <h1 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold">
              PROFIT/LOSS
            </h1>
            <h1 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold">
              Gain profit in (days)
            </h1>
          </div>

          <div className="flex flex-col gap-y-2">
            <h1 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold">
              {costPrice}
            </h1>
            <h1 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold">
              {stockOnHand}
            </h1>
            <h1 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold">
              {priceDiscount}
            </h1>
            <h1 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold">
              {optimizedPrice}
            </h1>
            <h1 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold">
              {totalSold}
            </h1>
            <h1 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold">
              {totalRevenue}
            </h1>
            <h1 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold">
              {profitLoss}
            </h1>
            <h1 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold">
              {days}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
