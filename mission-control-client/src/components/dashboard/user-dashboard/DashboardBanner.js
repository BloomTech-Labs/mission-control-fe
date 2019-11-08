import React, { useEffect } from "react";
import { connect } from "react-redux";

const DashboardBanner = props => {

  const programs = ["web", "ux/ui", "ds"];

  return (
    <div className="dashboard-banner-container">
      <div className="dashboard-banner-head">
        <p>{props.activeProjectStore.active ? props.activeProjectStore.active.project.project.name : "Loading..."}</p>
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
          {props.activeProjectStore.active && new Date(props.activeProjectStore.active.project.project.end) > new Date() ? (
            <p className="product-status-completed">Completed</p>
          ) : (
            <p className="product-status-not-completed">Not Completed</p>
          )}
        </div>
      </div>
      <div className="dashboard-product-projects">
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    activeProjectStore: state.activeProjectStore,
    project: state.activeProductStore.project
  }
};

export default connect(mapStateToProps, {})(DashboardBanner);
