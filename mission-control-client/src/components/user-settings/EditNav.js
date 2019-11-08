import React from 'react'
import { Link } from 'react-router-dom'

const EditNav = () => {
    return (
        <div className = 'edit-nav'> 
        <h2>Settings</h2>
            <ul className = 'edit-options'>
                <li>
                    <Link to = {`/profile/${localStorage.getItem('user')}/edit/email`}>Update Email</Link>
                </li>
                <li>
                    <Link to = {`/profile/${localStorage.getItem('user')}/edit/password`}>Update Password</Link>
                </li>
            </ul>
        </div>
    )
}

export default EditNav