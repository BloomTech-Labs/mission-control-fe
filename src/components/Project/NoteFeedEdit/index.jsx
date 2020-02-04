import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';
import { Dropdown, Button as SemanticButton } from 'semantic-ui-react';
import { useMutation } from 'urql';

import Attendance from '../Attendance';

import extractAvatar from '../../../utils/managers';

import {
  mainContainer,
  editorContainer,
  avatarContainer,
  formContainer,
  formHeader,
  bodyContainer,
  bodyInput,
  textFooter,
  attendeesAvatars,
  buttonContainer,
  saveBtn,
  collapsedView,
  expandedView,
  disabled,
} from './NoteFeedEdit.module.scss';

import { UpdateNoteMutation as updateNote } from '../Queries/requests';

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

export default ({ user, note, id, setIsEditing }) => {
  const initialState = {
    topic: note.topic,
    content: note.content,
    rating: note.rating,
    attendees: note.attendedBy,
    expandedAttendees: false,
    expandedAbsent: false,
    absentees: [],
    error: true,
    hover: true,
  };
  const [state, setState] = useState(initialState);
  const [res, executeMutation] = useMutation(updateNote);

  if (res.error) {
    alert('Incorrect data shape');
  }

  const markAbsent = e => {
    e.preventDefault();
    e.stopPropagation();
    const deleted = e.target.previousSibling.textContent;
    const newAttendees = state.attendees.filter(({ name }) => {
      return name !== deleted;
    });
    const deletedAttendee = state.attendees.filter(({ name }) => {
      return name === deleted;
    });
    const newAbsentees = [...state.absentees, ...deletedAttendee];
    setState({ ...state, attendees: newAttendees, absentees: newAbsentees });
  };

  const markAttended = e => {
    e.preventDefault();
    e.stopPropagation();
    const attended = e.target.previousSibling.textContent;
    const newAttendee = state.absentees.filter(({ name }) => {
      return name === attended;
    });
    const newAttendees = [...state.attendees, ...newAttendee];
    const newAbsentees = state.absentees.filter(({ name }) => {
      return name !== attended;
    });
    setState({ ...state, attendees: newAttendees, absentees: newAbsentees });
  };

  return (
    <div className={mainContainer}>
      <div className={editorContainer}>
        <div className={avatarContainer}>
          <img src={extractAvatar(user)} alt={`avatar of ${user.name}`} />
        </div>
        <form
          onSubmit={e => {
            e.preventDefault();
            const input = {
              id,
              topic: state.topic,
              content: state.content,
              rating: state.rating,
              // Extracts an array of emails from array of Person objects
              attendedBy: Array.from(state.attendees, ({ email }) => email),
            };
            executeMutation(input);
            setState(initialState);
            setIsEditing(false);
          }}
          className={formContainer}
        >
          <div className={formHeader}>
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
          <div className={bodyContainer}>
            <textarea
              className={bodyInput}
              placeholder="What's going on?"
              name="content"
              onChange={e => setState({ ...state, content: e.target.value })}
              value={state.content}
            />
          </div>
          <div className={textFooter}>
            <div>
              <div
                className={
                  state.expandedAttendees ? expandedView : collapsedView
                }
                onClick={() =>
                  setState({
                    ...state,
                    expandedAttendees: !state.expandedAttendees,
                  })
                }
                role="presentation"
              >
                Attendees
                <div className={attendeesAvatars}>
                  {state.attendees.map(({ name, email }) => {
                    // TODO: get slack avatar based on email
                    return (
                      <Attendance
                        name={name}
                        email={email}
                        extractAvatar={extractAvatar}
                        toggle={markAbsent}
                        action="Remove"
                      />
                    );
                  })}
                </div>
              </div>
              {!!state.absentees.length && (
                <div
                  className={
                    state.expandedAbsent ? expandedView : collapsedView
                  }
                  onKeyDown={() =>
                    setState({
                      ...state,
                      expandedAttendees: !state.expandedAttendees,
                    })
                  }
                  onClick={() =>
                    setState({
                      ...state,
                      expandedAbsent: !state.expandedAbsent,
                    })
                  }
                  role="presentation"
                >
                  Absent
                  <div className={attendeesAvatars}>
                    {state.absentees.map(({ name, email }) => {
                      return (
                        <Attendance
                          name={name}
                          email={email}
                          extractAvatar={extractAvatar}
                          toggle={markAttended}
                          action="Add"
                        />
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
            <div className={buttonContainer}>
              <SemanticButton
                type="button"
                onClick={() => {
                  setIsEditing(false);
                }}
              >
                Cancel
              </SemanticButton>
              <SemanticButton
                className={state.error ? disabled : saveBtn}
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
