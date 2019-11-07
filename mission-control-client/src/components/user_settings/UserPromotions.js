import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getUsers } from '../../actions'
import { css } from '@emotion/core';
import ClipLoader from 'react-spinners/ClipLoader';



const UserPromotions = props => {

    const { users } = props
    
    useEffect(() => {
        if(!users.length){
            props.getUsers();
        }
    },[])

    const updateRole = () => {
        console.log('hello')
    }

    return (
        <div className = 'roles-container'>
            <h2>Promote User Roles</h2>
            <div className = 'users-container'>
                { !props.isLoading ? 
                    users.map( user => { 
                        return (
                            <div className = 'user' key = {user.userId}>
                                <h3>{`${user.firstName} ${user.lastName}`}</h3>
                                <span>-</span>
                                <p>{user.role.charAt(0).toUpperCase() + user.role.substring(1)}</p>
                                <button onClick={updateRole}>Update Role</button>
                            </div>)
                    }) 
                : <ClipLoader
                    sizeUnit={"px"}
                    size={60}
                    color={'#ab004c'}
                 />
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        users: state.settingsStore.missionControlUsers,
        isLoading: state.settingsStore.isLoading
    }
}

export default connect(mapStateToProps, { getUsers })(UserPromotions)