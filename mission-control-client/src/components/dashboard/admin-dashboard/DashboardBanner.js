import React, { useContext } from "react";
// Context
import { ProductContext } from "../../../context/ProductContext";

const DashboardBanner = () => {
  const { productState } = useContext(ProductContext);
  return (
    <div className="dashboard-banner-container">
      <div className="dashboard-banner-head">
        <p>{productState.active ? productState.active.name : "Loading..."}</p>
      </div>
      <div className="dashboard-product-projects">
        <p className="dashboard-product-total-projects">
          Total Projects:{" "}
          {productState.active && productState.active.projects.length}
        </p>
      </div>
    </div>
  );
};

export default DashboardBanner;
