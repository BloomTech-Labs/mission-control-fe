import React from 'react';

import { rtd } from './projectListContainer.module.scss';

const ProjectListContainer = ({ children, status }) => {
  // console.log('status', status);

  const statusTitleArr = [];

  var i;
  for (i = 0; i < 3; i++) {
    statusTitleArr.push(status[i]);
  }

  // console.log('status limit 4', statusTitleArr);

  return (
    <table>
      <thead>
        <tr>
          <th>Project Health</th>
          <th>Project Name</th>
          <th className={rtd}>Last Updated</th>
          {statusTitleArr.length > 0
            ? statusTitleArr.map(statusData => (
                <th key={statusData.projects[0].id}>
                  {statusData.projects[0].name}
                </th>
              ))
            : ''}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

export default ProjectListContainer;
