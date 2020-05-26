import React, { useState, useEffect } from 'react';
import { useQuery, useMutation, refetchQueries } from 'urql';

import { GET_ALL_TAGS as getTagsQuery } from './Queries';
import { CREATE_TAG as createTagQuery } from './Queries';
import { UPDATE_TAG as editTagQuery } from './Queries';
import { DELETE_TAG as deleteTagQuery } from './Queries';
import { TextField, Button, Card, makeStyles } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/Check';
import LinearProgress from '@material-ui/core/LinearProgress';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles({
  root: {},
  container: {
    display: 'flex',
    flexFlow: 'row wrap',
    width: '50%',
  },
  icon: {
    '&:hover': {
      cursor: 'pointer',
    },
  },

  tags: {
    border: 'solid 1px pink',
    width: '30%',
    margin: '2% auto',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  tagInput: {
    margin: '3% 0',
  },
});

const Tags = props => {
  const classes = useStyles();
  const [state, executeGetTagQuery] = useQuery({ query: getTagsQuery });
  const [deleteTagResults, deleteTag] = useMutation(deleteTagQuery);
  const [tagName, setTagName] = useState('');
  const [addTagResults, addTag] = useMutation(createTagQuery);
  const [updateTagResults, updateTag] = useMutation(editTagQuery);

  const [edit, setEdit] = useState({
    active: false,
    id: '',
    currentName: '',
    updatedName: '',
  });

  useEffect(() => {
    executeGetTagQuery({ requestPolicy: 'network-only' });
  }, []);

  const editTag = el => {
    if (edit.active) {
      if (edit.id === el.id) {
        return (
          <>
            <CheckIcon
              className={classes.icon}
              color="secondary"
              onClick={submitUpdatedTag}
            />
            <input
              variant="outlined"
              color="secondary"
              className={classes.tagInput}
              onChange={handleEditTag}
              type="text"
              name="tagname"
              id="tagname"
              placeholder={el.name}
              value={edit.updatedName}
            />
          </>
        );
      }
      return (
        <>
          <EditIcon
            className={classes.icon}
            color="secondary"
            onClick={() => initateEditTag(el)}
          />
          {el.name}
        </>
      );
    }
    return (
      <>
        <EditIcon
          className={classes.icon}
          color="secondary"
          onClick={() => initateEditTag(el)}
        />
        {el.name}{' '}
      </>
    );
  };
  const initateEditTag = el => {
    setEdit({ ...edit, active: true, id: el.id, currentName: el.name });
  };
  const handleEditTag = e => {
    e.persist();
    setEdit({ ...edit, updatedName: e.target.value });
  };

  const submitUpdatedTag = e => {
    e.preventDefault();
    if (edit.updatedName !== '') {
      updateTag({
        tag: { id: edit.id },
        data: { name: edit.updatedName },
      }).then(() => {
        // Refetch the query and skip the cache
        setEdit({ id: '', active: false, currentName: '', updatedName: '' });
        executeGetTagQuery({ requestPolicy: 'network-only' });
      });
    }
  };

  const handleChange = e => {
    e.persist();
    setTagName(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (tagName !== '') {
      console.log('send new or update query to BE');
      // Using create tag mutation
      addTag({ tag: { name: tagName } }).then(() => {
        // Refetch the query and skip the cache
        executeGetTagQuery({ requestPolicy: 'network-only' });
      });
    } // end if
    // reset to empty str
    setTagName('');
  };

  const handleDelete = id => {
    // Using delete tag mutation
    deleteTag({ tag: { id: id } }).then(() => {
      // Refetch the query and skip the cache
      executeGetTagQuery({ requestPolicy: 'network-only' });
    });
  };

  const { data, fetching, error } = state;
  if (fetching) return <LinearProgress color="primary" />;

  if (error) {
    console.log(error);
    return <h1>There was an error getting your tags</h1>;
  }
  if (data && data.tags) {
    return (
      <>
        <TextField
          variant="outlined"
          color="secondary"
          className={classes.tagInput}
          onChange={handleChange}
          type="text"
          name="tagName"
          id="tagName"
          placeholder="Tag Name"
          value={tagName}
        />
        <br />
        <Button variant="outlined" color="secondary" onClick={handleSubmit}>
          {' '}
          Create tag{' '}
        </Button>

        <h3> Current Tags </h3>

        <div className={classes.container}>
          {data.tags.map(el => (
            <Card className={classes.tags}>
              {editTag(el)}
              <DeleteIcon
                className={classes.icon}
                color="secondary"
                onClick={() => handleDelete(el.id)}
              />{' '}
            </Card>
          ))}
        </div>
      </>
    );
  }
};
export default Tags;
