import React from "react";
// Import the hook from your context
import { useBreadcrumbs } from "../context/BreadcrumbsContext";
import { Link } from "react-router-dom";

const Breadcrumb = () => {
  // Use the hook to access the breadcrumb items
  const { items } = useBreadcrumbs();

  return (
    <nav className="bg-grey-light pl-6 rounded font-sans w-full">
      <ol className="list-reset flex text-grey-dark">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {index > 0 && (
              <li>
                <span className="mx-2">/</span>
              </li>
            )}
            <li>
              {item.path ? (
                <Link
                  to={item.path}
                  className="text-blue font-bold hover:text-gray-600"
                >
                  {item.label}
                </Link>
              ) : (
                item.label
              )}
            </li>
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
