import React from 'react';
import { Link } from 'react-router-dom';

import LetterGradeContainer from '../CodeClimate/LetterGradeContainer.jsx';
import LabelDropdown from '../LabelDropdown/index';

import {
  title,
  rtd,
  statusColumns,
  hiddenStatus,
} from './projectListRow.module.scss';

const ProjectRow = ({ project, statusColumn, statusDisplay }) => {
  console.log('status display', statusColumn);
  console.log('STATUSDISPLAY', statusDisplay);
  const statusLabelsArr = [];
  var i;
  if (statusColumn.length > 0) {
    for (i = 0; i < 4 && !(i >= statusColumn.length); i++) {
      statusLabelsArr.push(statusColumn[i]);
    }
    return (
      <tr>
        <td className={title}>
          <Link to={`/project/${project.id}`} className={title}>
            {project.name}
          </Link>
          <LetterGradeContainer ghrepos={project.product.grades} />
        </td>
        {/* We want to use this feature, but it's not quite where we want it to be just yet. Since we'd have to rip it out in multiple files, I decided to leave it in and comment it out for now. See ProjectListContainer */}
        {/* <td className={rtd}>
          {project.notes.length
            ? mapTime(project.notes[0].updatedAt)
            : mapTime(project.updatedAt)}{' '}
          ago
        </td> */}
        {statusColumn.length > 0 && statusLabelsArr.length > 0
          ? statusLabelsArr.map(statusData => (
              <td
                key={statusData.id}
                className={
                  statusData.display === true ? statusColumns : hiddenStatus
                }
              >
                <LabelDropdown
                  labels={statusData.labels}
                  statusData={statusData}
                />
              </td>
            ))
          : ''}
      </tr>
    );
  } else
    return (
      <tr>
        <td className={title}>
          <Link to={`/project/${project.id}`} className={title}>
            {project.name}
          </Link>
          <LetterGradeContainer ghrepos={project.product.grades} />
        </td>
        {/* <td className={rtd}>
          {project.notes.length
            ? mapTime(project.notes[0].updatedAt)
            : mapTime(project.updatedAt)}{' '}
          ago
        </td> */}
      </tr>
    );
};

export default ProjectRow;
