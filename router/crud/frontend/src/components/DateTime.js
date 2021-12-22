import React from "react";
import PropTypes from "prop-types";
import withPrettyDate from "../hoc/withPrettyDate";

function DateTime(props) {
    return <span className="post__datetime">{props.date}</span>;
}

DateTime.propTypes = {
    date: PropTypes.string,
};

const DateTimePretty = withPrettyDate(DateTime);

export { DateTime, DateTimePretty };
