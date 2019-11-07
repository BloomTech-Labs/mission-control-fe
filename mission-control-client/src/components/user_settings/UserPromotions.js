import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getUsers } from '../../actions'

const UserPromotions = props => {

    const { users } = props
    
    useEffect(() => {
        props.getUsers();
    },[])

    return (
        <div>
        { users.length ? users.map(user => <h1>{user.firstName}</h1>) : 'Hello'}
        </div>
    )
}

const mapStateToProps = state => {
    return{
        users: state.settingsStore.missionControlUsers
    }
}

export default connect(mapStateToProps, { getUsers })(UserPromotions)