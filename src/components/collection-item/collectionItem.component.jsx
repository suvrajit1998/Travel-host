import React from "react";

import Custombutton from "../custombutton/custombutton.component";

import "./collectionItem.style.scss";

const CollectionItem = ({ item }) => {
  const { name, imageUrl, price } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Custombutton inverted> Add to Cart </Custombutton>
    </div>
  );
};

export default CollectionItem;
