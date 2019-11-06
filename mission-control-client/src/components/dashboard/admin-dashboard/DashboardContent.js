import React from "react";
import DashboardBanner from "./DashboardBanner";
import DashboardMetrics from "./DashboardMetrics";

const DashboardContent = () => {

  return (
    <div className="dashboard-content-container">
      <DashboardBanner />
      <DashboardMetrics />
    </div>
  );
};

export default DashboardContent;
