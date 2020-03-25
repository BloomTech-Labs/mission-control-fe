import React from 'react';

import { rtc, hiddenName } from './projectListContainer.module.scss';

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
            {/* We want to use this feature, but it's not quite where we want it to be just yet. Since we'd have to rip it out in multiple files, I decided to leave it in and comment it out for now. See ProjectListRow */}
            {/* <th className={rtd}>Last Updated</th> */}
            {statusColumn.length > 0 && statusTitleArr.length > 0
              ? statusTitleArr.map(statusData => (
                  <th
                    className={statusData.display === true ? rtc : hiddenName}
                    key={statusData.id}
                  >
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
            <th>Project Name</th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    );
};

export default ProjectListContainer;
