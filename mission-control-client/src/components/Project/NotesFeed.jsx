import React, { useState } from 'react';
import Note from './Note';
import mockNotes from './data/mockNotes';

import styles from '../../styles/noteFeed.module.scss';

export default () => {
  const [notes, setNotes] = useState(mockNotes);
  return (
    <div className={styles['note-container']}>
      {notes.map(note => {
        return <Note note={note} />;
      })}
    </div>
  );
};
