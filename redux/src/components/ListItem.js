import React from 'react';
import PropTypes from "prop-types";

function ListItem({ id, title, price, editHandler, deleteHandler }) {
  return (
    <li className="list__item">
      <span className="list__text">
        {title}
      </span>
      <span className="list__price">
        {price}
      </span>
      <div className="list__actions">
        <button className="list__edit" onClick={() => editHandler({ id, title, price})}>
          <span className="material-icons">edit</span>
        </button>
        <button className="list__delete" onClick={() => deleteHandler(id)}>
          <span className="material-icons">delete</span>
        </button>
      </div>
    </li>
  );
}

ListItem.defaultProps = {
  id: "",
  title: "",
  price: 0
}

ListItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  editHandler: PropTypes.func,
  deleteHandler: PropTypes.func
}

export default ListItem;