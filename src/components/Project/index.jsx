import React from 'react';
import { useQuery } from 'urql';

import NoteEditor from './NoteEditor';
import NotesFeed from './NoteFeed';
import Team from './Team';

import Header from './Header';

import {
  parentProjectContainer,
  projectPageContents,
  projectContainer,
  editorFeedContainer,
  teamContainer,
} from './Project.module.scss';

import { ProjectViewQuery as query } from './Queries/requests';

const Project = ({ match: { params } }) => {
  const { id } = params;
  const [state, executeQuery] = useQuery({ query, variables: { id } });
  const { data, fetching } = state;

  return data ? (
    <div className={parentProjectContainer}>
      <div className={projectPageContents}>
        <div>
          <Header projectId={id} />
        </div>
        <div className={projectContainer}>
          <div className={editorFeedContainer}>
            <NoteEditor
              executeQuery={executeQuery}
              user={data.me}
              projectId={id}
              projectManagers={data.project.projectManagers}
            />
            <NotesFeed
              notes={data.project.notes}
              projectId={id}
              user={data.me.email}
              projectManagers={data.project.projectManagers}
              fetching={fetching}
            />
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
