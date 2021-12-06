import React from "react";
import PropTypes from "prop-types";

function Search({ randomText }) {
  return (
    <form className="search">
      <input type="text" className="search__input" />
      <button className="search__submit">Найти</button>
      <p className="search__text">
        Найдётся всё. Например,
        <span className="search__random-text"> {randomText}</span>
      </p>
    </form>
  );
}

Search.defaultProps = {
  randomText: "",
};

Search.propTypes = {
  randomText: PropTypes.string,
};

export default Search;
