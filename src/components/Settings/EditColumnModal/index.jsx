import React, { useState } from 'react';
import { Button, Modal } from 'semantic-ui-react';
import EditIcon from '@material-ui/icons/Edit';
import { LabelContext } from '../../../contexts/LabelContext';
import { modalStyle, buttonStyle } from './EditColumnModal.module.scss';
import { useMutation } from 'urql';
import CreateLabel from '../CreateLabel/index';
import LabelList from '../LabelList/index';
import { UPDATE_COLUMN } from '../../Project/Queries/index';
import DeleteColumn from '../DeleteColumn';

const EditColumnModal = ({ column }) => {
  const [updateColumn, setUpdateColumn] = useState({
    name: column.name,
    id: column.id,
  });
  const [open, setOpen] = useState(false);
  const [, executeMutation] = useMutation(UPDATE_COLUMN);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const toggle = () => {
    handleClose();
  };
  const handleChanges = e => {
    e.preventDefault();
    setUpdateColumn({
      ...updateColumn,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    toggle();
    executeMutation(updateColumn);
  };

  return (
    <Modal
      open={open}
      onClose={toggle}
      trigger={
        <div>
          <p>
            {' '}
            {column.name} <EditIcon onClick={handleOpen} />{' '}
            <DeleteColumn column={column} />
          </p>
        </div>
      }
      className={modalStyle}
    >
      <Modal.Header>Edit Column</Modal.Header>
      <Modal.Content>
        <label>
          Name:
          <input
            name="name"
            value={updateColumn.name}
            onChange={handleChanges}
          />
        </label>
        <Modal.Description>
          <CreateLabel column={column} />
          <LabelList column={column} />
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions className={buttonStyle}>
        <Button className="ui button" onClick={handleSubmit}>
          Save
        </Button>
        <Button className="ui cancel button" onClick={toggle}>
          Cancel
        </Button>
      </Modal.Actions>
    </Modal>
  );
};
export default EditColumnModal;
