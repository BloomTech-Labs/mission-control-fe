import React from 'react';
import { connect } from 'react-redux'
import EditNav from './EditNav'
import EditForm from './EditForm'
import { useLocation, useParams } from 'react-router'
const Edit = props => {

  const params = useParams()
  const location = useLocation()

  return (
        <div className = 'edit-profile-container'>
          <h2 className = 'edit-header'>Edit Profile</h2>
          <div className = 'nav-form-container'>
            <EditNav />
            <EditForm params = { params } location = { location }/>
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