import React from 'react';

const DashboardProject = () => {

  const foo = ['labs17', 'labs18', 'labs19', 'labs20']

  return (
    <>
      {foo.map((p, i) => <p className="admin-dashboard-project" key={i}>{p.toUpperCase()}</p>)}
    </>
  )
}

export default DashboardProject;