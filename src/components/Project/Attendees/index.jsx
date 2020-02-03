import React from 'react';
import { Label } from 'semantic-ui-react';

import { miniAvatarContainer } from './Attendees.module.scss';

export default ({ extractAvatar, toggle, name, email, action }) => {
  return (
    <div className={miniAvatarContainer}>
      <img src={extractAvatar(email)} alt={`avatar of ${name}`} />
      <button type="button">
        <Label disabled size="small">
          {name}
        </Label>
        {action === 'Remove' ? (
          <Label
            onClick={toggle}
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
            onClick={toggle}
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
