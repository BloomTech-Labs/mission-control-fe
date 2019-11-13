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
    const [searching, setSearching] = useState(false)

    useEffect(() => {
        if(!users.length){
            props.getUsers();
        }
        props.getMCRoles()
    },[])
    
    const container = useRef(null)


    const handleChange = (e) =>{
        e.persist();
        setValues(e.target.value)
        // if the search bar has an empty string reset filtered list to empty array and set searching to false
        if(e.target.value === ''){
            setFiltered([])            
            setSearching(false)
        }else{
            setFiltered(()=> {
                return users.filter((user) => {
                    // lower casing the input values to deep equality comparison
                    let lowerCased = e.target.value.toLowerCase().trim()

                    // grabbing the users first and last name from user object and setting moving the names into an array 
                    const usersName = `${user.firstName} ${user.lastName}`.split(' ')

                    // if the user has only entered either a last name or a first name
                    if(e.target.value.split(' ').length === 1){

                        //return the user if the input value matches up with either the first name or last name
                        if (lowerCased === usersName[0].toLowerCase().slice(0, e.target.value.length ) || lowerCased === usersName[1].toLowerCase().slice(0, e.target.value.length )){
                                return user
                        }

                        // if the user has entered a first and last name
                    }else if(e.target.value.split(' ').length > 1){
                        //return the user if the input value matches up with either the first name and last name
                        if(lowerCased === usersName.join(' ').toLowerCase().slice(0, e.target.value.length).trim()){
                            return user 
                        }
                    }
                })
            })
            setSearching(true)
        }
    }


    return (
        <div className = 'roles-container'>
            <h2 className = 'promotion-heading'>PROMOTE USER ROLES</h2>
            <div className = 'users-container '>
            <div className = 'search'>
                <label htmlFor = 'user'>Search</label>
                <input name = 'user' value = {values} type = 'text' placeholder='Name. . .' onChange = {(e) => handleChange(e)}/>
            </div>
                {/* render loader until get request to users is complete */}
                { props.isLoading  ? 
                    <ClipLoader
                    sizeUnit={"px"}
                    size={60}
                    color={'#ab004c'}
                 /> 
                    // if the user is using the search bar render the filtered list 
                    : searching ?
                        // if the filtered list contains user objects render the user objects
                        filtered.length > 0 ?
                        filtered.map( user => { 
                            return (
                            <div 
                            className = 'user' 
                            key = {user.userId} 
                            ref = {container} >
                                <h3>{`${user.firstName} ${user.lastName}`}</h3>
                                <span>-</span>
                                <p>{user.role.charAt(0).toUpperCase() + user.role.substring(1)}</p>
                                <UserModal user = { user } roles = { roles } />
                            </div>
                            )
                    })
                    // if user is using the search bar and there isnt any matches render the message below 
                    : <p className = 'no-users'>No Users Found</p>
                    // if user is not using the search bar render the entire user list
                : users.map( user => { 
                        return (
                            <div 
                            className = 'user' 
                            key = {user.userId} 
                            ref = {container} >
                                <h3>{`${user.firstName} ${user.lastName}`}</h3>
                                <span>-</span>
                                <p>{user.role.charAt(0).toUpperCase() + user.role.substring(1)}</p>
                                <UserModal user = { user } roles = { roles } />
                            </div>)
                    }) 
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