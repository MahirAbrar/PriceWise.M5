import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes.js";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Header /> */}
        {/* Navbar */}
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
        <main className="m-4">
          <Routes />
        </main>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
