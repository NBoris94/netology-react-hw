import React from "react";
import PropTypes from "prop-types";
import NewsTabs from "./NewsTabs/NewsTabs";
import NewsList from "./NewsList/NewsList";
import NewsStocks from "./NewsStocks/NewsStocks";

function News({ news }) {
  return (
    <div className="news-block">
      <NewsTabs tabs={news.newsTabs} />
      <NewsList list={news.newsList} />
      <NewsStocks stocks={news.newsStocks} />
    </div>
  );
}

News.defaultProps = {};

News.propTypes = {
  news: PropTypes.object,
};

export default News;
