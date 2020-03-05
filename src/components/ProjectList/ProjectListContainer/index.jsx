import React from 'react';

import { rtd } from './projectListContainer.module.scss';

const ProjectListContainer = ({ children, status }) => {
  const statusTitleArr = [];
  var i;
  if (status.length > 0) {
    for (i = 0; i < 3 && !(i >= status.length); i++) {
      statusTitleArr.push(status[i]);
    }
    return (
      <table>
        <thead>
          <tr>
            <th>Project Health</th>
            <th>Project Name</th>
            <th className={rtd}>Last Updated</th>
            {status.length > 0 && statusTitleArr.length > 0
              ? statusTitleArr.map(statusData => (
                  <th key={statusData.id}>{statusData.name}</th>
                ))
              : ''}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    );
  } else
    return (
      <table>
        <thead>
          <tr>
            <th>Project Health</th>
            <th>Project Name</th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    );
};

export default ProjectListContainer;
