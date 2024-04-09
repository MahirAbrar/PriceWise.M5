import React from "react";
import { useBreadcrumbs } from "../context/BreadcrumbsContext";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ResultPage = () => {
  const { setItems } = useBreadcrumbs();
  const { storeId, itemId, yearId } = useParams();

  useEffect(() => {
    setItems([
      { label: "Home", path: "/" },
      { label: "Store", path: "/select" },
      { label: "Item", path: `/select/${storeId}` },
      { label: "Year", path: `/select/${storeId}/${itemId}` },
      { label: "Result" },
    ]);
  }, [setItems]);

  return <div>ResultPage</div>;
};

export default ResultPage;
