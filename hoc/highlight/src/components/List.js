import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { VideoWithWrapper } from "./Video";
import { ArticleWithWrapper } from "./Article";

function List(props) {
  if (props.list.length === 0) return null;

  return props.list.map((item) => {
    switch (item.type) {
      case "video":
        return <VideoWithWrapper key={uuidv4()} {...item} />;

      case "article":
        return <ArticleWithWrapper key={uuidv4()} {...item} />;
    }
  });
}

List.defaultProps = {
  list: [],
};

List.propTypes = {
  list: PropTypes.array,
};

export default List;
