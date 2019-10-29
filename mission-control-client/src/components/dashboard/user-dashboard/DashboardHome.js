import React from "react";
import ProductList from "../products/ProductList";
import DashboardContent from "./DashboardContent";

const DashboardHome = () => {
  return (
    <div className="admin-dashboard-container">
      <ProductList />
      <DashboardContent />
    </div>
  );
};

export default DashboardHome;
