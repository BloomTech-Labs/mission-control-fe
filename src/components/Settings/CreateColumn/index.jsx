import React, { useState, useCallback, useContext } from 'react';
import { Button, Modal } from 'semantic-ui-react';
import { modalStyle, buttonStyle } from './CreateColumn.module.scss';
import { useMutation } from 'urql';
import { CREATE_COLUMN as createColumn } from '../../Project/Queries/index';

import { ColumnContext } from '../../../contexts/ColumnContext';

const CreateColumn = ({ programId }) => {
  const { column, setColumn } = useContext(ColumnContext);
  const [open, setOpen] = useState(false);
  const [, executeCreate] = useMutation(createColumn);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const toggle = () => {
    handleClose();
    setColumn({ id: '', name: '' });
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
      executeCreate(column);
      toggle();
    },
    [executeCreate, column, toggle]
  );

  return (
    <div>
      <Modal
        open={open}
        onClose={toggle}
        trigger={<Button onClick={handleOpen}>Create Column</Button>}
        className={modalStyle}
      >
        <Modal.Header>Create Column</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <form>
              <label> Column Name: </label>
              <input
                value={column.name}
                name="name"
                onChange={handleChanges}
                placeholder="Status"
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
