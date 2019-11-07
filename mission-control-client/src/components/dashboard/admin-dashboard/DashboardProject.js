import React from "react";
import { connect } from "react-redux";

const DashboardProject = props => {

  return (
    <>
      <div className="admin-dashboard-project">
        <div className="admin-dashboard-project-names">
        <p className="admin-dashboard-project-name">
          {props.activeProductStore.active &&
            props.activeProductStore.active.name}
        </p>
        <p>{props.el.name.toUpperCase()}</p>
        </div>
        {new Date(props.el.end) > new Date() ? (
          <p className="admin-project-in-progress">In Progress</p>
        ) : (
          <p className="admin-project-completed">Completed</p>
        )}
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    activeProductStore: state.activeProductStore
  };
};

export default connect(
  mapStateToProps,
  null
)(DashboardProject);
