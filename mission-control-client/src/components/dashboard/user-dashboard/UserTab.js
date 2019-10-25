import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserTab = props => {
    const [githubImage, setGithubImage] = useState(null)
    useEffect(() => {
        axios.get(`https://api.github.com/users/${props.user.githubId}`)
            .then(res => setGithubImage(res.data.avatar_url))
            .catch(err => console.log(err));
    }, []);

    console.log(props);
    return (
        <div style={{ borderRadius: '5px', width: '35%', height: '100px', margin: '10px', backgroundColor: 'white' }}>
            <div className='user-tab-image'>
                {/* Could pull in a placeholder Icon or stock profile image for conditional */}
                <img src={githubImage ? githubImage : 'placeholder'} style={{ maxWidth: '50px' }} />
            </div>
            <p>{props.user.firstname} {props.user.lastname}</p>
            <p>{props.user.program.toUpperCase()}</p>
        </div>
    );
};

export default UserTab;
