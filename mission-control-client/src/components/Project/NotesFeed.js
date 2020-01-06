import React, { useState } from 'react';
import Note from './Note';

let mockImg = 'https://ca.slack-edge.com/T4JUEB3ME-ULXJ07DJS-d95403332534-512';

export default () => {
  const [notes, setNotes] = useState([]);
  return (
    <div>
      {notes.map(note => {
        <Note title={note.title} author={{ photo: mockImg, name: 'Tony' }} />;
      })}
    </div>
  );
};
