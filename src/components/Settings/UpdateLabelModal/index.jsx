import React, { useState, useCallback } from 'react';
import {
  labelDesign,
  editModalStyle,
  headerDiv,
  closeButton,
  editLabelButton,
  button,
} from './UpdateLabelModal.module.scss';
import UpdateLabel from '../UpdateLabel/index';
import { UPDATE_LABEL as updateLabelMutation } from '../../Project/Queries';
import { useMutation } from 'urql';
import { Modal, Header, Button } from 'semantic-ui-react';

const UpdateLabelModal = ({ label }) => {
  const initState = {
    id: `${label.id}`,
    name: `${label.name}`,
    color: `${label.color}`,
  };
  const [updateLabel, setUpdateLabel] = useState(initState);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const [, executeUpdate] = useMutation(updateLabelMutation);

  const toggle = () => {
    handleClose();
    setUpdateLabel({
      id: `${label.id}`,
      name: `${label.name}`,
      color: `${label.color}`,
    });
  };

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      executeUpdate(updateLabel);
      handleClose();
    },
    [executeUpdate, updateLabel]
  );

  return (
    <Modal
      open={open}
      onClose={toggle}
      className={editModalStyle}
      trigger={
        <button className={editLabelButton} onClick={handleOpen}>
          Edit
        </button>
      }
    >
      <Header className={headerDiv}>
        <button className={closeButton} onClick={toggle}>
          x
        </button>
        Edit Label
      </Header>
      <Modal.Content>
        <Modal.Description>
          <UpdateLabel
            label={updateLabel}
            setLabel={setUpdateLabel}
            handleClose={handleClose}
          />
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button className={button} onClick={handleSubmit}>
          Save Changes
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default UpdateLabelModal;
