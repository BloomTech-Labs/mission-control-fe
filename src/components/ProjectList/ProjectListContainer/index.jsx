import React from 'react';

import { rtd, rtc } from './projectListContainer.module.scss';

const ProjectListContainer = ({ children }) => (
  <table>
    <thead>
      <tr>
        <th>Project Name</th>
        <th>Section Lead</th>
        <th>Team Lead</th>
        <th className={rtd}>Last Updated</th>
        <th className={rtc}>Status</th>
      </tr>
    </thead>
    <tbody>{children}</tbody>
  </table>
);

export default ProjectListContainer;
