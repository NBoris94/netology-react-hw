import React from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import Error from "./Error";

function ListItem({ id, name, price, loading, error, deleteHandler }) {
  const isError = error !== null;
  return (
    <>
      <li className="list__item">
        <span className="list__text">
          {name}
        </span>
        <span className="list__price">
          {price}
        </span>
        <div className="list__actions">
          {loading === 'pending' ? (
            <button className="list__delete list__delete_loading list__delete_disabled" disabled>
              <span className="material-icons">sync</span>
            </button>
          ) : (
            <>
              <Link to={`/services/edit/${id}`} className={`list__edit ${isError ? "list__delete_disabled" : null}`}>
                <span className="material-icons">edit</span>
              </Link>
              <button className={`list__delete ${isError ? "list__delete_disabled" : null}`} onClick={() => deleteHandler(id)}>
                <span className="material-icons">delete</span>
              </button>
            </>
          )}
        </div>
      </li>
      {isError ? (
        <Error message="Произошла ошибка! Обновите страницу." />
      ) : null}
    </>
  );
}

ListItem.defaultProps = {
  id: 0,
  name: "",
  price: 0,
  loading: 'idle',
  error: null
}

ListItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.number,
  loading: PropTypes.string,
  error: PropTypes.string,
  deleteHandler: PropTypes.func
}

export default ListItem;