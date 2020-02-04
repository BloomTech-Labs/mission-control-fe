import React, { useState, useEffect } from 'react';
import StarRatings from 'react-star-ratings';
import { Dropdown, Button as SemanticButton } from 'semantic-ui-react';

import { useMutation } from 'urql';
import extractAvatar from '../../../utils/managers';

import Attendees from '../Attendance';

import styles from './NoteEditor.module.scss';
import { CreateNoteMutation as createNote } from '../Queries/requests';

const topicOptions = [
  { key: 'gd', value: 'General Discussion', text: 'General Discussion' },
  {
    key: 'pca',
    value: 'Product Cycle Approval',
    text: 'Product Cycle Approval',
  },
  {
    key: 'rca',
    value: 'Release Canvas Approval',
    text: 'Release Canvas Approval',
  },
];

const NoteEditor = ({ user, projectId, projectManagers, executeQuery }) => {
  const initialState = {
    topic: '',
    content: '',
    rating: 0,
    attendees: [],
    expandedAttendees: false,
    expandedAbsent: false,
    absentees: projectManagers,
    error: true,
    hover: true,
    notification: false,
  };

  const [state, setState] = useState(initialState);
  const [, executeMutation] = useMutation(createNote);

  useEffect(() => {
    if (state.topic && state.content && state.rating > 0) {
      setState(s => ({ ...s, error: false, hover: false }));
    } else {
      setState(s => ({ ...s, error: true, hover: true }));
    }
  }, [state.topic, state.content, state.rating]);

  return (
    <div className={styles['main-container']}>
      <h2>Project Notes</h2>
      <div className={styles['editor-container']}>
        <div className={styles['avatar-container']}>
          <img src={extractAvatar(user.email)} alt={`avatar of ${user.name}`} />
        </div>
        <form
          onSubmit={e => {
            e.preventDefault();
            const input = {
              id: projectId,
              topic: state.topic,
              content: state.content,
              rating: state.rating,
              // Extracts an array of emails from array of Person objects
              attendedBy: Array.from(state.attendees, ({ email }) => email),
              notification: state.notification,
            };
            executeMutation(input);
            setState(initialState);
            executeQuery({ requestPolicy: 'cache-and-network' });
          }}
          className={styles['form-container']}
        >
          <div className={styles['form-header']}>
            <Dropdown
              placeholder="Select Topic"
              inline
              options={topicOptions}
              onChange={(_, { value }) => {
                setState({ ...state, topic: value });
              }}
              value={state.topic}
            />
            <StarRatings
              numberOfStars={3}
              name="rating"
              starRatedColor="rgb(245,73,135)"
              starHoverColor="rgb(245,73,135)"
              starEmptyColor="rgba(245,73,135,.2)"
              changeRating={rating => setState({ ...state, rating })}
              starDimension="20px"
              starSpacing=".5px"
              rating={state.rating}
            />
          </div>
          <div className={styles['body-container']}>
            <textarea
              className={styles['body-input']}
              placeholder="What's going on?"
              name="content"
              onChange={e => setState({ ...state, content: e.target.value })}
              value={state.content}
            />
          </div>
          <div className={styles['text-footer']}>
            <Attendees state={state} user={user} setState={setState} />
            <div
              className={
                state.expandedAbsent || state.expandedAttendees
                  ? styles['button-container-min']
                  : styles['button-container']
              }
            >
              <div className={styles.notification}>
                <label htmlFor="notification">
                  Email Notifications
                  <input
                    type="checkbox"
                    checked={state.notification}
                    id="notification"
                    name="notification"
                    onClick={() =>
                      setState({
                        ...state,
                        notification: !state.notification,
                      })
                    }
                  />
                </label>
              </div>
              <SemanticButton
                className={state.error ? styles.disabled : styles['save-btn']}
                type="submit"
                disabled={state.error}
                title={
                  state.hover
                    ? 'Please include a title, rating, and content'
                    : null
                }
              >
                Save
              </SemanticButton>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NoteEditor;
