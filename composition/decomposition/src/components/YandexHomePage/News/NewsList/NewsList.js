import React from "react";
import PropTypes from "prop-types";
import NewsItem from "./NewsItem";

function NewsList({ list }) {
  const listView = list.map((o) => <NewsItem key={o.id} {...o} />);

  if (listView.length === 0) return null;

  return <ul className="news-list">{listView}</ul>;
}

NewsList.defaultProps = {
  list: [],
};

NewsList.propTypes = {
  list: PropTypes.array,
};

export default NewsList;
