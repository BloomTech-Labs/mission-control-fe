import React, { useEffect, useRef, useState } from 'react'
import { connect } from 'react-redux'
import { getUsers, getMCRoles } from '../../actions'
import { css } from '@emotion/core';
import ClipLoader from 'react-spinners/ClipLoader';
import UserModal from './UserPromotionModal'
import ProductList from '../dashboard/products/ProductList'
import { getProducts } from '../../actions/productActions';

// import { getProducts } from '../../../actions/productActions';

const UserPromotions = props => {

    const { users, roles } = props

    const [values, setValues] = useState('')

    const [filtered, setFiltered] = useState([])
    
    const [searching, setSearching] = useState(false)

    const [ filteredRoles, setFilteredRoles ] = useState(false)

    useEffect(() => {
        if(!users.length){
            props.getUsers();
        }
        props.getMCRoles();
        props.getProducts();
    },[])
    
    const container = useRef(null)


    const handleChange = (e) =>{
        e.persist();
        setValues(e.target.value)
        // if the search bar has an empty string reset filtered list to empty array and set searching to false
        if(e.target.value === '' && !filteredRoles){
            setFiltered([])            
            setSearching(false)
        }else if(!filteredRoles){
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
        }else if(filteredRoles){
            setFiltered(()=> {
                return filtered.filter((user) => {
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

    const handleSelection = (e) => {
        if(e.target.value === 'all'){
            setFilteredRoles(false)
            setFiltered(users)
        }else{
            setFilteredRoles(true)
            setFiltered(users.filter(user => user.role === e.target.value))
        }
    }

    return (
        <div className = 'roles-container'>
        <h2 className = 'promotion-heading'>PROMOTE USER ROLES</h2>
        <div className = 'product-list_users_container'>
            <ProductList products={props.productStore.products} />
            <div className = 'users-container '>
                <div className = 'filter-results'>
                    <h2>Filter Results</h2>
                    <div className = 'search'>
                        <label htmlFor = 'user'>Name</label>
                        <input name = 'user' value = {values} type = 'text' placeholder='Search' onChange = {(e) => handleChange(e)}/>
                    </div>
                    <div className = 'filter'> 
                        <select onChange = {(e) => handleSelection(e)}>
                            <option onChange = {(e) => handleSelection(e)} value = 'all' >All Users</option>
                            {
                            roles.map(role => { 
                                return (
                                    <option 
                                    name = 'roleId'
                                    value = {role.name}
                                    onChange = {(e) => handleSelection(e)} 
                                    key={role.id}>{`${role.name.charAt(0).toUpperCase() + role.name.substring(1)}'s Only`}
                                    </option>
                                    )
                            })
                            }
                        </select>
                    </div>
                </div>
                {/* render loader until get request to users is complete */}
                { props.isLoading  ? 
                    <ClipLoader
                    sizeUnit={"px"}
                    size={60}
                    color={'#ab004c'}
                 /> 
                    // if the user is using the search bar render the filtered list 
                    : searching || filtered.length > 0 ?
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
    </div>
    )
}

const mapStateToProps = state => {
    return{
        users: state.settingsStore.missionControlUsers,
        isLoading: state.settingsStore.isLoading,
        roles: state.settingsStore.MCRoles,
        productStore: state.productStore,
        project: state.activeProductStore.project,
    }
}

export default connect(mapStateToProps, { getUsers, getMCRoles, getProducts })(UserPromotions)