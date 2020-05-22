import React, { useState, useEffect, useRef } from "react";
import { useQuery, useMutation, refetchQueries } from "urql";

import { GET_ALL_TAGS as query } from "../Queries/TagQueries";
import { CREATE_TAG as createTagQuery } from "../Queries/TagQueries";
import { CONNECT_TO_PROJECT as connectToProjectQuery } from "../Queries/TagQueries";
import { UPDATE_TAG as editTagQuery } from "../Queries/TagQueries";
import { DELETE_TAG as deleteTagQuery } from "../Queries/TagQueries";
import { DISCONNECT_FROM_PROJECT as disconnect } from "../Queries/TagQueries";
import { TextField, Button, Card, makeStyles } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckIcon from "@material-ui/icons/Check";
import LinearProgress from "@material-ui/core/LinearProgress";
import EditIcon from "@material-ui/icons/Edit";

import {
  modalStyle,
  modalCont,
  buttonStyle,
  basicInput,
  form,
  editColumnButton,
  headerDiv,
  closeButton,
  button,
} from "../../Settings/EditColumnModal/EditColumnModal.module.scss";

import { columnEditCont } from "../../Settings/ColumnSettings/ColumnSettings.module.scss";

const useStyles = makeStyles({
  root: {},
  container: {
    display: "flex",
    flexFlow: "row wrap",
    width: "50%",
  },
  icon: {
    "&:hover": {
      cursor: "pointer",
    },
  },

  tags: {
    border: "solid 1px pink",
    width: "30%",
    margin: "2% auto",
    textAlign: "center",
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
  },
  tagInput: {
    margin: "3% 0",
  },
});

const Tags = ({ projectId }) => {
  const classes = useStyles();
  //Trying to just get the projectId directly from the URL, so useQuery wouldn't think
  //it was constantly updating. Didn't work.
  //var url = window.location.pathname;
  //var projectId = url.substring(url.lastIndexOf('/') + 1);
  var idObj = { projectId: projectId };

  // Not using delete tag for the time being, just disconnecting tags from projects.
  // const [deleteTagResults, deleteTag] = useMutation(deleteTagQuery)
  const [tagName, setTagName] = useState("");
  // Attempting to use this state "paused" to control how many times the useQuery would get called
  const [paused, setPaused] = useState(false);
  // let tagData;
  const [state, reexecuteQuery] = useQuery({
    query,
    variables: idObj,
    pause: paused,
  });
  const { data, fetching, error } = state;
  //console.log(state)
  // tagData = useRef(data)

  const [addTagResults, addTag] = useMutation(createTagQuery);
  const [connectTagResults, connectTag] = useMutation(connectToProjectQuery);
  const [disconnectTagResults, disconnectTag] = useMutation(disconnect);
  const [updateTagResults, updateTag] = useMutation(editTagQuery);

  const [edit, setEdit] = useState({
    active: false,
    id: "",
    oldName: "",
    newName: "",
  });

 //TODO Delete unneed code 
  // useEffect(() => {
  //   if (data) {
  //     if (!paused) {
  //       setPaused(true);
  //     }
  //   }
  // }, [data]);

  const editTag = (element) => {
    if (edit.active) {
      if (edit.id === element.id) {
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
              placeholder={element.name}
              value={edit.newName}
            />
          </>
        );
      } else {
        return (
          <>
            <EditIcon
              className={classes.icon}
              color="secondary"
              onClick={() => startEdit(element)}
            />
            {element.name}
          </>
        );
      }
    } else {
      return (
        <>
          <EditIcon
            className={classes.icon}
            color="secondary"
            onClick={() => startEdit(element)}
          />
          {element.name}{" "}
        </>
      );
    }
  };
  const startEdit = (element) => {
    setEdit({ ...edit, active: true, id: element.id, oldName: element.name });
  };

  const handleEditTag = (e) => {
    e.persist();
    setEdit({ ...edit, newName: e.target.value });
  };

  let submitUpdatedTag = (e) => {
    e && e.preventDefault();
    if (edit.newName !== "") {
      updateTag({ tag: { id: edit.id }, data: { name: edit.newName } }).then(
        () => {
          setPaused(false);
          reexecuteQuery({ requestPolicy: "network-only" });
          setEdit({ id: "", active: false, oldName: "", newName: "" });
        }
      );
    }
  };

  // Handling adding new tag input field changes

  const handleChange = (e) => {
    e.persist();
    setTagName(e.target.value);
  }; //end handleChange

  // Handling submit of new tag input field
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ projectId });
    if (tagName !== "") {
      console.log("send new or update query to BE");
      //Using create tag mutation
      addTag({ tag: { name: tagName } })
        .then((results) => {
          //get results of add tag for tag id
          console.log(results);
          if (results.error) {
            console.log(results.error);
          } else {
            connectTag({
              data: {
                project: {
                  connect: {
                    id: projectId,
                  },
                },
                tag: {
                  connect: {
                    id: results.data.createTag.id,
                  },
                },
              },
            });
          }
        })
        .then((results) => {
          // Refetch the query and skip the cache
          // setPaused(false);
          reexecuteQuery({ requestPolicy: "network-only" });
        });
      setTagName("");
    } //end if
    //reset to empty str
  }; //end handleSubmit

  const handleDelete = (id) => {
    //Using delete tag mutation
    disconnectTag({ id: id }).then(() => {
      // Refetch the query and skip the cache
      // setPaused(false);
      reexecuteQuery({ requestPolicy: "network-only" });
    });
  };
  if (fetching) {
    return <LinearProgress color="secondary" />;
  }
  if (error) {
    console.log(error);
    return <h1>There was an error getting your tags</h1>;
  }
  if (!data) {
    return <h1> hmmm, no data...</h1>;
  }
  if (data) {
    return (
      <>
        <TextField
          variant="outlined"
          color="secondary"
          className={classes.tagInput}
          onChange={handleChange}
          type="text"
          name="tagname"
          id="tagname"
          placeholder="Tag Name"
          value={tagName}
        />
        <br />
        <Button variant="outlined" color="secondary" onClick={handleSubmit}>
          Create tag
        </Button>

        <h3> Current Tags </h3>

        <div className={classes.container}>
          {data.project.tags.map((element) => (
            <Card className={classes.tags}>
              {editTag(element.tag)}
              <DeleteIcon
                className={classes.icon}
                color="secondary"
                onClick={() => handleDelete(element.id)}
              />
            </Card>
          ))}
        </div>
      </>
    );
  }
};

export default Tags;
