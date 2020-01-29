import React, { useState } from 'react';
import Note from './Note';
import NoteFeedEdit from './NoteFeedEdit';
import mockNotes from './data/mockNotes';

const NotesFeed = ({ notes, projectId, user, projectManagers }) => {
  if (notes && notes.length) {
    return (
      <div>
        {notes.map(note => {
          return (
            <Note
              note={note}
              user={user}
              projectId={projectId}
              projectManagers={projectManagers}
            />
          );
        })}
      </div>
    );
  } else if (notes.length === 0) {
    return <h2>There are no notes.</h2>;
  }
  return <h2>Loading...</h2>;
};

export default NotesFeed;
