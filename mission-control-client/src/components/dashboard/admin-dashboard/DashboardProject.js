import React from 'react';

const DashboardProject = props => {

  return (
    <>
      <p className="admin-dashboard-project" >{props.el.name.toUpperCase()}</p>
    </>
  )
}

export default DashboardProject;