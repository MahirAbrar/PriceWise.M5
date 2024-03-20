import React from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom"; // Step 1: Import useNavigate

const LoginPage = () => {
  const navigate = useNavigate(); // Step 2: Initialize useNavigate

  const handleStartClick = () => {
    navigate("/price-optimization"); // Navigate to PriceOptimizationPage
  };

  return (
    <>
      <h1>Welcome, Let's Get Started!</h1>
      <div className="whiteBox">
        <button className="btn btn-wide btn-primary" onClick={handleStartClick}>
          Start
        </button>
      </div>
    </>
  );
};

export default LoginPage;
