import React, { useState } from 'react'
import Popup from "reactjs-popup";
import { connect } from 'react-redux'
import { updateMCRoles } from '../../actions'

const UserModal = props => {

    const { user, roles } = props

    const [selected, setSelected] = useState(user)
    const [formUsed, setFormUsed] = useState(false)
    const [err, setErr] = useState('Please Select An Option')

    //iterates over an array of roles
    const findRoleName = (rolesArr, roleId) => {
        const roleObj = rolesArr.find(arr => arr.id === roleId)
        //returns name of role when matching id's are found
        return roleObj.name
    }

    const handleChange = (e) => {
      //setting form used to true to prevent error from occuring
      console.log(e.target.value)
      setFormUsed(true)
      
      //finding roleName for use in confirmation message
      if(e.target.value !== 'Select Your Role'){
        let roleName = findRoleName(roles, e.target.value)
        setSelected({...selected, 
            roleId: e.target.value,
            role: roleName
        })
        setErr('')
      }else if(e.target.value === 'Select Your Role'){
        //a confirmation message is trying to run before any change occurs 
          setErr('Please Select An Option')
        }
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      if(formUsed){
          const packet = {
              id: selected.userId,
              firstName: selected.firstName,
              lastName: selected.lastName,
              email: selected.email,
              roleId: selected.roleId,
          }
          props.updateMCRoles(packet)
      }
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
              <p className="modal-text">Current Role: <span className = 'current-role'>{user.role.charAt(0).toUpperCase() + user.role.substring(1)}</span></p>
              <form onSubmit = {handleSubmit}>
                <p className="modal-text">New Role: 
                    <select onChange={handleChange}>
                    <option defaultValue=''>Select Your Role</option>
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
                className="button close-btn"
                onClick={() => {
                  close();
                }}
                >
                Cancel
                </button>
                {!err ? '' : err}
              {/* waiting until form has been used so that selected.role is a valid property */}
              { formUsed && !err ? 
                <Popup trigger={<button className={`button  confirm-btn`} type = 'button'>Confirm Changes</button>} modal>
                      <p className = 'confirmation-message'>
                      Are you sure you want to update {user.firstName} {user.lastName}'s Role To {selected.role.charAt(0).toUpperCase() + selected.role.substring(1)}
                      </p> 
                      <button
                      type='submit'
                      className="button confirm-btn"
                      onClick={handleSubmit}
                      >
                        Confirm
                      </button>
                      <button
                      className="button close-btn"
                      onClick={() => close()}>
                        Cancel
                      </button>
                      
                      </Popup>
                      : null}
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