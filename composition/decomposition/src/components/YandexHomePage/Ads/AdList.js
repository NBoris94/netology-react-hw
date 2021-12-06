import React from "react";
import PropTypes from "prop-types";
import Ad from "./Ad";

function AdList({ ads }) {
  const adList = ads.map((o) => {
    return <Ad key={o.id} {...o} />;
  });

  if (adList.length === 0) return null;

  return <div className="adv-list">{adList}</div>;
}

AdList.defaultProps = {
  ads: [],
};

AdList.propTypes = {
  ads: PropTypes.array,
};

export default AdList;
