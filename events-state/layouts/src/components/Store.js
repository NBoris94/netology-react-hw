import React, { useState } from "react";
import PropTypes from "prop-types";
import IconSwitch from "./IconSwitch";
import CardsView from "./CardsView";
import ListView from "./ListView";
import ProductModel from "./ProductModel";

function Store(props) {
  const { products } = props;

  const productList = products.map((p) => {
    return new ProductModel(p.id, p.name, p.price, p.color, p.img);
  });

  const [selectedView, setSelectedView] = useState("view_list");

  const handleSwitch = () => {
    if (selectedView === "view_list") {
      setSelectedView("view_module");
    } else {
      setSelectedView("view_list");
    }
  };

  return (
    <div className="container">
      <IconSwitch icon={selectedView} onSwitch={handleSwitch} />
      {selectedView === "view_list" ? <ListView items={productList} /> : <CardsView cards={productList} />}
    </div>
  );
}

Store.defaultProps = {
  products: [],
};

Store.propTypes = {
  products: PropTypes.array,
};

export default Store;
