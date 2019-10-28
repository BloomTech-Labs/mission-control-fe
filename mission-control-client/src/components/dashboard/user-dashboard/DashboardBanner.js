import React, { useState } from "react";

const DashboardBanner = () => {
  const [expanded, setExpanded] = useState(true);

  const programs = ["web", "ux/ui", "ds"];

  return (
    <div className="dashboard-banner-container">
      <div className="dashboard-banner-head">
        <div className="user-dashboard-product-cohorts-and-name">
          <p>Lambda Labs</p>
          <p>DesignHub</p>
        </div>
        {/* <div className="dashboard-product-status">
          <p>In Progress</p>
        </div> */}
      </div>
    </div>
  );
};

export default DashboardBanner;
