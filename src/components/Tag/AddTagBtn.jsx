/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React, { useState } from 'react';
import { Button, Header, Modal } from 'semantic-ui-react';
import { useQuery } from 'urql';
import {
  bottomLinks,
  modalStyle,
  headerDiv,
  closeButton,
} from '../Settings/Settings.module.scss';
import { LABEL_LIST_VIEW } from '../ProjectList/Queries/projectQueries';
import CreateColumn from '../Settings/CreateColumn/index';

import ColumnSettings from '../Settings/ColumnSettings/index';

const AddTagBtn = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const toggle = () => {
    handleClose();
  };

  const [state] = useQuery({
    query: LABEL_LIST_VIEW,
    requestPolicy: 'cache-and-network',
  });

  const { data } = state;


  return (
    <div className={bottomLinks}>
      <Modal
        open={open}
        onClose={handleClose}
        trigger={<Button onClick={handleOpen}>Add Tag</Button>}
        className={modalStyle}
      >
        <Header className={headerDiv}>
          <button type="button" className={closeButton} onClick={toggle}>
            x
          </button>
          Manage Columns
          {/* statuses grabs the first and only program index in programs, might need to be reworked to use a query with a id variable */}
     
        </Header>
        <Modal.Content>
          <ColumnSettings />
        </Modal.Content>
      </Modal>
    </div>
  );
};

export default AddTagBtn;
