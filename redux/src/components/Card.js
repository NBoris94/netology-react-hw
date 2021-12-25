import React from 'react';
import PropTypes from "prop-types";

function Card({ children, title }) {
  return (
    <div className="card">
      {title === "" ? null : <div className="card__header">
        <h3 className="card__title">{title}</h3>
      </div>}
      <div className="card__body">
        {children}
      </div>
    </div>
  );
}

Card.defaultProps = {
  title: ""
}

Card.propTypes = {
  title: PropTypes.string
}

export default Card;