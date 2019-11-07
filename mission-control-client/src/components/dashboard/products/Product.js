import React from "react";

const Product = props => {
  const programs = ["web", "ux/ui", "ds"];

  return (
    <div
      onClick={() => props.setActiveProduct(props.el)}
      id={
        props.active.id && props.active.id === props.i
          ? "product-active"
          : undefined
      }
      className="product-container"
    >
      <div className="product-description">
        <h3 className="product-title">{props.el.name}</h3>
      </div>
    </div>
  );
};

export default Product;
