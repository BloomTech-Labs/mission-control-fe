import React from "react";
import DashboardProject from "../admin-dashboard/DashboardProject";
import { connect } from 'react-redux';

const DashboardMetrics = props => {

  console.log(props)
  
  return (
    <div className="admin-projects-container">
      <div className="admin-projects-head">
        <h1 className="admin-projects-title">Projects</h1>
      </div>
      <div className="admin-projects-content-container">
        <div className="admin-projects-content-spacer">
          {props.activeProductStore.active && props.activeProductStore.active.projects.map((el, i) => (
            <DashboardProject key={i} el={el}/>
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    activeProductStore: state.activeProductStore
  };
};

export default connect(mapStateToProps, null)(DashboardMetrics);
