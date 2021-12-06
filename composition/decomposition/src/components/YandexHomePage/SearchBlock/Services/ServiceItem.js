import React from "react";
import PropTypes from "prop-types";

function ServiceItems({ ...props }) {
  return (
    <li className="service__item">
      <a href={props.link} className="service__link">
        {props.title}
      </a>
    </li>
  );
}

ServiceItems.defaultProps = {
  title: "",
  link: "#",
};

ServiceItems.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
};

export default ServiceItems;
