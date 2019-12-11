import React from "react";
import { connect } from "react-redux";
import { activeProductStore } from "../../../reducers/activeProductStore";

const DashboardBanner = props => {
  // console.log("i broked it", props, );
  return (
    <div className="dashboard-banner-container">
      <div className="dashboard-banner-head">
        {/* <p>{props.activeProductStore.active && props.activeProductStore.active.product.name}</p> */}
        <p>
          {props.activeProductStore.active
            ? props.activeProductStore.active.name
            : "Loading..."}
        </p>
      </div>
      <div className="dashboard-product-projects">
        <p className="dashboard-product-total-projects">
          Total Projects:{" "}
          {props.activeProductStore.active &&
            props.activeProductStore.active.projects.length}
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    activeProductStore: state.activeProductStore
  };
};

export default connect(mapStateToProps, {})(DashboardBanner);
