import React from "react";
import PropTypes from "prop-types";
import ProductModel from "./ProductModel";

function ShopItem(props) {
  const { item } = props;
  return (
    <div className="item">
      <img src={item.img} alt={`${item.name}-${item.id}`} className="item__img" />
      <h3 className="item__name title">{item.name}</h3>
      <span className="item__color subtitle">{item.color}</span>
      <span className="item__price text-primary">${item.price}</span>
      <a href="#" className="item__add-to-card btn">
        Add to card
      </a>
    </div>
  );
}

ShopItem.defaultProps = {
  card: new ProductModel(),
};

ShopItem.propTypes = {
  item: PropTypes.instanceOf(ProductModel).isRequired,
};

export default ShopItem;
