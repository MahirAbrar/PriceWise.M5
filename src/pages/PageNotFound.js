import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSadTear } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-base-200">
      <div className="flex flex-col items-center">
        <div className="text-accent text-center">
          <div className="max-w-md">
            <FontAwesomeIcon icon={faSadTear} size="10x mb-4" />
            <h1 className="text-5xl font-bold">404 - Not Found</h1>
          </div>
        </div>
        <button
          className="btn btn-wide btn-primary mt-4"
          onClick={handleStartClick}
        >
          Return to Start
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
