import React, { useState } from "react";
import PropTypes from "prop-types";
import NewsTab from "./NewsTab";

function NewsTabs({ tabs }) {
  const [date, setDate] = useState(new Date());

  const formatter = new Intl.DateTimeFormat("ru", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const tabsView = tabs.map((o) => <NewsTab key={o.id} title={o.title} />);

  if (tabsView.length === 0) return null;

  return (
    <div className="news__group">
      <ul className="news-tabs">{tabsView}</ul>
      <span className="news__date">{formatter.format(date)}</span>
    </div>
  );
}

NewsTabs.defaultProps = {
  tabs: [],
};

NewsTabs.propTypes = {
  tabs: PropTypes.array,
};

export default NewsTabs;
