import React from "react";
import PropTypes from "prop-types";
import ClockItem from "./ClockItem";

function ClockList({ clocks, onDeleteClock }) {
  const clocksView = clocks.map((c) => {
    return <ClockItem key={c.id} {...c} onDeleteClock={onDeleteClock} />;
  });

  if (clocksView.length === 0) return <p>Добавьте часы для отображения!</p>;

  return <div className="clock-list">{clocksView}</div>;
}

ClockList.defaultProps = {
  clocks: [],
};

ClockList.propTypes = {
  clocks: PropTypes.array,
};

export default ClockList;
