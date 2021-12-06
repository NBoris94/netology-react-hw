import React from "react";
import PropTypes from "prop-types";
import ShopCard from "./ShopCard";

function CardsView(props) {
  const { cards } = props;

  const cardsView = cards.map((card) => <ShopCard key={card.id} card={card} />);

  if (cardsView.length === 0) return null;

  return <div className="cards">{cardsView}</div>;
}

CardsView.defaultProps = {
  cards: [],
};

CardsView.propTypes = {
  cards: PropTypes.array,
};

export default CardsView;
