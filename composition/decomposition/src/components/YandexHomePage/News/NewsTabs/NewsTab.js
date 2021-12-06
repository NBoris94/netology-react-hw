import React from "react";
import PropTypes from "prop-types";

function NewsTab({ title }) {
  return (
    <li className="news-tabs__item">
      <a href="#" className="news-tabs__link">
        {title}
      </a>
    </li>
  );
}

NewsTab.defaultProps = {
  title: "",
};

NewsTab.propTypes = {
  title: PropTypes.string,
};

export default NewsTab;
