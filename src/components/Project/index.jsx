import React from 'react';
import { useQuery } from 'urql';

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

import { ProjectViewQuery as query } from './requests';

const Project = ({ match: { params } }) => {
  const { id } = params;
  const [state] = useQuery({
    query,
    variables: { id },
  });
  const { data, fetching } = state;

  return data ? (
    <div className={parentProjectContainer}>
      <div className={projectPageContents}>
        <div>
          <Header project={data.project} projectId={id} />
        </div>
        <div className={projectContainer}>
          <div className={editorFeedContainer}>
            <NoteEditor
              user={data.me.email}
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
