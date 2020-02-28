import React from 'react';
import { Link } from 'react-router-dom';
import mapTime from '../../../mappers/mapTime';
import LetterGradeContainer from '../CodeClimate/LetterGradeContainer.jsx';

import { title, rtd, rtc } from './projectListRow.module.scss';

// Sanitize string inputs to remove Product prefix
const cleanName = str => {
  const match = str.match(/Labs \d{1,3} -(.+)/);
  return match[1];
};

const ProjectRow = ({ project }) => {
  return (
    <tr>
      <td>
        <div></div>
      </td>
      <td className={title}>
        <Link to={`/project/${project.id}`} className={title}>
          {cleanName(project.name)}
        </Link>
        <LetterGradeContainer
          ccrepos={[
            {
              name: 'Mission-Control-FE',
              grade: 'A',
            },
            {
              name: 'Mission Control-BE',
              grade: 'C',
            },
          ]}
        />
      </td>
      <td className={rtd}>
        {project.notes.length
          ? mapTime(project.notes[0].updatedAt)
          : mapTime(project.updatedAt)}{' '}
        ago
      </td>
      <td className={rtc}>
        <div>
          {!project.projectStatus ? (
            <div>Add Label</div>
          ) : (
            <div>{project.projectStatus.name}</div>
          )}
        </div>
      </td>
    </tr>
  );
};

export default ProjectRow;
