import React from "react";
import PropTypes from "prop-types";
import ProductModel from "./ProductModel";

function ShopCard(props) {
  const { card } = props;

  return (
    <div className="card">
      <img src={card.img} alt={`${card.name}-${card.id}`} className="card__img" />
      <h3 className="card__name title">{card.name}</h3>
      <span className="card__color subtitle">{card.color}</span>
      <div className="card__group">
        <span className="card__price text-primary">${card.price}</span>
        <a href="#" className="card__add-to-cart btn">
          Add to cart
        </a>
      </div>
    </div>
  );
}

ShopCard.defaultProps = {
  card: new ProductModel(),
};

ShopCard.propTypes = {
  card: PropTypes.instanceOf(ProductModel).isRequired,
};

export default ShopCard;
