import React from "react";
import { Route, Routes as BaseRoutes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import PriceOptimizationPage from "./pages/PriceOptimizationPage";
import SelectItemPage from "./pages/SelectItemPage";
import Page4 from "./pages/Page4";
// import Page5 from "./pages/Page5";

const Routes = () => {
  return (
    <BaseRoutes>
      <Route path="/price-optimization" Component={PriceOptimizationPage} />
      <Route path="/select-item" Component={SelectItemPage} />
      <Route path="/page4" Component={Page4} />
      page name
      <Route path="/" exact Component={LoginPage} />
    </BaseRoutes>
  );
};

export default Routes;
