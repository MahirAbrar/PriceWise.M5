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
        <main>
          <Routes />
        </main>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
