import React from "react";
import PropTypes from "prop-types";

function NewsItem({ ...props }) {
  return (
    <li className="news-list__item">
      <img src={props.icon} alt="" className="news-list__icon" />
      <a href="#" className="news-list__link">
        {props.title}
      </a>
    </li>
  );
}

NewsItem.defaultProps = {
  title: "",
  icon: "",
};

NewsItem.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
};

export default NewsItem;
