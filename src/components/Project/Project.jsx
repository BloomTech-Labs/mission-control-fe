import React from 'react';

import NotesFeed from './NotesFeed';
import Team from './Team';
import NoteEditor from './NoteEditor';

import styles from '../../styles/projectView.module.scss';

import teamList from './data/mockTeam';
import mockSession from './data/mockEditor';
import Header from './Header';

export default props => {
  console.log(props);
  return (
    <div className={styles['parent-project-container']}>
      <div className={styles['project-page-contents']}>
        <div>
          <Header />
        </div>
        <div className={styles['project-container']}>
          {/* Header */}
          <div className={styles['editor-feed-container']}>
            <NoteEditor user={mockSession.user} team={mockSession.attendees} />
            <NotesFeed />
          </div>
          {/* Team */}
          <div className={styles['team-container']}>
            <Team team={teamList} />
          </div>
        </div>
      </div>
    </div>
  );
};
