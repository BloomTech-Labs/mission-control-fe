import React from 'react';
import { useQuery } from 'urql';
import Note from '../Note';

import { NoteFeedQuery as query } from '../Queries/index';

const NotesFeed = ({ projectId }) => {
  const [state] = useQuery({
    query,
    variables: { id: projectId },
  });
  const {
    data: {
      me,
      project: { notes, projectManagers },
    },
    fetching,
  } = state;

  if (fetching) return <h2>Loading</h2>;
  if (notes && notes.length) {
    return (
      <div>
        {notes.map(note => {
          return (
            <Note
              key={note.id}
              note={note}
              user={me}
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
