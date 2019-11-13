import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  getProducts,
  getPersons,
  getRoles,
  getProduct,
  getLambdaRoles,
  getProjects,
  getProjectGroups,
  getProjectGroupMembers,
  getPeopleGroups
} from "../../actions";

const Dashboard = props => {
  useEffect(() => {
    const id = "ck16mydh73pkp0a30761xx7fl";
    props.getProducts();
    props.getPersons();
    props.getRoles();
    props.getLambdaRoles();
    props.getProduct(id);
    props.getProjects();
    props.getProjectGroupMembers();
    // TODO checkout functions below
    // props.getPeopleGroups();
    // props.getProjectGroups()
  }, []);

  return (
    <>
      <h1>Dashboard</h1>
    </>
  );
};

const mapStateToProps = state => {
  return {
    state
  };
};

export default connect(
  mapStateToProps,
  {
    getPersons,
    getProducts,
    getRoles,
    getProduct,
    getLambdaRoles,
    getProjects,
    getProjectGroups,
    getProjectGroupMembers,
    getPeopleGroups
  }
)(Dashboard);
