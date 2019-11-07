import React from "react";
import { connect } from "react-redux";
import { setActiveProject } from "../../../actions/activeProductActions";
import { useHistory } from "react-router-dom";

const DashboardProject = props => {
  const history = useHistory();

  const handleClick = () => {
    props.setActiveProject(props.el.id);
    history.push(`/admin/dashboard/${props.el.id}`);
  };

  return (
    <>
      <div onClick={handleClick} className="admin-dashboard-project">
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
  { setActiveProject }
)(DashboardProject);
