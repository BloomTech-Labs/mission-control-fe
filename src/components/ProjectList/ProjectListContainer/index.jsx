import React from 'react';

import { rtd } from './projectListContainer.module.scss';

const ProjectListContainer = ({ children }) => (
  <table>
    <thead>
      <tr>
        <th>Project Health</th>
        <th>Project Name</th>
        <th className={rtd}>Last Updated</th>
      </tr>
    </thead>
    <tbody>{children}</tbody>
  </table>
);

export default ProjectListContainer;
