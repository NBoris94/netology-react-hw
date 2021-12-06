import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

function ClockItem({ onDeleteClock, ...props }) {
  const [hours, setHours] = useState(new Date().getUTCHours() + props.timezone);
  const [minutes, setMinutes] = useState(new Date().getMinutes());
  const [seconds, setSeconds] = useState(new Date().getSeconds());

  useEffect(() => {
    let timeout = window.setTimeout(() => {
      if (hours !== new Date().getHours()) setHours(new Date().getUTCHours() + props.timezone);
      if (minutes !== new Date().getMinutes()) setMinutes(new Date().getMinutes());
      setSeconds(new Date().getSeconds());
    }, 1000);

    return () => {
      window.clearTimeout(timeout);
    };
  });

  return (
    <div className="clock-list__item clock-card">
      <h4 className="clock-card__title">{props.title}</h4>
      <div className="clock-card__group">
        <button className="clock-card__remove" onClick={() => onDeleteClock(props.id)}>
          <span></span>
        </button>
        <div className="clock">
          <span className="clock__s clock__arrow" style={{ transform: `rotate(${-90 + seconds * 6}deg)` }}></span>
          <span className="clock__m clock__arrow" style={{ transform: `rotate(${-90 + minutes * 6}deg)` }}></span>
          <span className="clock__h clock__arrow" style={{ transform: `rotate(${-90 + hours * 30}deg)` }}></span>
        </div>
      </div>
    </div>
  );
}

ClockItem.defaultProps = {
  id: "",
  timezone: 0,
  title: "",
};

ClockItem.propTypes = {
  id: PropTypes.string,
  timezone: PropTypes.number,
  title: PropTypes.string,
  onDeleteClock: PropTypes.func,
};

export default ClockItem;
