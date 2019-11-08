import React, { useEffect, useRef, useState } from 'react'
import { connect } from 'react-redux'
import { getUsers } from '../../actions'
import { css } from '@emotion/core';
import ClipLoader from 'react-spinners/ClipLoader';
import UserModal from './UserPromotionModal'


const UserPromotions = props => {

    const { users } = props

    const [ className, setClassName ] = useState('hide')

    useEffect(() => {
        if(!users.length){
            props.getUsers();
        }
    },[])
    
    const container = useRef(null)

    // const hideBtn = (e) => {
    //     console.log(e.target)
    //     setClassName('hide')
    // }

    // const showBtn = (e) => {
    //     console.log(e.target)
    //     setClassName('')
    // }

    return (
        <div className = 'roles-container'>
            <h2>Promote User Roles</h2>
            <div className = 'users-container '>
                { !props.isLoading ? 
                    users.map( user => { 
                        return (
                            <div 
                            className = 'user' 
                            key = {user.userId} 
                            // onMouseEnter = {(e) => showBtn(e)} 
                            // onMouseLeave = {(e) => hideBtn(e)} 
                            ref = {container} >
                                <h3>{`${user.firstName} ${user.lastName}`}</h3>
                                <span>-</span>
                                <p>{user.role.charAt(0).toUpperCase() + user.role.substring(1)}</p>
                                <UserModal user = {user} className = {`${className}`} />
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