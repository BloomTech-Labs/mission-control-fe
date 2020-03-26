import React, { useState } from 'react';
import { useMutation } from 'urql';
import { Modal, Button } from 'semantic-ui-react';
import { DELETE_STATUS as deleteColumn } from '../../Project/Queries/index';
import { FaTrash } from 'react-icons/fa';
import {
  deleteColumnModal,
  trashIcon,
  button,
} from './DeleteColumn.module.scss';

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
      className={deleteColumnModal}
      trigger={<FaTrash className={trashIcon} onClick={handleOpen} />}
      size={'tiny'}
    >
      <Modal.Header>Delete Status "{column.name}"?</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <h3>WARNING</h3>{' '}
          <p>Deleting this column will also delete all corresponding labels</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="grey" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          className={button}
          icon="checkmark"
          labelPosition="right"
          content="Confirm"
          onClick={handleSubmit}
        />
      </Modal.Actions>
    </Modal>
  );
};

export default DeleteColumn;
