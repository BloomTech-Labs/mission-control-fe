import React, { useState, useEffect } from "react";
import { connect } from 'react-redux'
import { getPersons } from '../../actions'

// Axios GraphQL Config
import axiosLabsGraphQL from '../../utils/axiosLabsGraphQL';

const Dashboard = (props) => {

  useEffect(() => {
    props.getPersons()
  }, []);

  return (
    <>
      <h1>Dashboard</h1>
    </>
  );
};

const mapStateToProps = state => {
  return{
    state
  }
}

export default connect(mapStateToProps, { getPersons })(Dashboard);
