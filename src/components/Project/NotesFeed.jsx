import React from 'react';
import Note from './Note';

const NotesFeed = ({ notes, projectId, user, projectManagers, fetching }) => {
  if (fetching) return <h2>Loading</h2>;
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
  }
  return <h2>There Are No Notes</h2>;
};

export default NotesFeed;
