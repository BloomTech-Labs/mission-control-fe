import React from 'react';
import { useQuery } from 'urql';
import Note from './Note';

import { NOTE_FEED_QUERY as query } from '../Queries/index';

const NotesFeed = ({ projectId }) => {
  const [state] = useQuery({
    query,
    variables: { id: projectId },
  });

  const { data, fetching } = state;

  if (fetching) return <h2>Loading</h2>;
  if (data) {
    return (
      <div>
        {data.project.notes.map(note => {
          return (
            <Note
              projectId={projectId}
              key={note.id}
              note={note}
              user={data.me}
              projectManagers={data.project.projectManagers}
            />
          );
        })}
      </div>
    );
  }
  return <h2>There Are No Notes</h2>;
};

export default NotesFeed;
