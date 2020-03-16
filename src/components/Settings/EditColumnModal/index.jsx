import React, { useState } from 'react';
import { Button, Modal } from 'semantic-ui-react';
import EditIcon from '@material-ui/icons/Edit';
import { modalStyle, buttonStyle } from './EditColumnModal.module.scss';
import { hover } from '../StatusLabel/StatusLabel.module.scss';
import { useMutation } from 'urql';
import CreateLabel from '../CreateLabel/index';
import LabelList from '../LabelList/index';
import { UPDATE_STATUS } from '../../Project/Queries/index';
import DeleteColumn from '../DeleteColumn';
import { basicInput, form } from './EditColumnModal.module.scss';

const EditColumnModal = ({ column }) => {
  const [updateColumn, setUpdateColumn] = useState({
    name: column.name,
    id: column.id,
  });
  const [open, setOpen] = useState(false);
  const [, executeMutation] = useMutation(UPDATE_STATUS);

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
            {column.name} <EditIcon className={hover} onClick={handleOpen} />{' '}
            <DeleteColumn column={column} />
          </p>
        </div>
      }
      className={modalStyle}
    >
      <Modal.Header>Edit Column</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <div className={form}>
            <label>Name:</label>
            <input
              name="name"
              value={updateColumn.name}
              onChange={handleChanges}
              className={basicInput}
            />
            <Button
              className="ui button"
              onClick={handleSubmit}
              size={'small'}
              content="Save"
            />
          </div>
          <br />
          <br />
          <h3>Create Labels</h3>
          <CreateLabel column={column} />
          <LabelList column={column} columnId={column.id} />
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions className={buttonStyle}>
        <Button className="ui cancel button" onClick={toggle} size={'large'}>
          Close
        </Button>
      </Modal.Actions>
    </Modal>
  );
};
export default EditColumnModal;
