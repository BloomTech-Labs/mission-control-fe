import React, { useState, useCallback } from 'react';
import { useMutation } from 'urql';
import { Modal, Button } from 'semantic-ui-react';
import { DELETE_LABEL as deleteLabel } from '../../Project/Queries/index';
import { FaTrashAlt } from 'react-icons/fa';
import { hover } from '../StatusLabel/StatusLabel.module.scss';
import { deleteLabelModal } from './DeleteLabel.module.scss';

const DeleteLabel = ({ label, columnId }) => {
  const [open, setOpen] = useState(false);
  const [, executeDelete] = useMutation(deleteLabel);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const delObj = {
    id: label.id,
    columnId: columnId,
  };

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      executeDelete(delObj);
      handleClose();
    },
    [executeDelete, delObj]
  );

  return (
    <Modal
      className={deleteLabelModal}
      open={open}
      onClose={handleClose}
      trigger={<FaTrashAlt className={hover} onClick={handleOpen} />}
    >
      <Modal.Header>Delete Label?</Modal.Header>
      <Modal.Actions>
        <Button color="black" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          positive
          icon="checkmark"
          labelPosition="right"
          content="Confirm"
          onClick={handleSubmit}
        />
      </Modal.Actions>
    </Modal>
  );
};
export default DeleteLabel;
