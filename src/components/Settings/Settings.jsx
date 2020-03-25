/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React, { useState } from 'react';
import {
  bottomLinks,
  modalStyle,
  headerDiv,
  closeButton,
} from './Settings.module.scss';
import { Button, Header, Modal } from 'semantic-ui-react';
import { useQuery } from 'urql';
import { LABEL_LIST_VIEW } from '../ProjectList/Queries/projectQueries';
import CreateColumn from './CreateColumn/index';

import ColumnSettings from './ColumnSettings/index';

const Settings = () => {
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

  const programId = data && data.programs[0].id;

  return (
    <div className={bottomLinks}>
      <Modal
        open={open}
        onClose={handleClose}
        trigger={<Button onClick={handleOpen}>Settings</Button>}
        className={modalStyle}
      >
        <Header className={headerDiv}>
          <button className={closeButton} onClick={toggle}>
            x
          </button>
          Manage Columns
          <CreateColumn
            programId={programId}
            column={data}
            statuses={data.programs[0].statuses}
          />
        </Header>
        <Modal.Content>
          <Modal.Description>
            <ColumnSettings />
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </div>
  );
};

export default Settings;
