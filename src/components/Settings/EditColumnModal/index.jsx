import React, { useState, useContext } from 'react';
import { Button, Modal } from 'semantic-ui-react';
import EditIcon from '@material-ui/icons/Edit';
import { LabelContext } from '../../../contexts/LabelContext';
import { modalStyle, buttonStyle } from './EditColumnModal.module.scss';

import CreateLabel from '../CreateLabel/index';
import LabelList from '../LabelList/index';

const EditColumnModal = ({ column }) => {
  const { setLabel } = useContext(LabelContext);

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const toggle = () => {
    handleClose();
    setLabel({ id: '', color: '', name: '' });
  };

  return (
    <Modal
      open={open}
      onClose={toggle}
      trigger={
        <p onClick={handleOpen}>
          {' '}
          {column.name} <EditIcon />
        </p>
      }
      className={modalStyle}
    >
      <Modal.Header>Edit Column</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <CreateLabel column={column} />
          <LabelList column={column} />
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions className={buttonStyle}>
        <Button className="ui cancel button" onClick={toggle}>
          Cancel
        </Button>
      </Modal.Actions>
    </Modal>
  );
};
export default EditColumnModal;
