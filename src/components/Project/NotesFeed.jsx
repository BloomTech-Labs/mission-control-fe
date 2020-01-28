import React, { useState } from 'react';
import Note from './Note';
import NoteFeedEdit from './NoteFeedEdit'
import mockNotes from './data/mockNotes';

import styles from '../../styles/noteFeed.module.scss';

export default ({ notes }) => {
  // const [notes, setNotes] = useState(mockNotes);
  const [isEditing, setIsEditing] = useState(false)
  console.log(notes);
  if (notes && notes.length) {
    console.log(notes);
    return (
      <div className={styles['notes-container']}>
        {isEditing === false ? 
        notes.map(note => {
          
          return (
            <> 
              <Note note={note} />
              <button onClick={() => {
                setIsEditing(!isEditing)
                }}>edit</button>
            </>
          );
        })
        :
        notes.map(note => {
          return <NoteFeedEdit note={note}/>
        })}
      </div>
    );
  } else if (notes.length === 0) {
    return <h2>There are no notes.</h2>;
  }
  return <h2>Loading...</h2>;
};
