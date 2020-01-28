import React from 'react';
import Note from './Note';

import styles from '../../styles/noteFeed.module.scss';

export default ({ notes }) => {
  console.log(notes);
  if (notes && notes.length) {
    console.log(notes);
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
