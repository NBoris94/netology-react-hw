import React from "react";
import PropTypes from "prop-types";
import withPrettyDate from "../HOC/withPrettyDate";

function DateTime(props) {
  return <p className="date">{props.date}</p>;
}

DateTime.defaultProps = {
  date: "",
};

DateTime.propTypes = {
  date: PropTypes.string,
};

const DateTimePretty = withPrettyDate(DateTime);

export { DateTime, DateTimePretty };
