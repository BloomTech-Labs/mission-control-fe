import React from "react";
import { connect } from "react-redux";

const DashboardBanner = props => {
  console.log(props);
  const programs = ["web", "ux/ui", "ds"];

  return (
    <div className="dashboard-banner-container">
      <div className="dashboard-banner-head">
        <p>{props.activeProjectStore.active ? props.activeProjectStore.active.name : "Loading..."}</p>
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
        <div className="dashboard-product-status">
          <p>In Progress</p>
        </div> 
      </div>
      <div className="dashboard-product-projects">
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    activeProjectStore: state.activeProjectStore
  }
}
export default connect(mapStateToProps, null)(DashboardBanner);
