import React from "react";

const Product = props => {
  const programs = ["web", "ux/ui", "ds"];
    
  // useEffect may be needed once editing functionality is complete

  return (
    <div
      onClick={() => props.setActiveProduct(props.el)}
      id={
        props.active.id && (props.active.id === props.i)
          ? "product-active"
          : undefined // wondering about null or false here
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
