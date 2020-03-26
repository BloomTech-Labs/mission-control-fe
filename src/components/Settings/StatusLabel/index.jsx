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
  return (
    <div className={labelDesign} style={{ background: `${label.color}` }}>
      {label.name}
    </div>
  );
};

export default StatusLabel;
