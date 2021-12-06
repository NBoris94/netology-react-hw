import React from "react";
import PropTypes from "prop-types";
import withWrapper from "./HOC/withWrapper";

function Article(props) {
  return (
    <div className="item item-article">
      <h3>
        <a href="#">{props.title}</a>
      </h3>
      <p className="views">Прочтений: {props.views}</p>
    </div>
  );
}

Article.defaultProps = {
  url: "",
  views: 0,
};

Article.propTypes = {
  url: PropTypes.string,
  views: PropTypes.number,
};

const ArticleWithWrapper = withWrapper(Article);

export { Article, ArticleWithWrapper };
