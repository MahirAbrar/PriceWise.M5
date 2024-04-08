import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useBreadcrumbs } from "../context/BreadcrumbsContext";

const SelectYear = () => {
  const { storeId, itemId } = useParams();
  const { setItems } = useBreadcrumbs();

  useEffect(() => {
    setItems([
      { label: "Home", path: "/" },
      { label: "Store", path: "/select" },
      { label: "Item", path: `/select/${storeId}` },
      { label: "Year" },
    ]);
  }, [setItems]);

  return <div>selectYear</div>;
};

export default SelectYear;
