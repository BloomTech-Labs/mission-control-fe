import React, { useState } from 'react';
import { useMutation } from 'urql';
import { Modal, Button } from 'semantic-ui-react';
import { DELETE_COLUMN as deleteColumn } from '../../Project/Queries/index';
import { FaTrashAlt } from 'react-icons/fa';

const DeleteColumn = ({ column }) => {
  const [open, setOpen] = useState(false);
  const [, executeDelete] = useMutation(deleteColumn);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = e => {
    e.preventDefault();
    executeDelete(column);
    handleClose();
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      trigger={<FaTrashAlt onClick={handleOpen} />}
      size={'tiny'}
    >
      <Modal.Header>DeleteColumn</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <h1>WARNING: THIS ACTION CAN'T BE REVERSED</h1>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Confirm</Button>
      </Modal.Actions>
    </Modal>
  );
};

export default DeleteColumn;
