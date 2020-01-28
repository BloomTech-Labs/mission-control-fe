import React from 'react';
import { useQuery } from 'urql';

import NotesFeed from './NotesFeed';
import Team from './Team';
import NoteEditor from './NoteEditor';
import Header from './Header';

import styles from '../../styles/projectView.module.scss';

import query from './query';
import managers from './data/managers';

export default ({ match }) => {
  const {
    params: { id },
  } = match;
  const [state] = useQuery({ query, variables: { id } });
  const { data } = state;

  return data ? (
    <div className={styles['parent-project-container']}>
      {console.log(`=========data===========\n`, data)}
      <div className={styles['project-page-contents']}>
        <div>
          <Header
            product={data.project.product.name}
            project={data.project.name}
          />
        </div>
        <div className={styles['project-container']}>
          {/* Header */}
          <div className={styles['editor-feed-container']}>
            {/* <NoteEditor user={data.me.email} attendedBy={managers} /> */}
            <NotesFeed notes={data.project.notes} />
          </div>
          {/* Team */}
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
