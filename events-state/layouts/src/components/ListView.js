import React from "react";
import PropTypes from "prop-types";
import ShopItem from "./ShopItem";

function ListView(props) {
  const { items } = props;

  const itemsView = items.map((item) => <ShopItem key={item.id} item={item} />);

  if (itemsView.length === 0) return null;

  return <div className="items">{itemsView}</div>;
}

ListView.defaultProps = {
  items: [],
};

ListView.propTypes = {
  items: PropTypes.array,
};

export default ListView;
