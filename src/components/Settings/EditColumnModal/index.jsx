import React, { useState } from 'react';
import { Button, Modal } from 'semantic-ui-react';
import {
  modalStyle,
  modalCont,
  buttonStyle,
  basicInput,
  form,
  editColumnButton,
  headerDiv,
  closeButton,
  button,
} from './EditColumnModal.module.scss';
import { useMutation } from 'urql';
import CreateLabel from '../CreateLabel/index';
import LabelList from '../LabelList/index';
import { UPDATE_STATUS, CREATE_LABEL } from '../../Project/Queries/index';

const EditColumnModal = ({ column }) => {
  const [updateColumn, setUpdateColumn] = useState({
    name: column.name,
    id: column.id,
  });
  const [label, setLabel] = useState({ name: '', color: '' });
  const [open, setOpen] = useState(false);
  const [, executeMutation] = useMutation(UPDATE_STATUS);
  const [, executeCreateLabel] = useMutation(CREATE_LABEL);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const toggle = () => {
    handleClose();
    setLabel({ name: '', color: '' });
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
    if (label.name.length > 0 && label.color.length > 0) {
      executeCreateLabel(label);
    } else {
      return null;
    }
    setLabel({ name: '', color: '' });
  };

  const disableTer =
    (label.name.length > 0 && !label.color) || (label.color && !label.name);
  console.log(disableTer);
  return (
    <Modal
      open={open}
      onClose={toggle}
      trigger={
        <div>
          <button onClick={handleOpen} className={editColumnButton}>
            Edit
          </button>
        </div>
      }
      className={modalStyle}
    >
      <Modal.Header className={headerDiv}>
        <button className={closeButton} onClick={toggle}>
          x
        </button>
        Edit Column
      </Modal.Header>
      <Modal.Content className={modalCont}>
        <Modal.Description>
          <div className={form}>
            <label>Column name</label>
            <input
              name="name"
              value={updateColumn.name}
              onChange={handleChanges}
              className={basicInput}
            />
          </div>
          <br />
          <h3>Labels</h3>
          <LabelList column={column} columnId={column.id} />
          <CreateLabel column={column} label={label} setLabel={setLabel} />
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions className={buttonStyle}>
        <Button
          className={button}
          onClick={handleSubmit}
          content="Save"
          size={'large'}
          disabled={disableTer}
        />
      </Modal.Actions>
    </Modal>
  );
};
export default EditColumnModal;
