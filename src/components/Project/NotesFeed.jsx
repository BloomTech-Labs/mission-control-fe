import React, { useState } from 'react';
import Note from './Note';
import mockNotes from './data/mockNotes';

import styles from '../../styles/noteFeed.module.scss';

export default ({ notes }) => {
  // const [notes, setNotes] = useState(mockNotes);
  if (notes && notes.length) {
    return (
      <div className={styles['notes-container']}>
        {notes.map(note => {
          return <Note note={note} />;
        })}
      </div>
    );
  } else if (notes.length === 0) {
    return <h2>There are no notes.</h2>;
  }
  return <h2>Loading...</h2>;
};
