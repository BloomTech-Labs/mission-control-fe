import React from 'react';
import UserTab from './UserTab';

// ToDo: Create a single user card that will map over the teammembers and create a card for each

const UsersTab = ({ props }) => {
    console.log(props);
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
            {props.length && props.map(user => {
                return <UserTab user={user} />
            })}
        </div>
    );
};

export default UsersTab;
