import React, {useState} from 'react';
import { useQuery, useMutation, refetchQueries} from 'urql';

import { GET_ALL_TAGS as getTagsQuery } from '../Queries/TagQueries';
import { CREATE_TAG as createTagQuery} from '../Queries/TagQueries';
import { UPDATE_TAG as editTagQuery} from '../Queries/TagQueries';
import { DELETE_TAG as deleteTagQuery} from '../Queries/TagQueries';
import { TextField, Button, Card, makeStyles } from "@material-ui/core"
import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/Check';
import LinearProgress from '@material-ui/core/LinearProgress';
import EditIcon from '@material-ui/icons/Edit';

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
} from '../../Settings/EditColumnModal/EditColumnModal.module.scss'

import { columnEditCont } from '../../Settings/ColumnSettings/ColumnSettings.module.scss';


//Basic Styling
// import {
//     tag
//   } from './tags.scss';

  const useStyles = makeStyles({
    root:{

    },
    container: {
      display: "flex",
      flexFlow: "row wrap",
      width: "50%",
      
    },
    icon: {
      '&:hover': {
        cursor: 'pointer'
      }
    },
  
    tags:{
      border: "solid 1px pink",
      width:"30%",
      margin:"2% auto",
      textAlign:"center",
      display:"flex",
      justifyContent:"space-between",
      alignContent:"center"
    },
    tagInput:{
      margin:"3% 0",
    }
  })


const Tags = ({ projectId }) => {
const classes = useStyles()
const [state, reexecuteQuery] = useQuery({ query: getTagsQuery });
const [deleteTagResults, deleteTag] = useMutation(deleteTagQuery)
const [tagName, setTagName] = useState('');
const [addTagResults, addTag] =  useMutation(createTagQuery);
const [updateTagResults, updateTag] = useMutation(editTagQuery);

const [edit, setEdit] = useState({
  active: false,
  id: '',
  oldName: '',
  newName: ''
});



const editTag = (element) => {
  if (edit.active) {
    if (edit.id === element.id) {
    return (
      <>
    <CheckIcon className={classes.icon} color="secondary" onClick={submitUpdatedTag} />
    <input
    variant="outlined"
    color="secondary"
    className={classes.tagInput}
    onChange={handleEditTag}
    type='text'
    name='tagname'
    id='tagname'
    placeholder={element.name}
    value={edit.newName}
  /></>)} else {
    return (
      <>
      <EditIcon className={classes.icon} color='secondary' onClick={() => startEdit(element)} />
      {element.name}
      </>
    )
    }
  } else {
    return (<><EditIcon className={classes.icon} color='secondary' onClick={() => startEdit(element)}/>{element.name } </>)
  }
}
const startEdit = (element) => {
  setEdit({...edit, active: true, id: element.id, oldName: element.name})
}

const handleEditTag = e => {
      //reset timer on each key stroke
      e.persist();
      setEdit({...edit, newName: e.target.value});
}

let submitUpdatedTag = e => {
  e && e.preventDefault();
  if (edit.newName !== '') {
    updateTag({tag: {id: edit.id}, data: { name: edit.newName}
    }).then(() => {
                // Refetch the query and skip the cache
                setEdit({id: '', active: false, oldName: '', newName: ''});
                reexecuteQuery({ requestPolicy: 'network-only' });
    })
  }

}

const handleChange = e => {
    //reset timer on each key stroke
    e.persist();
    setTagName(e.target.value);
  }//end handleChange

  const handleSubmit = e => {
    //hitting enter key submits immediately
    e && e.preventDefault();
    //clear the submit timer and submit form automatically
    if (tagName !== '') {
      console.log('send new or update query to BE');
      //Using create tag mutation
      addTag({tag: {name: tagName}
        }).then(() => {
          // Refetch the query and skip the cache
        reexecuteQuery({ requestPolicy: 'network-only' });
        }
      )

    }//end if
    //reset to empty str
    setTagName('');
  
  }//end handleSubmit


  const handleDelete = (id) => {

    //Using delete tag mutation
    deleteTag({tag: {id: id}
      }).then(() => {
        // Refetch the query and skip the cache
      reexecuteQuery({ requestPolicy: 'network-only' });
      }
    )
    }

  const { data, fetching, error } = state;

  if (fetching) return <LinearProgress color="secondary" />;


  if (error) {
      console.log(error)
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
            type='text'
            name='tagname'
            id='tagname'
            placeholder='Tag Name'
            value={tagName}
          />
          <br />
            <Button variant="outlined" color="secondary" onClick={handleSubmit}> Create tag </Button>

            <h3> Current Tags </h3>

            <div className={classes.container}>
            {data.tags.map(element => (
                                <Card className={classes.tags}>{editTag(element)}<DeleteIcon className={classes.icon} color="secondary"  onClick={() => handleDelete(element.id)} /> </Card>
            ))}
            </div>
        </>
    );
  }
};

export default Tags;
