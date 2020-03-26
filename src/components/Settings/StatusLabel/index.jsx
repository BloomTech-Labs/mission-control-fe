import React, { useState, useCallback } from 'react';
import {
  labelDesign,
  editModalStyle,
  headerDiv,
  closeButton,
  editLabelButton,
  button,
} from './StatusLabel.module.scss';
import { Modal, Header, Button } from 'semantic-ui-react';
import { FaRegEdit } from 'react-icons/fa';
import UpdateLabel from '../UpdateLabel/index';
import { UPDATE_LABEL as updateLabelMutation } from '../../Project/Queries';
import { useMutation } from 'urql';
const StatusLabel = ({ label, columnId }) => {
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
    <div className={labelDesign} style={{ background: `${label.color}` }}>
      {label.name}
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
    </div>
  );
};

export default StatusLabel;
