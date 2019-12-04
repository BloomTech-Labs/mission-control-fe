import React from "react";

import UpdateProduct from './UpdateProduct';
import DeleteProduct from './DeleteProduct';

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
      <div>
        {/* <button>edit</button> */}
        {/* <button>delete</button> */}
        {/* {console.log(props.active)} */}
        <UpdateProduct index={props.active.id} product={props.active} />
        <DeleteProduct index={props.active.id} product={props.active} />
      </div>
    </div>
  );
};

export default Product;
