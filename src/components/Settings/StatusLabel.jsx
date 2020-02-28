import React from 'react';
import {labelDesign} from './Settings.module.scss';
import { FaRegEdit } from 'react-icons/fa';

const StatusLabel = props => {

    return (
        <div>
            <div
            className={labelDesign}
            style={{ background: `${props.label.color}` }}
            >
            {props.label.name}
            </div>
            <FaRegEdit />
        </div>
        
      );
}

export default StatusLabel;