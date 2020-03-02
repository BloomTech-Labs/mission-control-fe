import React from 'react';
import { useQuery } from 'urql';

import NoteEditor from './NoteEditor';
import NotesFeed from './NoteFeed';
import Team from './Team';

import Header from './Header';
import Grade from './Grade';

import {
  parentProjectContainer,
  projectPageContents,
  projectContainer,
  editorFeedContainer,
  teamContainer,
  gradeContainer,
} from './Project.module.scss';

import { PROJECT_VIEW_QUERY as query } from './Queries';

const Project = ({ match: { params } }) => {
  const { id } = params;
  const [state, executeQuery] = useQuery({ query, variables: { id } });
  const { data } = state;

  return data ? (
    <div className={parentProjectContainer}>
      <div className={projectPageContents}>
        <div>
          <Header projectId={id} />
        </div>
        <div className={projectContainer}>
          <div className={editorFeedContainer}>
          <div className={gradeContainer}>
            <Grade ccrepos={data.project.product.grades} />
          </div>
            <h2>Project Notes</h2>
            <NoteEditor
              executeQuery={executeQuery}
              user={data.me}
              projectId={id}
              projectManagers={data.project.projectManagers}
            />
            <NotesFeed projectId={id} />
          </div>
          <div className={teamContainer}>
            <Team projectId={id} />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <h1>Loading</h1>
  );
};

export default Project;
