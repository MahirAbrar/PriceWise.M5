import React from "react";
import { Route, Routes as BaseRoutes } from "react-router-dom";

import SelectStore from "./pages/SelectStore";
import LandingPage from "./pages/LandingPage";
import SelectItem from "./pages/SelectItem";
// import PageNotFound from "./pages/PageNotFound";
// import Page5 from "./pages/Page5";

const Routes = () => {
  return (
    <BaseRoutes>
      <Route path="/" exact Component={LandingPage} />
      <Route path="/select" Component={SelectStore} />
      <Route path="/select/:storeId" Component={SelectItem} />
      {/* <Route path="*" Component={PageNotFound} /> */}
    </BaseRoutes>
  );
};

export default Routes;
