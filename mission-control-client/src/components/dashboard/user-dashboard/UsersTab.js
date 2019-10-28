import React from 'react';
import UserTab from './UserTab';

const UsersTab = ({ props }) => {
    console.log(props);
    return (
        <div className='users-tab'>
            {props.length && props.map(user => {
                console.log(user);
                return <UserTab user={user} key={user.id} />
            })}
        </div>
    );
};

export default UsersTab;
