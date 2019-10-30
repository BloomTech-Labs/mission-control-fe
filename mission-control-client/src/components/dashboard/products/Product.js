import React from "react";

const Product = props => {
  const programs = ["web", "ux/ui", "ds"];

  return (
    <div className="product-container">
      <div className="product-description">
        <h3 className="product-title">{props.el.productName}</h3>

        {/* Description to use in future releases */}

        {/* <p className="product-desc">
          {text.split(' ').slice(0, 10).join(' ') + "..."}
        </p> */}
      </div>
      <div className="product-programs">
        {programs.map(
          (el, i) =>
            (el === "ux/ui" && (
              <p key={i} className="product-program-avatar program-ux">
                {el.toUpperCase()}
              </p>
            )) ||
            (el === "ds" && (
              <p key={i} className="product-program-avatar program-ds">
                {el.toUpperCase()}
              </p>
            )) ||
            (el === "web" && (
              <p key={i} className="product-program-avatar program-web">
                {el.toUpperCase()}
              </p>
            ))
        )}
      </div>
    </div>
  );
};

export default Product;
