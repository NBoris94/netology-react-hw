import React from "react";
import PropTypes from "prop-types";

function Toolbar(props) {
  const { filters, selected, onSelectFilter } = props;

  const items = filters.map((category) => {
    let className = category.text === selected ? "toolbar__link toolbar__link_active" : "toolbar__link";
    return (
      <li className="toolbar__item" key={category.id}>
        <button className={className} onClick={() => onSelectFilter(category.text)}>
          {category.text}
        </button>
      </li>
    );
  });

  if (items.length === 0) return null;

  return <ul className="toolbar">{items}</ul>;
}

Toolbar.defaultProps = {
  filters: [],
  selected: "All",
};

Toolbar.propTypes = {
  filters: PropTypes.array,
  selected: PropTypes.string,
  onSelectFilter: PropTypes.func,
};

export default Toolbar;
