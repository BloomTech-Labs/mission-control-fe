import React from "react";

const DashboardBanner = () => {
  const programs = ["web", "ux/ui", "ds"];

  return (
    <div className="dashboard-banner-container">
      <div className="dashboard-banner-head">
          <p>DesignHub</p>
          <div className="dashboard-product-project-programs">
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
        {/* <div className="dashboard-product-status">
          <p>In Progress</p>
        </div> */}
      </div>
      <div className="dashboard-product-projects">
        <p className="dashboard-product-total-projects">Total Projects: 4</p>
      </div>
    </div>
  );
};

export default DashboardBanner;
