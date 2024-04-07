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
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-white p-10 rounded-3xl">
        <h1 className="font-bold text-xl mb-4">Welcome, Let's Get Started!</h1>
        <div>
          <button
            className="btn btn-wide btn-primary rounded-full"
            onClick={handleStartClick}
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
