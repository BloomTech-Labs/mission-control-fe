import React, { useState } from 'react';
import Note from './Note';
import mockNotes from './mockNotes';

let mockImg = 'https://ca.slack-edge.com/T4JUEB3ME-ULXJ07DJS-d95403332534-512';

export default () => {
  const [notes, setNotes] = useState(mockNotes);
  return (
    <div>
      <h1>Notes Feed</h1>
      {notes.map(note => {
        return <Note note={note} />;
      })}
    </div>
  );
};
