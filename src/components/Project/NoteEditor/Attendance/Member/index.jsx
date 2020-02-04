import React from 'react';

import { Label } from 'semantic-ui-react';

import { miniAvatarContainer } from './Member.module.scss';
import extractAvatar from '../../../../../utils/managers';

export default ({ action, email, name, markAbsent, markAttended }) => {
  return (
    <div className={miniAvatarContainer}>
      <img src={extractAvatar(email)} alt={`avatar of ${name}`} />
      <button type="button">
        <Label disabled size="small">
          {name}
        </Label>
        {action === 'Remove' ? (
          <Label
            onClick={markAbsent}
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
            onClick={markAttended}
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
