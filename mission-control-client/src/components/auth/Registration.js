import React from "react";
import axios from "axios";
import {Form, Field, withFormik} from "formik";
import {useHistory} from "react-router-dom";
import * as Yup from "yup";
const URL = "http://mission-control-be-dev.us-east-1.elasticbeanstalk.com/api/auth/admin/register";
// TODO: encrypt password

function RegistrationForm({
    errors,
    touched,
    values,
    handleSubmit,
    status
}) {
    const history = useHistory();
    return (
        <Form
            history={history}
        >
            <Field 
                type="text"
                name="firstName"
            />
            {touched.firstName && errors.firstName && (
                <p className="error">{errors.firstName}</p>
            )}
            <Field 
                type="text"
                name="lastName"
            />
            {touched.lastName && errors.lastName && (
                <p className="error">{errors.lastName}</p>
            )}
            <Field 
                type="email"
                name="email"
            />
            {touched.email && errors.email && (
                <p className="error">{errors.email}</p>
            )}
            <Field 
                type="password"
                name="password"
            />
            {touched.password && errors.password && (
                <p className="error">{errors.password}</p>
            )}
            <Field 
                type="password"
                name="confirmPassword"
            />
            {touched.confirmPassword && errors.password && (
                <p className="error">{errors.confirmPassword}</p>
            )}
            <button type="submit">Submit</button>
        </Form>      
    );
}

export default withFormik({
    mapPropsToValues({
        history,
        firstName,
        lastName,
        email,
        password,
        confirmPassword
    }) {
        return {
            firstName: firstName || "",
            lastName: lastName || "",
            email: email || "",
            password: password || "",
            confirmPassword: confirmPassword || ""
        };
    },
    validationSchema: Yup.object().shape({
        firstName: Yup.string().required("Please, enter first name."),
        lastName: Yup.string().required("Please, enter last name."),
        email: Yup.string().email("Invalid email").required("Please, enter a valid email"),
        password: Yup.string()
            .min(8, "Password must be at least 8 characters.")
            .max(16, "Password cannot be more than 16 characters.")
            .required("Please, enter a password between 8 and 16 characters."),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password")], "Passwords must match.").required("Please, confirm password")
        
    }),
    handleSubmit(values, {setStatus, history}) {
        const packet = {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            password: values.password,
            roleId: "abc123"
        }
        axios.post(URL, packet)
            .then(res => {
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("user", res.data.user.userId);
                localStorage.setItem("fname", res.data.user.firstName);
                history.push(`/dashboard/${localStorage.getItem("user")}`);
                // history.push(`/dashboard/${res.data.user.userId}`);
            })
    }
})(RegistrationForm)
