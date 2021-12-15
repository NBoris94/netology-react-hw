import React from "react";
import PropTypes from "prop-types";

function List({ list, onClickHandler }) {
  const listView = list.map((i) => {
    return (
      <li className="list__item" key={i.id}>
        <button className="list__btn" onClick={() => onClickHandler(i.id)}>
          {i.name}
        </button>
      </li>
    );
  });

  if (listView.length === 0) return null;

  return <ul className="list">{listView}</ul>;
}

List.defaulProps = {
  list: [],
};

List.propTypes = {
  list: PropTypes.array,
  onClickHandler: PropTypes.func,
};

export default List;
