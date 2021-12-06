import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import Toolbar from "./Toolbar";
import ProjectList from "./ProjectList";

function Portfolio(props) {
  const { projects } = props;

  const [selectedFilter, setSelectedFilter] = useState("All");
  const [portfolioList, setPortfolioList] = useState(projects);

  let filters = [{ id: uuidv4(), text: "All" }];

  projects.map((item) => {
    if (!(filters.filter((c) => c.text === item.category).length > 0)) filters.push({ id: uuidv4(), text: item.category });
  });

  const handleClick = (filterText) => {
    setSelectedFilter(filterText);
    if (filterText === "All") setPortfolioList(projects);
    else setPortfolioList(projects.filter((p) => p.category === filterText));
  };

  return (
    <div className="container">
      <Toolbar filters={filters} selected={selectedFilter} onSelectFilter={handleClick} />
      <ProjectList projects={portfolioList} />
    </div>
  );
}

Portfolio.defaultProps = {
  projects: [],
};

Portfolio.propTypes = {
  projects: PropTypes.array,
};

export default Portfolio;
