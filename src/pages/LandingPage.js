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

  const handleUserGuide = () => {
    // how do i open a new tab to a different website
    window.open(
      "https://docs.google.com/document/d/1y-oB1fr-GIIQ46CIuPHX0XslUofDwTVR_dgD-jMOP8I/edit?usp=sharing"
    );
  };

  return (
    <>
      <button
        className="btn btn-wide btn-success rounded-full"
        onClick={handleUserGuide}
      >
        User guide
      </button>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="bg-white p-10 rounded-3xl">
          <h1 className="font-bold text-xl mb-4">
            Welcome, Let's Get Started!
          </h1>
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
    </>
  );
};

export default LandingPage;
