import React from "react";
import PropTypes from "prop-types";

function getPriceView(currency, price) {
  switch (currency) {
    case "USD":
      return `$${price}`;
    case "EUR":
      return `€${price}`;
    default:
      return `${price} ${currency}`;
  }
}

function getQuantityClass(quantity) {
  if (quantity <= 10) {
    return "level-low";
  } else if (quantity > 10 && quantity <= 20) {
    return "level-medium";
  } else if (quantity > 20) {
    return "level-high";
  }
}

function Listing({ items }) {
  const itemsView = items.map((item) => {
    if (item.state === "removed") return null;

    return (
      <div className="item" key={item.listing_id}>
        <div className="item-image">
          <a href={item.url}>
            <img src={item.MainImage.url_570xN} alt="" />
          </a>
        </div>
        <div className="item-details">
          <p className="item-title">{item.title.length > 50 ? `${item.title.substr(0, 50)}...` : item.title}</p>
          <p className="item-price">{getPriceView(item.currency_code, item.price)}</p>
          <p className={`item-quantity ${getQuantityClass(item.quantity)}`}>{item.quantity} left</p>
        </div>
      </div>
    );
  });

  if (itemsView.length === 0) return null;

  return <div className="item-list">{itemsView}</div>;
}

Listing.defaultProps = {
  items: [],
};

Listing.propTypes = {
  items: PropTypes.array,
};

export default Listing;
