import React, { useState } from 'react'
import Popup from "reactjs-popup";
import { connect } from 'react-redux'
import { updateMCRoles } from '../../actions'

const UserModal = props => {

    const { user, roles } = props

    const [selected, setSelected] = useState(user)
    const [formUsed, setFormUsed] = useState(false)

    //iterates over an array of roles
    const findRoleName = (rolesArr, roleId) => {
        const roleObj = rolesArr.find(arr => arr.id === roleId)
        //returns name of role when matching id's are found
        return roleObj.name
    }

    const handleChange = (e) => {
      //finding roleName for use in confirmation message
        let roleName = findRoleName(roles, e.target.value)
        setSelected({...selected, 
            roleId: e.target.value,
            role: roleName
        })
        //setting form used to true to prevent error from occuring
          //a confirmation message is trying to run before any change occurs 
        setFormUsed(true)
    }

    const handleSubmit = (e) => {
      e.preventDefault();
        const packet = {
            id: selected.userId,
            firstName: selected.firstName,
            lastName: selected.lastName,
            email: selected.email,
            roleId: selected.roleId,
        }
        props.updateMCRoles(packet)
    }

    return(
        <div>
        <Popup trigger={<button className={`button`}>Update {user.firstName}'s Role</button>} modal>
        {close => (
          <div className="modal">
            <a className="close" onClick={close}>
              &times;
            </a>
            <div className="header"> Update {`${user.firstName} ${user.lastName}'s`} Role </div>
            <div className="content">
              <p>Current Role: {user.role.charAt(0).toUpperCase() + user.role.substring(1)}</p>
              <form onSubmit = {handleSubmit}>
                <p>New Role: 
                    <select onChange={handleChange}>
                        {
                            roles.map(role => { 
                                return (
                                    <option 
                                    name = 'roleId'
                                    value = {role.id}
                                    onChange={handleChange} 
                                    key={role.id}>{role.name.charAt(0).toUpperCase() + role.name.substring(1)}
                                    </option>
                                    )
                            })
                        }
                    </select>
                </p>
              <div className="actions">
              <button
                type = 'button'
                className="button"
                onClick={() => {
                  close();
                }}
                >
                Cancel
              </button>
                <Popup trigger={<button className={`button`} type = 'button'>Confirm Changes</button>} modal>
                {/* waiting until form has been used so that selected.role is a valid property */}
                    { formUsed ? <h2>Are you sure you want to update {user.firstName} {user.lastName}'s Role To {selected.role.charAt(0).toUpperCase() + selected.role.substring(1)}</h2> : null }
                    <button
                    type='submit'
                    className="button"
                    onClick={handleSubmit}
                    >Confirm</button>
                    <button
                    className="button"
                    onClick={() => close()}>Cancel</button>
                </Popup>
                </div>
                </form> 
            </div>
          </div>
        )}
      </Popup>
      </div>
    )
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps, { updateMCRoles })(UserModal)