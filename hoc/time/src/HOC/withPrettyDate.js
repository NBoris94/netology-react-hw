import React from "react";
import PropTypes from "prop-types";

const withPrettyDate = (WrappedComponent) => {
  const Wrapper = ({ date }) => {
    const prettyDate = (date) => {
      const oldDate = new Date(date);
      const currentDate = new Date();
      const newDate = currentDate - oldDate;

      if (newDate < 1000 * 60) return "только что";
      else if (newDate < 1000 * 60 * 60) return `${Math.trunc(newDate / (1000 * 60))} минут назад`;
      else if (newDate < 1000 * 60 * 60 * 24) return `${Math.trunc(newDate / (1000 * 60 * 60))} часов назад`;
      else if (newDate >= 1000 * 60 * 60 * 24) return `${Math.trunc(newDate / (1000 * 60 * 60 * 24))} дней назад`;
    };

    return <WrappedComponent date={prettyDate(date)} />;
  };

  Wrapper.defaultProps = {
    date: "",
  };

  Wrapper.propTypes = {
    date: PropTypes.string,
  };

  return Wrapper;
};

export default withPrettyDate;
