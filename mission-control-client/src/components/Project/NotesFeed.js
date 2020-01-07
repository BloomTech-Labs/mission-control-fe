import React, { useState } from 'react';
import Note from './Note';
import mockNotes from './data/mockNotes';

export default () => {
  const [notes, setNotes] = useState(mockNotes);
  return (
    <div>
      {notes.map(note => {
        return <Note note={note} />;
      })}
    </div>
  );
};
