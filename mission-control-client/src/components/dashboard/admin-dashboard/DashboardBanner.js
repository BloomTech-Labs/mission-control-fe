import React from "react";

const DashboardBanner = () => {
  const programs = ["web", "ux/ui", "ds"];

  return (
    <div className="dashboard-banner-container">
      <div className="dashboard-banner-head">
        <div className="dashboard-product-cohorts-and-name">
          <p>Lambda Labs</p>
          <p>DesignHub</p>
        </div>
        <div className="dashboard-product-status">
          <p>In Progress</p>
        </div>
      </div>
      <div className="dashboard-product-desc">
        Currently, designers who collaborate with one another are seeing that a
        lot of assets, deliverables, design files, feedback, links, etc. get
        lost due to the abundance of links in Google documents and Google Drive,
        as well as Slack. Design teams can not easily and efficiently
        collaborate and keep track of their work this way. DesignHub is meant to
        solve this.
      </div>
      <div className="dashboard-product-projects">
        <p className="dashboard-product-total-projects">Total Projects: 4</p>
        <div className="dashboard-product-project-programs">
          {programs.map(el => (
            (el === "ux/ui" && <p className="product-program-avatar program-ux">{el.toUpperCase()}</p>) || 
            (el === "ds" && <p className="product-program-avatar program-ds">{el.toUpperCase()}</p>) ||
            (el === "web" && <p className="product-program-avatar program-web">{el.toUpperCase()}</p>)
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardBanner;
