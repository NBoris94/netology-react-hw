import React from "react";
import PropTypes from "prop-types";
import Star from "./Star";

function Stars({ count }) {
  if (!count || count > 5) {
    return null;
  }
  let stars = [];
  for (let i = 0; i < count; i++) {
    stars.push(<Star key={(i + 1).toString()} />);
  }
  return <ul className="card-body-stars u-clearfix">{stars}</ul>;
}

Stars.defaultProps = {
  count: 0,
};

Stars.propTypes = {
  count: PropTypes.number,
};

export default Stars;
