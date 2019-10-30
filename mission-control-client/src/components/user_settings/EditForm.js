import React from 'react'
import { Form, Field, withFormik} from 'formik'
import { connect } from 'react-redux'
import * as Yup from 'yup'

const FormShape = props => {
    return(
        <div>
            <Form>
                <h3>Edit Password</h3>
                <Field name = 'password' type = 'password' placeholder = 'Password'/>
            </Form>        
        </div>
    )
}

const EditForm = withFormik({
    mapPropsToValues({password}){
        return{
            password: password || '',
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