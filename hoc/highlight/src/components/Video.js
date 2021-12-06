import React from "react";
import PropTypes from "prop-types";
import withWrapper from "./HOC/withWrapper";

function Video(props) {
  return (
    <div className="item item-video">
      <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      <p className="views">Просмåотров: {props.views}</p>
    </div>
  );
}

Video.defaultProps = {
  url: "",
  views: 0,
};

Video.propTypes = {
  url: PropTypes.string,
  views: PropTypes.number,
};

const VideoWithWrapper = withWrapper(Video);

export { Video, VideoWithWrapper };
