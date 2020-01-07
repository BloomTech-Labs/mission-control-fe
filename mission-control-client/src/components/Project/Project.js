import React from 'react';
import NotesFeed from './NotesFeed';
import Sidebar from '../Layout/Sidebar';

import styles from '../../styles/notes.module.scss';

export default () => {
  return (
    <div className={styles['project-container']}>
      <Sidebar />
      <NotesFeed />
    </div>
  );
};
