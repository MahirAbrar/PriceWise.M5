import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useBreadcrumbs } from "../context/BreadcrumbsContext";

const LandingPage = () => {
  const { setItems } = useBreadcrumbs();
  const navigate = useNavigate();

  useEffect(() => {
    setItems([{ label: "Home" }]); // Set specific breadcrumbs for this page
  }, [setItems]);

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
