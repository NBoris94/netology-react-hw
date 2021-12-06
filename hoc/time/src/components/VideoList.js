import React from "react";
import PropTypes from "prop-types";
import Video from "./Video";
import { v4 as uuidv4 } from "uuid";

function VideoList({ list }) {
  return list.map((item) => <Video key={uuidv4()} url={item.url} date={item.date} />);
}

VideoList.defaultProps = {
  list: [],
};

VideoList.propTypes = {
  list: PropTypes.array,
};

export default VideoList;
