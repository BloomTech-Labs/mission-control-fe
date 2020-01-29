import React from 'react';
import { useQuery } from 'urql';

import NotesFeed from './NotesFeed';
import Team from './Team';
import NoteEditor from './NoteEditor';
import Header from './Header';

import styles from '../../styles/projectView.module.scss';

import { ProjectViewQuery as query } from './requests';

const Project = ({ match: { params } }) => {
  const { id } = params;
  const [state] = useQuery({
    query,
    variables: { id },
  });
  const { data } = state;

  return data ? (
    <div className={styles['parent-project-container']}>
      <div className={styles['project-page-contents']}>
        <div>
          <Header project={data.project} />
        </div>
        <div className={styles['project-container']}>
          <div className={styles['editor-feed-container']}>
            <NoteEditor
              user={data.me.email}
              projectId={id}
              projectManagers={data.project.projectManagers}
            />
            <NotesFeed notes={data.project.notes} />
          </div>
          <div className={styles['team-container']}>
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
