import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as BaseRoutes,
} from "react-router-dom";
import { BreadcrumbsProvider } from "./context/BreadcrumbsContext";
import { Link } from "react-router-dom";

import SelectStore from "./pages/SelectStorePage";
import LandingPage from "./pages/LandingPage";
import SelectItem from "./pages/SelectItemPage";
import PageNotFound from "./pages/PageNotFound";
import SelectYear from "./pages/SelectYearPage";

import "./App.css";
import Breadcrumb from "./components/Breadcrumb";
import ResultPage from "./pages/ResultPage";

function App() {
  return (
    <Router>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link className="btn btn-ghost font-bold text-xl">
            Price Optimisation Tools
          </Link>
        </div>
        {/* theme controller */}

        {/* Link & Parent */}
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link>Link</Link>
            </li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2 bg-base-100 rounded-t-none">
                  <li>
                    <Link>Link 1</Link>
                  </li>
                  <li>
                    <Link>Link 2</Link>
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
            <Route path="/select/:storeId/:itemId" element={<SelectYear />} />
            <Route
              path="/select/:storeId/:itemId/:yearId"
              element={<ResultPage />}
            />
            <Route path="*" element={<PageNotFound />} />
          </BaseRoutes>
        </div>
      </BreadcrumbsProvider>
    </Router>
  );
}

export default App;
