import React from "react";
import PropTypes from "prop-types";

function Ad({ img, link }) {
  return (
    <div className="ads-list__item">
      <a href={link} className="ads-list__link">
        <img src={img} alt="" className="ads-list__img" />
      </a>
    </div>
  );
}

Ad.defaultProps = {
  img: "",
  link: "#",
};

Ad.propTypes = {
  img: PropTypes.string,
  link: PropTypes.string,
};

export default Ad;
