import React from "react";
import PropTypes from "prop-types";

function IconSwitch(props) {
  const { icon, onSwitch } = props;
  return (
    <div className="switcher">
      <button className="switcher__btn" onClick={() => onSwitch()}>
        <span className="material-icons">{icon}</span>
      </button>
    </div>
  );
}

IconSwitch.defaultProps = {
  icon: "view_list",
};

IconSwitch.propTypes = {
  icon: PropTypes.string,
  onSwitch: PropTypes.func,
};

export default IconSwitch;
