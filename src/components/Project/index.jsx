import React from 'react';
import { useQuery } from 'urql';
import query from './query';

import NotesFeed from './NotesFeed';
import Team from './Team';
import NoteEditor from './NoteEditor';
import Header from './Header';

import {
  parentProjectContainer,
  projectPageContents,
  projectContainer,
  editorFeedContainer,
  teamContainer,
} from './Project.module.scss';

const Project = ({ match: { params } }) => {
  const { id } = params;
  const [state] = useQuery({ query, variables: { id } });
  const { data } = state;

  return data ? (
    <div className={parentProjectContainer}>
      <div className={projectPageContents}>
        <div>
          <Header project={data.project} projectId={id} />
        </div>
        <div className={projectContainer}>
          <div className={editorFeedContainer}>
            <NoteEditor user={data.me.email} />
            <NotesFeed notes={data.project.notes} />
          </div>
          <div className={teamContainer}>
            <Team
              team={data.project.team}
              teamLead={data.project.teamLead}
              sectionLead={data.project.sectionLead}
            />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <h1>Loading</h1>
  );
};

export default Project;
