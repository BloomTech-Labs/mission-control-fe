import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Not being used and can be deleted when we cleanup code

const UserTab = props => {
    const [githubInfo, setGithubInfo] = useState({ image: null, bio: null });

    useEffect(() => {
        axios.get(`https://api.github.com/users/${props.user.githubId}`)
            .then(res => setGithubInfo({ image: res.data.avatar_url, bio: res.data.bio }))
            .catch(err => console.log(err));
    }, [props.user.githubId]);

    return (
        <div className='user-tab'>
            <div className='user-tab-image'>
                <img src={githubInfo.image && githubInfo.image} alt='' />
            </div>
            <div className='user-description'>
                <h3>{props.user.firstname} {props.user.lastname}</h3>
                <p className='user-program'>{props.user.program.toUpperCase()}</p>
                <p>{githubInfo.bio && githubInfo.bio}</p>
            </div>
        </div>
    );
};

export default UserTab;
