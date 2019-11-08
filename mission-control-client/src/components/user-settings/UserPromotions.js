import React, { useEffect, useRef, useState } from 'react'
import { connect } from 'react-redux'
import { getUsers, getMCRoles } from '../../actions'
import { css } from '@emotion/core';
import ClipLoader from 'react-spinners/ClipLoader';
import UserModal from './UserPromotionModal'


const UserPromotions = props => {

    const { users, roles } = props

    const [values, setValues] = useState('')
    const [filtered, setFiltered] = useState([])

    useEffect(() => {
        if(!users.length){
            props.getUsers();
        }
        props.getMCRoles()
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

    const handleChange = (e) =>{
        setValues(e.target.value)
        setFiltered(()=> {
            return users.filter((user) => {
                const usersName = `${user.firstName}  ${user.lastName}`.split(' ')
                const regex = /^[a-z\s]+$/i;
                
            })
        })
    }


    return (
        <div className = 'roles-container'>
            <h2>Promote User Roles</h2>
            <div className = 'users-container '>
            <input value = {values} type = 'text' placeholder='Search. . .' onChange = {(e) => handleChange(e)}/>
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
                                <UserModal user = { user } roles = { roles } />
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
        isLoading: state.settingsStore.isLoading,
        roles: state.settingsStore.MCRoles
    }
}

export default connect(mapStateToProps, { getUsers, getMCRoles })(UserPromotions)