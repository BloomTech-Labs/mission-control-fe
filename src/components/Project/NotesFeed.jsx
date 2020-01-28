import React from 'react';
import Note from './Note';

const NotesFeed = ({ notes }) => {
  if (notes && notes.length) {
    return (
      <div>
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

export default NotesFeed;
