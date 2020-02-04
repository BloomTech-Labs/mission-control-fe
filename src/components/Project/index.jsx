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

import { PROJECT_VIEW_QUERY as query } from './Queries';

const Project = ({ match: { params } }) => {
  const { id } = params;
  const [state] = useQuery({ query, variables: { id } });
  const { data } = state;

  return data ? (
    <div className={parentProjectContainer}>
      <div className={projectPageContents}>
        <div>
          <Header projectId={id} />
        </div>
        <div className={projectContainer}>
          <div className={editorFeedContainer}>
            <h2>Project Notes</h2>
            <NoteEditor user={data.me} projectId={id} />
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
