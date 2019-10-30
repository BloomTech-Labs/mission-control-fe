import React from 'react';
import { connect } from 'react-redux'
import EditNav from './EditNav'
import EditForm from './EditForm'

const Edit = props => {

  return (
        <div className = 'edit-profile-container'>
          <h2 className = 'edit-header'>Edit Profile</h2>
          <div className = 'nav-form'>
            <EditNav />
            <EditForm />
          </div>
        </div>
  );
}

const mapStateToProps = state => {
    return {
        ...state
    }
}

export default connect(mapStateToProps, {})(Edit)