import React, { useEffect } from "react";
import ProjectList from "../projects/ProjectList";
import { connect } from 'react-redux';
import { getProjectRoleByEmail } from '../../../actions/projectActions';
import DashboardContent from "./DashboardContent";

const DashboardHome = props => {
  useEffect(() => {
    const email = localStorage.getItem("email");
    /*
     * if (email) {
     *     props.getProjectRoleByEmail(email);
     * }
     * 
     * if (!email) {
     *     history.push("/login");
     * }
     */
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
    // needs to be refactored
  return {
    state: state
  };
}

export default connect(
    mapStateToProps, 
    {getProjectRoleByEmail}
)(DashboardHome);

