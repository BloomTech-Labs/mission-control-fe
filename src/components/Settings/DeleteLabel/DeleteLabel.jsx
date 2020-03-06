import React, { useState, useCallback } from 'react';
import { useMutation } from 'urql';
import { Modal, Button } from 'semantic-ui-react';
import { DELETE_LABEL as deleteLabel } from '../../Project/Queries/index';
import { FaTrashAlt } from 'react-icons/fa';

const DeleteLabel = props => {
  const [open, setOpen] = useState(false);
  const [, executeDelete] = useMutation(deleteLabel);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      executeDelete(props.label);
      handleClose();
    },
    [executeDelete, props.label]
  );

  return (
    <Modal
      open={open}
      onClose={handleClose}
      trigger={<FaTrashAlt onClick={handleOpen} />}
    >
      <Modal.Header>Delete Label</Modal.Header>
      <Modal.Actions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Confirm</Button>
      </Modal.Actions>
    </Modal>
  );
};
export default DeleteLabel;
