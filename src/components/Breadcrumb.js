import React from "react";
import PropTypes from "prop-types";

const Breadcrumb = ({ items }) => {
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
                <a
                  href={item.path}
                  className="text-blue font-bold hover:text-gray-600"
                >
                  {item.label}
                </a>
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

Breadcrumb.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string,
    })
  ).isRequired,
};

export default Breadcrumb;
