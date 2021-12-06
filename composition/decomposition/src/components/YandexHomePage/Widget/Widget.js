import React from "react";
import PropTypes from "prop-types";

function Widget(props) {
  return (
    <div className="widget">
      {props.withImg ? <img src={props.img} alt="" className="widget__img" /> : null}
      <h3 className="widget__title">
        {props.title} {props.titleWithIcon ? <img src={props.icon} alt="" /> : null}
      </h3>
      <div className="widget__body">{props.children}</div>
    </div>
  );
}

Widget.defaultProps = {
  title: "",
  withImg: false,
  img: "",
  titleWithIcon: false,
  icon: "",
};

Widget.propTypes = {
  title: PropTypes.string,
  withImg: PropTypes.bool,
  img: PropTypes.string,
  titleWithIcon: PropTypes.bool,
  icon: PropTypes.string,
};

export default Widget;
