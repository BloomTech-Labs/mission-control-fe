import React from "react";

const Product = props => {
  console.log(props.el.productName);

  const text = `Currently, designers who collaborate with one another are seeing that a
  lot of assets, deliverables, design files, feedback, links, etc. get
  lost due to the abundance of links in Google documents and Google Drive,
  as well as Slack. Design teams can not easily and efficiently
  collaborate and keep track of their work this way. DesignHub is meant to
  solve this.`

  return (
    <div className="product-container">
      <div className="product-description">
        <h3 className="product-title">{props.el.productName}</h3>
        <p className="product-desc">
          {text.split(' ').slice(0, 10).join(' ') + "..."}
        </p>
      </div>
      <div className="product-metrics-snapshot">
        <div className="product-cost-wrapper"><p className="product-cost-snapshot">Cost:</p><span>$8.32</span></div>
        <div className="product-grade-wrapper"><p className="product-grade-snapshot">Grade:</p><span>B+</span></div>
      </div>
    </div>
  );
};

export default Product;