import React, { useState } from 'react'
import Popup from "reactjs-popup";
import { connect } from 'react-redux'
import { updateMCRoles } from '../../actions'

const UserModal = props => {

    const { user, roles } = props

    const [selected, setSelected] = useState(user)
    const [formUsed, setFormUsed] = useState(false)

    const findRoleName = (rolesArr, roleId) => {
        const roleObj = rolesArr.find(arr => arr.id === roleId)
        return roleObj.name
    }

    const handleChange = (e) => {
        let roleName = findRoleName(roles, e.target.value)
        setSelected({...selected, 
            roleId: e.target.value,
            role: roleName
        })
        setFormUsed(true)
    }

    const handleSubmit = (e) => {
        const packet = {
            id: selected.userId,
            firstName: selected.firstName,
            lastName: selected.lastName,
            email: selected.email,
            roleId: selected.roleId,
        }
        e.preventDefault();
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
                  console.log("modal closed");
                  close();
                }}
                >
                Cancel
              </button>
                <Popup trigger={<button className={`button`} type = 'button'>Confirm Changes</button>} modal>
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