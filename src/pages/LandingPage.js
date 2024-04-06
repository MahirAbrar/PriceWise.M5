import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate("/select");
  };

  return (
    <div className="center">
      <h1>Welcome, Let's Get Started!</h1>
      <div className="">
        <button className="btn btn-wide btn-primary" onClick={handleStartClick}>
          Start
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
