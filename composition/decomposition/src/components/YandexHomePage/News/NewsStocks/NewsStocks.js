import React from "react";
import PropTypes from "prop-types";
import NewsStock from "./NewsStock";

function NewsStocks({ stocks }) {
  const stocksView = stocks.map((o) => <NewsStock key={o.id} {...o} />);

  if (stocksView.length === 0) return null;

  return <ul className="news-stocks">{stocksView}</ul>;
}

NewsStocks.defaultProps = {
  stocks: [],
};

NewsStocks.propTypes = {
  stocks: PropTypes.array,
};

export default NewsStocks;
