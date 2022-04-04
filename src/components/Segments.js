import * as React from "react";
import PropTypes from "prop-types";

const Segments = ({ gridItems }) => (
  <div className="">
    {gridItems.map((item) => {
      let description = item.description.split("\n")
      return (
      <div className="columns">
        <div className="column is-12">
          <h3 className="has-text-weight-semibold is-size-2">
            {item.title}
          </h3>
          {description.map((data) => (<p>{data}</p>))}
          
        </div>
      </div>
    )})}
  </div>
);

Segments.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.string,
      text: PropTypes.string,
    })
  ),
};

export default Segments;
