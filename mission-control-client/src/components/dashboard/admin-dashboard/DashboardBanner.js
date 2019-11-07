import React from "react";
import { connect } from "react-redux";

const DashboardBanner = props => {
  const programs = ["web", "ux/ui", "ds"];

  console.log(props)

  return (
    <div className="dashboard-banner-container">
      <div className="dashboard-banner-head">
          <p>{props.activeProductStore.active ? props.activeProductStore.active.name : "Loading..."}</p>
          <div className="dashboard-product-project-programs">
            {/* {programs.map(
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
            )} */}
          </div>
        {/* <div className="dashboard-product-status">
          <p>In Progress</p>
        </div> */}
      </div>
      <div className="dashboard-product-projects">
        <p className="dashboard-product-total-projects">Total Projects: {props.activeProductStore.active && props.activeProductStore.active.projects.length}</p>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    activeProductStore: state.activeProductStore
  }
}

export default connect(mapStateToProps, {})(DashboardBanner);
