import React from 'react';

import { rtc } from './projectListContainer.module.scss';

const ProjectListContainer = ({ children, statusColumn }) => {
  const statusTitleArr = [];
  var i;
  if (statusColumn.length > 0) {
    for (i = 0; i < 4 && !(i >= statusColumn.length); i++) {
      statusTitleArr.push(statusColumn[i]);
    }
    return (
      <table>
        <thead>
          <tr>
            <th>Project Name</th>
            {/* <th className={rtd}>Last Updated</th> */}
            {statusColumn.length > 0 && statusTitleArr.length > 0
              ? statusTitleArr.map(statusData => (
                  <th className={rtc} key={statusData.id}>
                    {statusData.name}
                  </th>
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
