import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as BaseRoutes,
} from "react-router-dom";
import { BreadcrumbsProvider } from "./context/BreadcrumbsContext";

import SelectStore from "./pages/SelectStore";
import LandingPage from "./pages/LandingPage";
import SelectItem from "./pages/SelectItem";
import PageNotFound from "./pages/PageNotFound";

import "./App.css";
import Breadcrumb from "./components/Breadcrumb";

function App() {
  return (
    <Router>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost font-bold text-xl">
            Price Optimisation Tools
          </a>
        </div>
        {/* theme controller */}

        {/* Link & Parent */}
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Link</a>
            </li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2 bg-base-100 rounded-t-none">
                  <li>
                    <a>Link 1</a>
                  </li>
                  <li>
                    <a>Link 2</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
      <BreadcrumbsProvider>
        <Breadcrumb />
        <div className="App p-4">
          <BaseRoutes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/select" element={<SelectStore />} />
            <Route path="/select/:storeId" element={<SelectItem />} />
            <Route path="*" element={<PageNotFound />} />
          </BaseRoutes>
        </div>
      </BreadcrumbsProvider>
    </Router>
  );
}

export default App;
