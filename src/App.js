import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes as BaseRoutes } from "react-router-dom";

import SelectStore from "./pages/SelectStore";
import LandingPage from "./pages/LandingPage";
import SelectItem from "./pages/SelectItem";
import PageNotFound from "./pages/PageNotFound";

// import Header from "./components/Header";
// import Footer from "./components/Footer";
import "./App.css";
import Breadcrumb from "./components/Breadcrumb";

const breadcrumbItems = [
  { label: "Home", path: "/" },
  { label: "Library", path: "/library" },
  { label: "Data" },
];

function App() {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Price Optimisation Tools</a>
        </div>
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
      <Breadcrumb items={breadcrumbItems} />

      <div className="App p-4  ">
        <Router>
          <BaseRoutes>
            <Route path="/" exact Component={LandingPage} />
            <Route path="/select" Component={SelectStore} />
            <Route path="/select/:storeId" Component={SelectItem} />
            <Route path="*" Component={PageNotFound} />
          </BaseRoutes>
        </Router>
      </div>
    </>
  );
}

{
}

export default App;
