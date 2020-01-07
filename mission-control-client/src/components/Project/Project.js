import React from 'react';
import NotesFeed from './NotesFeed';
import Sidebar from '../Layout/Sidebar';
import Team from './Team';
import styles from '../../styles/notes.module.scss';

import teamList from './data/mockTeam';

export default () => {
  return (
    <div className={styles['project-container']}>
      <Sidebar />
      {/* Header */}
      {/* Input Field */}
      <NotesFeed />
      {/* Team */}
      <Team team={teamList} />
    </div>
  );
};
