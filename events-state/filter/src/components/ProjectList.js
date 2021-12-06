import React from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

function ProjectList(props) {
  const { projects } = props;

  const cards = projects.map((pItem) => (
    <a href="#" className="card" key={uuidv4()}>
      <img src={pItem.img} alt={"Изображение-" + pItem.id} className="card__img" />
    </a>
  ));

  if (cards.length === 0) return null;

  return <div className="cards">{cards}</div>;
}

Toolbar.defaultProps = {
  projects: [],
};

Toolbar.propTypes = {
  projects: PropTypes.array,
};

export default ProjectList;
