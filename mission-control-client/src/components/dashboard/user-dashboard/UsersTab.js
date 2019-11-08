import React from 'react';
import UserTab from './UserTab';

const UsersTab = ({ props }) => {
    return (
        <div className='users-tab'>
            {props.length && props.map(user => {
                return <UserTab user={user} key={user.id} />
            })}
        </div>
    );
};

export default UsersTab;
