import React from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Card({ children, title, addBtn }) {
  return (
    <div className="card">
      {title === "" ? null : <div className="card__header">
        <h3 className="card__title">{title}</h3>
        {addBtn ? <Link to="/services/add" className="card__btn btn btn_primary">Добавить</Link> : null}
      </div>}
      <div className="card__body">
        {children}
      </div>
    </div>
  );
}

Card.defaultProps = {
  title: "",
  addBtn: false
}

Card.propTypes = {
  title: PropTypes.string,
  addBtn: PropTypes.bool
}

export default Card;