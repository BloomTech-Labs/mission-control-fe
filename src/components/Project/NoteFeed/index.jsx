import React from 'react';
import { useQuery, useSubscription } from 'urql';
import Note from './Note';

import { NEW_SUB, NOTE_FEED_QUERY as query } from '../Queries/index';

const NotesFeed = ({ projectId }) => {
  const [state] = useQuery({
    query,
    variables: { id: projectId },
  });
  useSubscription({ query: NEW_SUB });

  const { data, fetching } = state;

  if (fetching) return <h2>Loading</h2>;
  if (data && data.project.notes.length) {
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
