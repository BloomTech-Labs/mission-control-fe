import React, { useState, useCallback, useContext } from 'react';
import { Button, Modal } from 'semantic-ui-react';
import {
  modalStyle,
  buttonStyle,
  basicInput,
  form,
  addColumnButton,
} from './CreateColumn.module.scss';
import { useMutation } from 'urql';
import { CREATE_STATUS as createStatus } from '../../Project/Queries/index';

import { ColumnContext } from '../../../contexts/ColumnContext';

const CreateColumn = ({ programId, statuses }) => {
  const { column, setColumn } = useContext(ColumnContext);
  const [open, setOpen] = useState(false);
  const [, executeCreate] = useMutation(createStatus);

  let displayFiltered = statuses.filter(function(e) {
    return e.display === true;
  });

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const toggle = () => {
    handleClose();
    setColumn({ name: '' });
  };

  const handleChanges = e => {
    e.preventDefault();
    setColumn({
      ...column,
      [e.target.name]: e.target.value,
      id: programId,
    });
  };

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      if (displayFiltered.length >= 4) {
        executeCreate({ id: programId, name: column.name, display: false });
      } else {
        executeCreate(column);
      }
      toggle();
    },
    [executeCreate, column, toggle]
  );

  return (
    <div>
      <Modal
        open={open}
        onClose={toggle}
        trigger={
          <button className={addColumnButton} onClick={handleOpen}>
            Add Column
          </button>
        }
        className={modalStyle}
      >
        <Modal.Header>Add Column</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <form className={form}>
              <label> Column Name: </label>
              <input
                value={column.name}
                name="name"
                onChange={handleChanges}
                placeholder="Status"
                className={basicInput}
              />
            </form>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions className={buttonStyle}>
          <Button className="ui approve button" onClick={handleSubmit}>
            Save
          </Button>
          <Button className="ui cancel button" onClick={toggle}>
            Cancel
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default CreateColumn;
