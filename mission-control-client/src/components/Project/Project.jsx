import React from 'react';

import NotesFeed from './NotesFeed';
import Sidebar from '../Layout/Sidebar';
import Team from './Team';
import NoteEditor from './NoteEditor';

import styles from '../../styles/notes.module.scss';

import teamList from './data/mockTeam';
import mockSession from './data/mockEditor';

export default () => {
  return (
    <div className={styles['project-container']}>
      <Sidebar />
      {/* Header */}
      <NoteEditor user={mockSession.user} team={mockSession.attendees} />
      <NotesFeed />
      {/* Team */}
      <Team team={teamList} />
    </div>
  );
};
