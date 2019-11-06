import React from "react";
import DashboardProject from "../admin-dashboard/DashboardProject";

const DashboardMetrics = () => {
  return (
    <div className="admin-projects-container">
      <div className="admin-projects-head">
        <h1 className="admin-projects-title">Projects</h1>
      </div>
      <div className="admin-projects-content-container">
        <div className="admin-projects-content-spacer">
          <DashboardProject />
        </div>
      </div>
    </div>
  );
};

export default DashboardMetrics;
