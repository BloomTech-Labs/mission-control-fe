import React from 'react';
import { Link } from 'react-router-dom';

import mapTime from '../../../mappers/mapTime';
import LetterGradeContainer from '../CodeClimate/LetterGradeContainer.jsx';
import LabelDropdown from '../LabelDropdown/index';

import { title, rtd } from './projectListRow.module.scss';

const ProjectRow = ({ project, status }) => {
  const statusLabelsArr = [];

  var i;
  for (i = 0; i < 3; i++) {
    statusLabelsArr.push(status[i]);
  }

  console.log('status label limit 4', statusLabelsArr);

  return (
    <tr>
      <td>
        <div></div>
      </td>
      <td className={title}>
        <Link to={`/project/${project.id}`} className={title}>
          {project.name}
        </Link>
        <LetterGradeContainer ccrepos={project.product.grades} />
      </td>
      <td className={rtd}>
        {project.notes.length
          ? mapTime(project.notes[0].updatedAt)
          : mapTime(project.updatedAt)}{' '}
        ago
      </td>
      {statusLabelsArr.length > 0
        ? statusLabelsArr.map(statusData => (
            <td>
              <LabelDropdown labels={statusData.projects[0]} />
            </td>
          ))
        : ''}
    </tr>
  );
};

export default ProjectRow;
