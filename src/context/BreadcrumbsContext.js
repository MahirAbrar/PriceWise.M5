// BreadcrumbsContext.js
import React, { createContext, useContext, useState } from "react";

const BreadcrumbsContext = createContext();

export const useBreadcrumbs = () => useContext(BreadcrumbsContext);

export const BreadcrumbsProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  return (
    <BreadcrumbsContext.Provider value={{ items, setItems }}>
      {children}
    </BreadcrumbsContext.Provider>
  );
};
