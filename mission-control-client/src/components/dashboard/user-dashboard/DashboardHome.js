import React, { useEffect } from "react";
import ProjectList from "../projects/ProjectList";
import { connect } from 'react-redux';
import { getProjectRoleByEmail } from '../../../actions/projectActions';
import DashboardContent from "./DashboardContent";

const DashboardHome = props => {
  useEffect(() => {
    const email = localStorage.getItem("email");
    email && props.getProjectRoleByEmail(email);
  }, []);

  return (
    <div className="user-dashboard-container">
      <ProjectList />
      <DashboardContent />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    state: state
  };
};

export default connect(mapStateToProps, {getProjectRoleByEmail})(DashboardHome);

