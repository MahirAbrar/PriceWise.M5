// BreadcrumbsContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

const BreadcrumbsContext = createContext();

export const useBreadcrumbs = () => useContext(BreadcrumbsContext);

export const BreadcrumbsProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [eventValue, setEventValue] = useState(1);
  const [snapValue, setSnapValue] = useState(1);
  const [snapBool, setSnapBool] = useState(false);
  const [eventBool, setEventBool] = useState(false);

  useEffect(() => {
    localStorage.setItem("eventValue", eventValue);
    localStorage.setItem("snapValue", snapValue);
    localStorage.setItem("snapBool", JSON.stringify(snapBool));
    localStorage.setItem("eventBool", JSON.stringify(eventBool));
  }, [eventValue, snapValue, snapBool, eventBool]);

  return (
    <BreadcrumbsContext.Provider
      value={{
        items,
        setItems,
        eventValue,
        setEventValue,
        snapValue,
        setSnapValue,
        snapBool,
        setSnapBool,
        eventBool,
        setEventBool,
      }}
    >
      {children}
    </BreadcrumbsContext.Provider>
  );
};
