import React from 'react'
import { Form, Field, withFormik} from 'formik'
import { connect } from 'react-redux'
import * as Yup from 'yup'

const FormShape = props => {

    const { params } = props

    const { location } = props

    let formType = location.pathname.split('/')

    formType = formType[formType.length - 1]

    console.log(formType)

    const isPassword = formType === 'password'

    return(
        <div className = 'update-form-container'>
        <Form className = 'update-form'>
            <h3>Update {formType}</h3>
            <div className = 'inputs'>
                <Field name = {formType} type = { isPassword ? 'password' : 'email'} placeholder = { isPassword ? "Current Password" : "Current Email"} className = 'current'/>
                <Field name = {`new${formType}`} type = { isPassword ? 'password' : 'email' } placeholder = { isPassword ? "New Password" : "New Email" } className = 'new'/>
                <Field name = {`confirm${formType}`} type = { isPassword ? 'password' : 'email' } placeholder = { isPassword ? "Confirm New Password" : "Confirm New Email"} className = 'confirm'/>
            </div>
                <button type = 'submit'>CONFIRM CHANGES</button>
            </Form>        
        </div>
    )
}

const EditForm = withFormik({
    mapPropsToValues({password, email, newemail, newpassword, confirmemail, confirmpassword}){
        return{
            email: email || '',
            newemail: newemail || '',
            confirmemail: confirmemail || '',
            password: password || '',
            newpassword: newpassword || '',
            confirmpassword: confirmpassword || ''
        }    
    },
    validationSchema: Yup.object().shape({
        password: Yup.string().required()
    }),
    handleSubmit(values, props){
        console.log(values, props)
    }
})(FormShape)

const mapStateToProps = state => {
    return{
        ...state
    }
}


export default connect(mapStateToProps, {})(EditForm)