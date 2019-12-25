import React from "react";
import DashboardBanner from "./DashboardBanner";
import DashboardMetrics from "./DashboardMetrics";


const DashboardContent = (props) => {

  return (
    <div className="dashboard-content-container">
      <DashboardBanner />
      <DashboardMetrics products={props.products}/>
    </div>
  );
};

export default DashboardContent;
