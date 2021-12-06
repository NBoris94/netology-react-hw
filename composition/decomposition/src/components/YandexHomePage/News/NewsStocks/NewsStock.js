import React from "react";
import PropTypes from "prop-types";

function NewsStock({ ...props }) {
  return (
    <li className="news-stocks__item" title={props.popup}>
      <span className="news-stocks__title">{props.title}</span>
      <span className="news-stocks__value">{props.value}</span>
      <span className="news-stocks__value-change">{props.valueChange}</span>
    </li>
  );
}

NewsStock.defaultProps = {
  title: "",
  value: "",
  valueChange: "",
  popup: "",
};

NewsStock.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  valueChange: PropTypes.string,
  popup: PropTypes.string,
};

export default NewsStock;
