import React from "react";
import PropTypes from "prop-types";

function Card(props) {
  return (
    <div className="card">
      {props.visibleImg ? <img src="https://via.placeholder.com/150x100" className="card-img-top" alt="..." /> : null}
      <div className="card-body">{props.children}</div>
    </div>
  );
}

Card.defaultProps = {
  visibleImg: false,
};

Card.propTypes = {
  visibleImg: PropTypes.bool,
};

export default Card;
