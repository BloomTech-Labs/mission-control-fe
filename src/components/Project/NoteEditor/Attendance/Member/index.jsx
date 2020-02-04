import React from 'react';

import { Label } from 'semantic-ui-react';

import { miniAvatarContainer } from './Member.module.scss';
import { checkNullAvatar } from '../../../../../utils';

export default ({ action, avatar, name, handleAttendance }) => {
  return (
    <div className={miniAvatarContainer}>
      <img src={checkNullAvatar(avatar)} alt={`avatar of ${name}`} />
      <button type="button">
        <Label disabled size="small">
          {name}
        </Label>
        {action === 'Remove' ? (
          <Label
            onClick={e => {
              handleAttendance(e, true);
            }}
            size="tiny"
            as="a"
            basic
            color="pink"
            pointing="left"
          >
            {action}
          </Label>
        ) : (
          <Label
            onClick={e => {
              handleAttendance(e, false);
            }}
            size="tiny"
            as="a"
            basic
            color="green"
            pointing="left"
          >
            {action}
          </Label>
        )}
      </button>
    </div>
  );
};
