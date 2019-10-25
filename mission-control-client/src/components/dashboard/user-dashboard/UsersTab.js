import React from 'react';
import UserTab from './UserTab';

const UsersTab = ({ props }) => {
    console.log(props);
    return (
        <div className='users-tab'>
            {props.length && props.map(user => {
                return <UserTab user={user} />
            })}
        </div>
    );
};

export default UsersTab;
