import React, { useState } from 'react';
import { useMutation } from 'urql';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { DELETE_NOTE as deleteNote } from '../../Queries';

import { deleteButton } from './Notes.module.scss';

export default function DeleteNote({ id, setIsEditing }) {
  const [open, setOpen] = useState(false);
  const [, executeMutation] = useMutation(deleteNote);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={deleteButton}>
      <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
        Delete
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Are you sure?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            you would like to delete this note
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="default">
            Nevermind
          </Button>
          <Button
            color="secondary"
            autoFocus
            type="button"
            onClick={() => {
              executeMutation({ id });
              setIsEditing(false);
              handleClose();
            }}
          >
            Let&apos;s do it
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
